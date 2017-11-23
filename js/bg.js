$(document).ready(function() {
  function getRandomImage(_array) {
    var length = _array.length;
    var random = Math.floor(Math.random() * length);
    return _array[random];
  }

  var images = new Array();
  $.getJSON("http://www.reddit.com/r/cinemagraphs+perfectloops+loadingicon/.json?jsonp=?", function(data) {
    $.each(data.data.children, function(i, item) {
      if (!item.data.over_18) {
        var imgurl = item.data.url;
        if (imgurl.toLowerCase().match(/.*\.(jpg|gif|jpeg|png)$/)) {
          images.push(imgurl);
        } else if (imgurl.toLowerCase().match(/.*\.(gifv)$/)) {
          images.push(imgurl.replace(".gifv", ".gif"));
        }
      }
    });
    $("#content").css({
      'background': 'url(' + getRandomImage(images) + ') no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
      /* Filter for B&W background image */
      'filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
      /* Firefox 10+, Firefox on Android */
      '-moz-filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
      '-o-filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
      'filter': 'gray',
      /* IE6-9 */
      '-webkit-filter': 'grayscale(1)' /* Google Chrome, Safari 6+ & Opera 15+ */
    });
  });
});
