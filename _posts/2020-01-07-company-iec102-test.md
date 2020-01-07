---
layout: default
title: IEC102各种异常包的一个测试Demo
category: [Technology , JAVA]
comments: true
---

## 文章介绍
之前针对公司的软件进行了一个升级，将一个传送软件单独开发出来了，但是程序健壮性不够，需要添加一些特殊状况的判断！虽说一般对于102规约来讲，短帧报文出现连包的可能性比较小，但是老大要求，还是得做了！






# 目录

[TOC]








## 开发思路

基本上总体的功能是已经完善了，但是针对一些连包丢包的状况的处理还不够优化，目前的处理是，针对错误的包，直接丢了，因为tcp本身会自动重传嘛，可惜老大说不行，好吧，重新弄了！


为了方便测试，只能在这个类里面添加一些方法了，需要将一些规约的报文，手动输入，以此模拟各种网络的状况了！大致的代码如下：
```
//专门用于测试各种正常的异常的报文片段
	public static void main(String[] args) {
		//创建规约对象
		IEC102Socket sock = new IEC102Socket(null, null, null);
		//接收外部输出
		Scanner scan = new Scanner(System.in);
		
		//正常固定帧报文  "107AFFFF7816";
		//正常非固定帧报文  "680D006853FFFF96010AFFFF00BA020000AC16";
		System.out.println("接收数据中：");
		try {
			//开始新的规约接收字段
			sock.setFrame(true);

			// 判断是否还有输入
			while (scan.hasNext()) {
				String str1 = scan.next();
				//输出一下输入的字段 
				System.out.println("输入的数据为：" + str1);
				//将字符串转换为对应的十六进制字节流比方说说如 16 转换为 0x16 那种
				byte[] hexStr2Byte = hexStr2Byte(str1);
				//测试一下转换是否正常
				System.out.println(IECFunctions.byteArrayToHexString(hexStr2Byte, 0, hexStr2Byte.length));
				//开始进行正常的接收数据的解析
				sock.TestRtuFJ102_MsgRecv(hexStr2Byte);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		scan.close();

	}
```


测试的部分是有了，然后还是其他的部分，字节转换的部分在这里：
```
public static byte[] hexStr2Byte(String hex) {
	ByteBuffer bf = ByteBuffer.allocate(hex.length() / 2);
	for (int i = 0; i < hex.length(); i++) {
		String hexStr = hex.charAt(i) + "";
		i++;
		hexStr += hex.charAt(i);
		byte b = (byte) Integer.parseInt(hexStr, 16);
		bf.put(b);
	}
	return bf.array();
}


public static String byteArrayToHexString(byte[] b, int offset, int count) {
	StringBuffer sb = new StringBuffer(count * 2);
	for (int i = offset; i < offset + count; i++) {
		int v = b[i] & 0xff;
		if (v < 16) {
			sb.append('0');
		}
		sb.append(Integer.toHexString(v) + " ");
	}
	return sb.toString().toUpperCase();
}
```

这个就是其他的方法了。

然后最重要的还是对于各种包的一个判断了！由于之前是C语言些的，改编成java会有一些遗漏，所以还得测试完善。

目前大致的样子如下：
```
/**
 * 接收报文存储到缓冲区
 * 
 * @return
 * @throws IOException
 */
public boolean TestRtuFJ102_MsgRecv(byte[] bytes) throws IOException {
	//原始数据从sock读取，这里从字节流去模拟
	//this.IPcount = (char) stream.read(this.RXdata);
	this.RXdataAll = bytes;
	this.IPcountAll = bytes.length;

	//已经关闭，没有获取到数据
	if (IPcountAll == -1) {
		// closed by remote socket
		LOG.log.warn("?remote closed?"); 
		interrupt();
	}
	//遍历所有的数据
	for (int it = 0; it < IPcountAll; it++) {
		//判断是否是新的一帧，新帧这进入下面读取字节长度的部分
		if (newFrame) {
			//是新帧，则在下方获取长度后不再进入，否则直接追加数据到对应长度
			//此处不可以先判断是否是短帧，否则会造成长帧的长度首位如何和短帧一直的异常！ 
			//针对连包的处理，如果连包恰巧只剩下开头的三个及之内的状况需要特殊处理，其他的状况可以正常流程处理
			if (it + 2 < RXdataAll.length) {
				//针对非固定帧，固定帧进行特殊处理 
				//正常结束之后正常开始完整报文
				//如果规约的头三个字段正常则进行这里的操作
				if (!isLastOneData) {
					APDUPointer = 0;

					if (this.RXdataAll[it] == 0x10) {
						this.IPcount = 6;
					} else if (this.RXdataAll[it] == 0x68) {
						//是非固定帧，并且长度位齐全状况下处理
						// "长度校验,高低地址弄错,标准帧此处两个是重复位,系统中第二位为0,为了数据完整直接将0取高位"
						int lenFrame = IECFunctions.byte2ToInt(this.RXdataAll[it + 1], this.RXdataAll[it + 2]) + 6;
						this.IPcount = lenFrame;
					}
					//设置为新帧为fales，不再获取长度，而是直接向后追加到正常长度位
					newFrame = false;
					// trace("_ADPU length:"+APDUlength);
				} else if (!isHalfLength) {
					//长度位如果没有被截取，但是前面只是获取到了规约的第一个字段，需要特殊处理
					//这里直接根据前面的截取标记 isHalfLength 直接读取长度，不用判断帧的类别了
					int lenFrame = IECFunctions.byte2ToInt(this.RXdataAll[it], this.RXdataAll[it + 1]) + 6;
					this.IPcount = lenFrame;
					newFrame = false;
					isLastOneData = false;
				} else {
					//如果恰巧将第一，二字段截取，只剩下第三个字段为新的一帧开始时候
					//需要已经接收到的第二帧的数据，以及新接收到的数据，构成长度位
					int lenFrame = IECFunctions.byte2ToInt(this.RXdata[APDUPointer - 1], this.RXdataAll[it]) + 6;
					this.IPcount = lenFrame;
					newFrame = false;
					isLastOneData = false;
				}
			} else {
				//如果已经处理过了长度被截取的非固定帧，这里不需要再执行！
				if (!isLastOneData) {
					APDUPointer = 0;
					isLastOneData = true;
					//针对非固定帧的处理，如果长度位被截取一半，则作标记一下
					if (it + 1 < RXdataAll.length) {
						isHalfLength = true;
					}

					//针对固定帧的处理，如果只有10的截取
					if (this.RXdataAll[it] == 0x10) {
						this.IPcount = 6;
						newFrame = false;
					}
				}

			}
		}

		this.RXdata[APDUPointer] = RXdataAll[it];
		if (APDUPointer == this.IPcount - 1) { 
			if (chechDetail()) {
				newFrame = true;
				//doRecieve();
				System.out.println("正在处理报文" + IECFunctions.byteArrayToHexString(RXdata, 0, IPcount));
			}
		}
		APDUPointer++;
	}
	//
	return true;
}

public void setFrame(boolean b) {
	newFrame = b;
}
```

分支太多太乱了，后面看看有没有更好的方法处理一下！






## 说明

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/java/2020/01/07/company-iec102-test/ )


### 参考博客

无

### 版本记录
20200107 解决问题完成文章
