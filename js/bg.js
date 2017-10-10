$(document).ready(function() {
    function getRandomImage(_array) {
        var length = _array.length;
        var random = Math.floor(Math.random() * length);
        return _array[random];
    }

    var images = new Array();
    $.getJSON("http://www.reddit.com/r/cinemagraphs+perfectloops+loadingicon/.json?jsonp=?", function(data) {
        $.each(data.data.children, function(i,item){
            if (!item.data.over_18) {
                var imgurl = item.data.url;
                if (imgurl.toLowerCase().match(/.*\.(jpg|gif|jpeg|png)$/)) {
                    images.push(imgurl);
                } else if (imgurl.toLowerCase().match(/.*\.(gifv)$/)) {
                    images.push(imgurl.replace(".gifv", ".gif"));
                }
            }
        });
        $("#bg img").attr('src', getRandomImage(images));
    });
});
