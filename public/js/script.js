// Home page rotating words in key message
var $rotatingWords = $('.key-messages-content-rotating-words');
var rotatingWordsContent = ['modern', 'responsive', 'super fast'];
var wordIndex = 1;
// Selects skills container
var $skillsCircle = $('.skills__outer-circle');
// Variables for function checking if elements is in view
var $animationElement = $('.js-animation');
var $window = $(window);


// F U N C T I O N S
//Changes words in key message on home page
function changeWord() {
	$rotatingWords.fadeOut(200, function(){
		$rotatingWords.text(rotatingWordsContent[wordIndex]).fadeIn(200);	
	});
	if ( wordIndex < 2) {
		wordIndex += 1;
	} else {
		wordIndex = 0;
	}
}

// Checks if element is visible in widnow
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animationElement, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check if element is within viewport and sets respective animation class
    if ((element_bottom_position >= window_top_position ) &&
        (element_top_position <= window_bottom_position)) {
       	if ( $element.hasClass("features--animation") ) {
      		$element.addClass('feature--slide-up');
      	} else if ( $element.hasClass("projects--animation") ) {
      		$element.addClass('projects--slide-left');
      	}
    } else {
      	if ( $element.hasClass("features--animation") ) {
      		$element.removeClass('feature--slide-up');
      	} else if ( $element.hasClass("projects--animation") ) {
      		$element.removeClass('projects--slide-left');
      	}
    }
  });
}

// - - - end of functions

//Call function on regular intervals to change word in key message on home page
setInterval(function(){ 
	changeWord();
}, 2000);


// Build HTML for each skill in skills section
$(".js-skills").append(skillsHTML(skillsToShow));

// Sets color of border for each skill
$.each($skillsCircle, function(i, item){
	$(this).css({border: '3px solid ' + skills[i].borderColor});
});

// Calls function to check if elements are visible
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

