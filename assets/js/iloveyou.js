var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("富强\nPOWERFUL", "民主\nDEMOCRACY", "文明\nCIVILITY", "和谐\nHARMONY", "自由\nFREEOOM", "平等\nEQUALITY", "公正\nJUSTICE","法治\nRULE OF LAW", "爱国\nPATRIOTIC", "敬业\nDEDICATION", "诚信\nINTEGRITY", "友善\nFRIENDSHIP");
        var $i = $("<span />").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651",
			"white-space":"pre"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});