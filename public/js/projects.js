var projects = [
	{
		name: "Web API - Spotify Music Album Search",
		imageLargeUrl	: "dist/img/projects/music-search-large.jpg",
		imageSmallUrl	: "dist/img/projects/music-search1-low-res.jpg",
		previewUrl		: "http://kutelov.com/webapi",  
		description: [
			'The project uses Spotify public APIs and',
			'AJAX requests to create listing of music',
			'albums of a favoire artist. Sorting of',
			'albums by year, popularity and name was',
			'added by employing JavaScript.',

			'A list with all tracks and sample 30sec',
			'play of each track are popping up on',
			'click of each album as well as relevant',
			'photos from Flickr are pooled by second',
			'AJAX request and displayed.',
			
			'jQuery navigation allows you to move',
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
		imageSmallUrl	: "dist/img/projects/video1-low-res.jpg",
		previewUrl		: "http://kutelov.com/videoplayer",
		description: [
			'A HTML5 video player built by using',
			'JavaScript and HTML5 Video API. The',
			'project is developed using supplied',
			'mockups, video file and transcripts.',
			'Standard video cotrols are switched off.',

			'The following buttons where created and',
			'functionally implemented: play - pause,',
			'sound volume control, sound on and off,',
			'full screen, fast play, subtitles on and',
			'off as well as time played and total time.',

			'Playback controls show buffering',
			'progress. As the playback time changes,',
			'sentences in transcript highlight. When',
			'a sentence is clicked, the player jumps',
			'to the appropriate time in the video.'
		],
		skills: [0,1,6]
	},
	{
		name: "Web APP Dashboard",
		imageLargeUrl	: "dist/img/projects/web-app-large.jpg",
		imageSmallUrl	: "dist/img/projects/web-app1-low-res.jpg",
		previewUrl		: "http://kutelov.com/webapp",
		description: [
			'A beautiful, web app dashboard created',
			'with JavaScript-driven charts and graphs.',
			'Mockups and icons were provided to',
			'build resposnive design.',
			'Chartjs.org library used for the charts.',

			'The traffic chart is interactive by',
			'jQuery based navigation that shows a',
			'different chart when period selected.',
			'SVG icon based navigation and alert bell',
			'icon for incoming messages created.',

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
		imageSmallUrl	: "dist/img/projects/form1-low-res.jpg",
		previewUrl		: "http://kutelov.com/regform", 
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
			'Extra layout for tablet size developed.',
			'Placeholder texts for text fields added.'
														  // max length
		],
		skills: [0, 6]
	},
	{
		name: "Interactive Image Gallery",
		imageLargeUrl	: "dist/img/projects/gallery-large.jpg",
		imageSmallUrl	: "dist/img/projects/gallery1-low-res.jpg",
		previewUrl		: "http://kutelov.com/imggal",  
		description: [
			'An interactive photo gallery created with',
			'JavaScript and jQuery, and based on provided',
			'mockups and images. Search area on',
			'the top where photos hide and show',
			'depending on user text characters input.',

			'When the user clicks on a thumbnail the',
			'photo displays in a lightbox with back',
			'and previous buttons to cycle through',
			'photos. CSS transitions added to the',
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
		imageSmallUrl	: "dist/img/projects/svg-update1-low-res.jpg", 
		previewUrl		: "http://kutelov.com/svgupdate",
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

var $overlay = $('.overlay');
var $overlaySkills = '<div class="overlay__info-skills"></div>';
var $overlayMainImage = '<div class="overlay__main-image"></div>';
var $responsiveLabel = '<div class="reposiveLabel"><span>Responsive</span></div>';
var $overlayInfoBlock = '<div class="overlay__info"></div>';
var $projectName = '<h1 class="overlay__info-heading"></h1>';
var $mainImage = '<img>';
var $projectSubheading = '<h2 class="overlay__info-subheading">Project Description:</h2>';
var $projectSkills = '<h2 class="overlay__info-subheading">Tech Skills:</h2><div class="overlay__info-skills"></div>';
var $descritionContainer = '<div class="overlay__desciption-container"></div>';
var $descriptionContent = '<div class="desc-content"></div>';
var $descriptionContentOne = '<div class="desc-content-one"></div>';
var $descriptionContentTwo = '<div class="desc-content-two"></div>';
var $prevButton = '<div class="swipe-button swipe-button--previous js-prev"><div class="swipe-button__preview-prev"></div></div>';
var $nextButton = '<div class="swipe-button swipe-button--next js-next"><div class="swipe-button__preview-next"></div></div>';
var $closeIcon = '<div class="project--close js-close"><svg class="project--close-svg"><use xlink:href="#project-exit" x="0" y="0"/></svg></div>';
var $livePreviewBox = '<div class="overlay__live-preview"><h1>Live Preview</h1></div>';
var $mobilePreviewIcon = '<div class="preview-mobile js-preview-mobile"><svg><use xlink:href="#project-preview-mobile" x="0" y="0"/></svg></div>';
var $tabletPreviewIcon = '<div class="preview-tablet js-preview-tablet"><svg><use xlink:href="#project-preview-tablet" x="0" y="0"/></svg></div>';
var $desktopPreviewIcon = '<div class="preview-desktop js-preview-desktop"><svg><use xlink:href="#project-preview-desktop" x="0" y="0"/></svg></div>';
var $visitSiteButton = '<div class="overlay__info-visit-site"><a class="js-visit-site" target="_blank" href="#">Visit Site</a></div>';
var $moreButton = '<div class="button button-lime more-button js-more">more</div>'

// - - - F U N C T I O N S
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

function animateDescriptionText(selector){
	var $contentDesc = $(selector).find('p');
	$contentDesc
		.delay(300)
		.slideDown("fast");
}

function showProject(index) {
	var skillsToShow = projects[index].skills;
	var $projectSkillsHTML = skillsHTML(skillsToShow);

	$overlay.append(
		$responsiveLabel,
		$overlayMainImage,
		$overlayInfoBlock,
		$prevButton,
		$nextButton,
		$closeIcon,
		$livePreviewBox);

	$('.overlay__live-preview').append(
		$mobilePreviewIcon,
		$tabletPreviewIcon,
		$desktopPreviewIcon);

	// check if resposnive is true
	
	// Appends project image
	$('.overlay__main-image').append($mainImage);
	$('.overlay__main-image img').attr('src', projects[index].imageLargeUrl);

	// Appends project name, descriptio and skills
	$('.overlay__info').append($projectName, $projectSubheading, $descritionContainer, $projectSkills, $visitSiteButton);
	$('.overlay__desciption-container').append($descriptionContent, $moreButton);
	$('.overlay__info-heading').text(projects[index].name);
	
	// Inserts text in the description area
	var batch = 0;
	var descHTML = projectDescriptionHtml(index, batch);	
	$('.desc-content').html(descHTML);
	animateDescriptionText('.desc-content');


	//  Insert Skills section html
	$('.overlay__info-skills').html($projectSkillsHTML);
	var skillsToShow = "all";

	// Set link for visit site button
	$('.js-visit-site').attr('href', projects[index].previewUrl);

	// set image for previuos arrow
	var prev = index - 1;
	prev = adjustProjectIndex(prev);
	$('.swipe-button__preview-prev').css('background-image', 'url(' + projects[prev].imageSmallUrl + ')');

	// set image for next arrow
	var next = index + 1;
	next = adjustProjectIndex(next);	
	$('.swipe-button__preview-next').css('background-image', 'url(' + projects[next].imageSmallUrl + ')');

	$(document).on('click', '.js-preview-mobile', function() {
  		var element = "mobile";
  		livePreview(element, index);
	});	

	$(document).on('click', '.js-preview-tablet', function() {
  		var element = "tablet";
  		livePreview(element, index);
	});

	$(document).on('click', '.js-preview-desktop', function() {
  		var element = "desktop";
  		livePreview(element, index);
	});

	$(document).on('click', '.js-more', function() {
  		batch += 5;
  		if ( batch < projects[index].description.length ) {
	  		var descHTML = projectDescriptionHtml(index, batch);
	  		$('.desc-content').html(descHTML);
			animateDescriptionText('.desc-content');
		} else {
			$('.js-more')
				.css('background', '#fff')
				.text('end')
				.css('color', '#EF5252');
		}
	});
}