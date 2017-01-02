// Home page rotating words in key message
var $rotatingWords = $('.key-messages-content-rotating-words');
var rotatingWordsContent = ['modern', 'responsive', 'super fast'];
var wordIndex = 1;
// Variables for function checking if elements is in view
var $animationElement = $('.js-animation');
var $window = $(window);
var sreenHeight = $(window).height();
var index = 0;
var cancel= false;
var distanceToTop = 0;

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

// Checks if element is visible in widnow and sets animation
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
     if (
        // (element_bottom_position >= window_top_position ) && // Amination on scroll up - off
        (element_top_position <= window_bottom_position)) {
        if ( $element.hasClass("features--animation") ) {
          $element.addClass('feature--slide-up');
        } else if ( $element.hasClass("projects--animation") ) {
          $element.addClass('projects--slide-left');
        }
    } else if (!(element_bottom_position >= window_top_position )) {
    }

    else {
        if ( $element.hasClass("features--animation") ) {
          $element.removeClass('feature--slide-up');
        } else if ( $element.hasClass("projects--animation") ) {
          $element.removeClass('projects--slide-left');
        }
    }
  });
}

// function adjust project index
function adjustProjectIndex(index) {
  
  if ( index < 0 ) {
    index = projects.length - 1;
  } else if ( index === projects.length ) {
    index = 0;
  }

  return index;
}

// Shows next project
function nextProject() {
  index += 1;
  index = adjustProjectIndex(index);
  $('.overlay').fadeOut('Fast', function(){
    $('.overlay').empty();
    $('.overlay').fadeIn('Fast');
    showProject(index);
  });
}

// Shows previous project
function prevProject() {
  index -= 1;
  index = adjustProjectIndex(index);
  $('.overlay').fadeOut('Fast', function(){
    $('.overlay').empty();
    $('.overlay').fadeIn('Fast');
    showProject(index);
  });
}

// - - - end of functions

//Call function on regular intervals to change word in key message on home page
setInterval(function(){ 
	changeWord();
}, 2000);


// Build HTML for each skill in skills section
$(".js-skills").append(skillsHTML(skillsToShow));

// Selects skills container
var $skillsCircle = $('.skills__outer-circle');
// Sets color of border for each skill
$.each($skillsCircle, function(i, item){
	$(this).css({border: '3px solid ' + skills[i].borderColor});
});

// Calls function to check if elements are visible
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(document).on('click', '.js-project', function() {
  distanceToTop = $(document).scrollTop();
  $('html, body').css({'overflow': 'hidden', 'height': '100%'});
  index = $('.js-project').index(this);
  $('.overlay').fadeIn("fast");
  $('.overlay-background').fadeIn("fast");
  showProject(index);
});

// On click of right arrow shows next project
$(document).on('click', '.js-next', function() {
  cancel = true;
  nextProject();
});

// On click of left arrow shows previous project
$(document).on('click', '.js-prev', function() {
  prevProject();
});

// On click closes project pop up
$(document).on('click', '.js-close', function() {
  $('.overlay-background').hide();
  $overlay.fadeOut("fast");
  $('.overlay').empty();
  $('html, body').css({'overflow': 'auto', 'height': 'auto'});
  $(document).scrollTop(distanceToTop);
});

// Key navigation to swipe projects and close the window
$(document).keydown(function(e) {
  if ( e.which === 39 ) {
    nextProject();
  } else if ( e.which === 37 ) {
    prevProject();
  } else if ( e.which === 27 ) {
    $('.overlay-background').hide();
    $overlay.fadeOut("fast");
    $('.overlay').empty();
    $('html, body').css({'overflow': 'auto', 'height': 'auto'});
    $(document).scrollTop(distanceToTop);
  }
});     

// Checks in header is visible and if not shows to top button
$(document).on('scroll', function() {
    var headerHeight = $('#home').outerHeight();
    var window_top_position = $window.scrollTop();

    if (  window_top_position > headerHeight ) {
      $('.js-top').css('opacity', '1');
    } else {
      $('.js-top').css('opacity', '0');
    }
});

// Brings page to top if to top button clicked
$(document).on('click', '.js-top', function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

