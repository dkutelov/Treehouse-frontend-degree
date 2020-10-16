var gallery = [
	['img/01.jpg','img/01t.jpg','img/01m2.jpg', 'img/01m.jpg'],
	['img/02.jpg','img/02t.jpg','img/02m2.jpg', 'img/02m.jpg'],
	['img/03.jpg','img/03t.jpg','img/03m2.jpg', 'img/03m.jpg'],
	['img/04.jpg','img/04t.jpg','img/04m2.jpg', 'img/04m.jpg'],
	['img/05.jpg','img/05t.jpg','img/05m2.jpg', 'img/05m.jpg'],
	['img/06.jpg','img/06t.jpg','img/06m2.jpg', 'img/06m.jpg'],
	['img/07.jpg','img/07t.jpg','img/07m2.jpg', 'img/07m.jpg'],
	['img/08.jpg','img/08t.jpg','img/08m2.jpg', 'img/08m.jpg'],
	['img/09.jpg','img/09t.jpg','img/09m2.jpg', 'img/09m.jpg'],
	['img/10.jpg','img/10t.jpg','img/10m2.jpg', 'img/10m.jpg'],
	['img/11.jpg','img/11t.jpg','img/11m2.jpg', 'img/11m.jpg'],
	['img/12.jpg','img/12t.jpg','img/12m2.jpg', 'img/12m.jpg'],
	['https://www.youtube.com/embed/PLIqFrv9fb4?rel=0','video','', ''],
	['https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Frickygervais%2Fvideos%2Fvb.209390455851982%2F415762458548113%2F%3Ftype%3D3&show_text=0&width=560','video','', '']
];

var imagesNumber = gallery.length;
var $overlay = $('<div id="overlay"> </div>');
var $image = $('<img>');
var imageCaption = "";
var $video = $('<iframe src=""></iframe>');
var isVideo = '';
var $buttonPrev = $('<div class="prev"><img src="img/arrowPrevious.png" alt="arrow previuos image"></div>');
var $buttonNext = $('<div class="next"><img src="img/arrowNext.png" alt="arrow previuos image"></div>');
var imageCounter = 0;



// Functions definitions


// Function to display image or video and caption
function showImage() {	
	isVideo = $("#imageGallery a").eq(imageCounter).attr("type");
	imageCaption = $("#imageGallery a").children().eq(imageCounter).attr("alt");

    if ( isVideo !== 'video/example' ) {
	     $video.hide();
	     $image.fadeOut('fast', function(){
		 	$image.load(function() {
		 	$image.hide();
		 	$image.fadeIn('fast');
    }).attr("srcset", gallery[imageCounter][0] + " 1024w" + ", " + gallery[imageCounter][1] + " 900w" + ", " + gallery[imageCounter][2] + " 700w" + ", " + gallery[imageCounter][3] + " 400w").attr('src',gallery[imageCounter][0]);
    		$image.addClass("displayed");
  });
		} else {
	    	$image.hide();
	    	$video.attr("src", gallery[imageCounter][0]);
	    	$video.addClass("displayed");
			$video.show();
    	}

  	$("#caption-text").text(imageCaption);
}


// Function to display next image
function nextImage() {
	imageCounter +=1;
	if ( imageCounter === imagesNumber ) {
		imageCounter = 0;
	}
	showImage();
}



// Function to display previous image
function prevImage() {
	imageCounter -=1;
	
	if ( imageCounter < 0 ) {
		imageCounter = imagesNumber - 1;
	}
	showImage();
}


// Code starts here:

// Adding the Overlay div
$("body").append($overlay);

// Building Overlay div and show image/ video
$("#imageGallery a").on("click", function(event){
	event.preventDefault();	
	$('html, body').css({'overflow': 'hidden', 'height': '100%'});
	imageCaption = $(this).children().attr("alt");
	imageCounter = $(this).parent().index();
	$overlay.append($buttonPrev, $image, $video, $buttonNext, '<p id="caption-text"></p>');
	showImage();
	$overlay.fadeIn("fast");
});



// -------------Slider Navigation Left/ Right -----------------

// Move to the next image by clicking next button
$buttonNext.on("click", function(){
	nextImage();
	return false;
});


// Move to the previous image by clicking next button
$buttonPrev.on("click", function(){
	prevImage();
	return false;
});



// Navigation with left/ right arrow keys

$(document).keydown(function(e) {
  if ( e.which === 39 ) {
	  	$buttonNext.click();
    } else if ( e.which === 37 ) {
		$buttonPrev.click();
    } else {
	    $("#caption-text").remove();
		$overlay.hide();
	    $('html, body').css({'overflow': 'auto', 'height': 'auto'});
    }
});



// Hiding the slider

$overlay.click(function() {
	$overlay.fadeOut();
	$('html, body').css({'overflow': 'auto', 'height': 'auto'});

});



// Search

$("#searchInput").keyup(function(){

	var inputResult = $(this).val().toLowerCase();

	$("#imageGallery img").each(function(){

		imageCaption = $(this).attr("title").toLowerCase(); 		
		imageCaption += " " + $(this).attr("alt").toLowerCase(); 
		
		if ( imageCaption.search(new RegExp(inputResult)) < 0 ) {
			$(this).parents("li").fadeOut("slow");	
		} else {
			$(this).parents("li").fadeIn("slow");
		}
	});
});
