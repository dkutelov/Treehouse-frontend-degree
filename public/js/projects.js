var projects = [
	{
		name: "Web API - Spotify Music Album Search",
		imageLargeUrl	: "dist/img/projects/music-search-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'The project uses Spotify public APIs and',
			'AJAX requests to create listing of music',
			'albums of a favoire artist. Sorting of',
			'albums by year, popularity and name was',
			'added by employing JavaScript.',
			'A list with all tracks and sample 30sec',
			'play of each track are popping up on',
			'click of each album as well as relevant',
			'photos from Flickr are pooled with second',
			'AJAX request and displayed. JavaScript',
			'and jQuery navigation allows you to move',
			'in the pop up window to the next or', 
			'previuos album. The web site uses',
			'reposnsive CSS design for mobile, tablet',
			'and desktop sreen sizes.'
		],
		skills: [ 0, 1, 2, 3, 6]
	},
	{
		name: "Interactive Video Player",
		imageLargeUrl	: "dist/img/projects/video-player-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'A HTML5 video player built by using',
			'JavaScript and the HTML5 Video API. The',
			'project is developed by using supplied',
			'mockups, video file and transcripts.',
			'Standard video cotrols are switched off.',

			'The following buttons where created and',
			'functionally implemented: play and pause,',
			'sound volume control, sound on and off,',
			'full screen, fast play, subtitles on and',
			'off as well as time played and total time.',

			'Playback controls show buffering progress.',
			'As the playback time changes, sentences in',
			'the transcript highlight. When a sentence',
			'in the transcript is clicked, the player',
			'jumps to the appropriate time in the video.'
		],
		skills: [0,1,6]
	},
	{
		name: "Web APP Dashboard",
		imageLargeUrl	: "dist/img/projects/web-app-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'A beautiful, web app dashboard completed',
			'with JavaScript-driven charts and graphs.',
			'Mockups and icons were provided to build',
			'resposnive design with HTML, CSS and JS.',
			'Chartjs.org library used for the charts.',

			'The traffic chart was made interactive by',
			'jQuery based navigation that is showing a',
			'different chart depending on the selected',
			'period. SVG icon based navigation and alert',
			'bell icon for incoming messages created.',

			'Bold social stats widget with animated',
			'SVG icons. Message user widget with search',
			'functionality, autocomplete and success',
			'confirmation message. Animated settings on/',
			'off buttons and settings local storage.'
		],

		skills: [0,1,2,5,6,7]
	},
	{
		name: "Online Registration Form",
		imageLargeUrl	: "dist/img/projects/form-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'A responsive, mobile-friendly registration ',
			'form using a wide variety of HTML form',
			'input types and attributes. Mobile and',
			'desktop versions built by using provided',
			'mockups and a "mobile-first" approach.',

			'Text, email and telephone input fields,',
			'select menu, checkboxes, radio buttons,',
			'textfields and a submit button created.',
			'Different styling added for focus and',
			'active state of each input field.',

			'Default formating of checkboxes and radio',
			'buttons were removed and recreated again',
			'with CSS for customized coloring and style.',
			'Extra layout for tablet size was developed.',
			'Placeholder texts for text fields added.'
														  // max length
		],
		skills: [0, 6]
	},
	{
		name: "Interactive Image Gallery",
		imageLargeUrl	: "dist/img/projects/gallery-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'An interactive photo gallery created using',
			'JavaScript and jQuery, and based on provided',
			'mockups, images and thumbnails. Search area',
			'on the top where photos hide and show',
			'depending on user text characters input.',

			'When the user clicks on a thumbnail the',
			'photo displays in a lightbox with back and',
			'previous buttons to cycle through photos.',
			'Nice CSS transitions added to the',
			'thumbnail images on mouse hover.',

			'Photo browsing enhanced by adding key-',
			'board navigation. Two additional media',
			'types included in the gallery - youTube',
			'and Facebook videos. Smooth transition',
			'jQuery effects when filtering the photos.'
		],
		skills: [0, 1, 2, 6]
	},
		{
		name: "SVG site update",
		imageLargeUrl	: "dist/img/projects/svg-update-large.jpg",
		imageSmallUrl	: "", 
		description: [
			'The project challange was to optimize',
			'ready and functioning site by replacing ',
			'all images with Scalable Vector Graphics.',
			'The completed web site was provided using',
			'png images and icons with no amimations.',

			'Background image, logo, navigation icons',
			'and dogs images were replaced with SVGs.',
			'Eye catching animations for the logo on',
			'site loading as well for navigation icons',
			'and logo on mouse hover were creaded.',

			'Dog images were animated on mouse',
			'hover with CSS keyframe animation so',
			'the main image rotates as well as its',
			'inner elements - the eye and eyebrow - ',
			'to create original eye blinking effect.'
		],
		skills: [0,5,6]
	}
];

var $overlay = $('.overlay'); // change to create dynamically

var $overlaySkills = '<div class="overlay__info-skills"></div>';
var $overlayMainImage = '<div class="overlay__main-image"></div>';
var $responsiveLabel = '<div class="reposiveLabel"><span>Responsive</span></div>';
var $overlayInfoBlock = '<div class="overlay__info"></div>';
var $projectName = '<h1 class="overlay__info-heading"></h1>';
var $mainImage = '<img>';
var $projectSubheading = '<h2 class="overlay__info-subheading">Project Description:</h2>';
var $projectSkills = '<h2 class="overlay__info-subheading">Tech Skills:</h2><div class="overlay__info-skills"></div>';
var $descritionContainer = '<div class="overlay__desciption-container"></div>' 
var $descriptionContent = '<div class="desc-content"></div>'
var $descriptionContentOne = '<div class="desc-content-one"></div>'
var $descriptionContentTwo = '<div class="desc-content-two"></div>'

function projectDescriptionHtml(projectIndex, batch) {
	var descritpionHTML = '';
	for (var i = 0; i < 5; i++) {
		var y = batch + i;
		descritpionHTML += '<div class="overlay__info-text-row-container">';
		// descritpionHTML += '<p class="overlay__info-text overlay__info-text-line' + (i+1) + '">';
			descritpionHTML += '<p class="overlay__info-text">';
		descritpionHTML += projects[projectIndex].description[y];
		descritpionHTML += '</p></div>'
	}

	return descritpionHTML; 
}

function animateDescriptionText(selector, last){
	var $contentDesc = $(selector).find('p');
	if ( last ) {
	$contentDesc
		.delay(100)
		.slideDown("fast");
	} else {
		$contentDesc
		.delay(100)
		.slideDown("fast")
		.delay(9000)
		.animate({
			opacity: 0
		}, 200);
	}
}

function showProject(index) {
	var skillsToShow = projects[index].skills;
	var $projectSkillsHTML = skillsHTML(skillsToShow);

	$overlay.append($responsiveLabel, $overlayMainImage, $overlayInfoBlock);
	// check if resposnive is true
	$('.overlay__main-image').append($mainImage);
	$('.overlay__main-image img').attr('src', projects[index].imageLargeUrl);

	$('.overlay__info').append($projectName, $projectSubheading, $descritionContainer, $projectSkills);
	$('.overlay__desciption-container').append($descriptionContent, $descriptionContentOne, $descriptionContentTwo);

	$('.overlay__info-heading').text(projects[index].name);

	
	var descHTML = projectDescriptionHtml(index, 0);
	var descHTMLOne = projectDescriptionHtml(index, 5);
	var descHTMLTwo = projectDescriptionHtml(index, 10);

	$('.desc-content').html(descHTML);
	$('.desc-content-one').html(descHTMLOne);
	$('.desc-content-two').html(descHTMLTwo);
	

	$(function(){
	    rotateDescText().done();
	});

	function rotateDescText(){
	    var dfrd1 = $.Deferred();
	    var dfrd2= $.Deferred();
	    var dfrd3= $.Deferred();
	    
	    setTimeout(function(){
	    	var last = false;
	    	animateDescriptionText('.desc-content', last);
	        dfrd1.resolve();
	    }, 100);
	    
	    setTimeout(function(){
	    	var last = false;
	        animateDescriptionText('.desc-content-one', last);
	        console.log('task 2 in function1 is done!');
	        dfrd2.resolve();
	    }, 9500);

	    setTimeout(function(){
	    	var last = true;
	        animateDescriptionText('.desc-content-two', last);
	        console.log('task 2 in function1 is done!');
	        dfrd3.resolve();
	    }, 19000);
	    
	    return $.when(dfrd1, dfrd2, dfrd3).done(function(){
	        console.log('all tasks in function1 are done');
	        // Both asyncs tasks are done
	    }).promise();
	}


	$('.overlay__info-skills').html($projectSkillsHTML);
	var skillsToShow = "all";
}




