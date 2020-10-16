var $tumbs = $(".image a img");
var $popUpImg = $(".pop-up");

$tumbs.on('click', function(){
	// getting clicked tumb url and modifying to large image url by cutting 'tumb'
	var $tumbUrl = $(this).attr('src');
	var largeImgUrl = $tumbUrl.slice(0,-8) + '.jpg';
	// get index of clicked element
	var index = $tumbs.index(this);
	// replace url of pop up image
	$popUpImg.eq(index).attr("src", largeImgUrl);
});
