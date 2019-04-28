---
layout: default
title: linux安装完成没有wifi
category: [Technology, OS]
comments: true
---

## linux的wifi出现问题的介绍
几次重装linux系统,经常出现没有wifi的状况



## 错误详情
之前安装过CentOS,Kylin,OpenSU,等等经常出现没有wifi的状况,虽说猜测是遇到驱动问题,但是一直没有花时间去尝试解决.

今天再次遇到这个问题,而且已经重装两次了,还没有解决,只能直接找解决方案了.

目前的系统是ubuntu gnome 13.10,电脑是hp ProBook 6540b



## 解决方案

![img](https://img-blog.csdn.net/20150610180248090?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveWlyYW5hbnQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

1. dmesg | grep b43 （找到问题）    
dmesg用于检测和控制内核缓冲，帮助用户了解系统的启动信息。
如上图所示：系统提示到Linux Wireless下载firmware，我们直接点击Linux Wireless，打开之后发现The old website for now has a copy of the old content:Old Linux Wireless，因此我们需要参考的是Old Linux Wireless上的内容。如果显示的不是此内容，则参考上面的文章。

2. sudo apt-get install firmware-b43-installer（不建议，最好通过网站下载）    
下载安装b43-fwcutter是因为b43-fwcutter tool will extract firmware from the Windows driver
我们可以选择直接通过http://bues.ch/b43/fwcutter/b43-fwcutter-018.tar.bz2下载，得到的版本是version 018 of b43-fwcutter，文件默认下载在下载目录中。

3. 根据内核版本下载对应的驱动程序，参考Old Linux Wireless，如图二所示，根据我自己版本驱动我直接在http://www.lwfinger.com/b43-firmware/broadcom-wl-5.100.138.tar.bz2下载。下载的文件和b43-fwcutter在同一个目录下。
接下来我们进入下载目录，步骤4567是对b43-fwcutter进行解压，编译和安装，步骤9,10是对驱动文件解压和安装。

4. tar xjf b43-fwcutter-018.tar.bz2

5. cd b43-fwcutter-018

6. make

7. sudo make install

8. cd ..

9. tar xjf broadcom-wl-5.100.138.tar.bz2

10. sudo b43-fwcutter -w /lib/firmware broadcom-wl-5.100.138/linux/wl_apsta.o

11. modprobe b43（加载b43驱动）

12. sudo shutdown -r now

大功告成

## 附录

1. lspci -vv | grep Network （确定无线网卡的类型）
lspci    显示当前主机的所有硬件配备
-v    显示PCI接口装置的详细信息
-vv    显示PCI接口设备的更详细的信息
|    管道
grep Network 查找Network关键字所在的行
或者使用这里的命令lspci -nn -d 14e4:（注意:）
2. uname -a（确定内核版本）

![img2](https://img-blog.csdn.net/20150610181230514?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveWlyYW5hbnQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

最后wifi显示出来，终于可以连上wifi了.

![img3](https://img-blog.csdn.net/20150610180252884?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveWlyYW5hbnQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


# 说明

写这篇文章是作为使用linux的笔记.图片没有另外拍照,就没有重新上图了,不过确实正好解决问题.

[欢迎评论，欢迎指正,转载也请注明出处.](https://wangkun19930608.github.io/technology/os/2018/04/03/company-linux-have-no-wifi/)

## 参考文章

[linux无法连接wifi，不显示wifi](https://blog.csdn.net/yiranant/article/details/46445055)


## 版本记录

20180403 完成文章

20190528 完善文章格式