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
		skills: [ 0, 1, 2, 3]
	},
	{
		name: "Web Api - Spotify Music Album Search",
		imageLargeUrl	: "",
		imageSmallUrl	: "", 
		description: "",
		skills: [1,2,3]
	},
	{
		name: "",
		imageLargeUrl	: "",
		imageSmallUrl	: "", 
		description: "",
		skills: [1,2,3]
	},
	{
		name: "",
		imageLargeUrl	: "",
		imageSmallUrl	: "", 
		description: "",
		skills: [1,2,3]
	},
	{
		name: "",
		imageLargeUrl	: "",
		imageSmallUrl	: "", 
		description: "",
		skills: [1,2,3]
	},
		{
		name: "",
		imageLargeUrl	: "",
		imageSmallUrl	: "", 
		description: "",
		skills: [1,2,3]
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
		.delay(5000)
		.animate({
			opacity: 0
		}, 500);
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
	    }, 6500);

	    setTimeout(function(){
	    	var last = true;
	        animateDescriptionText('.desc-content-two', last);
	        console.log('task 2 in function1 is done!');
	        dfrd3.resolve();
	    }, 14000);
	    
	    return $.when(dfrd1, dfrd2, dfrd3).done(function(){
	        console.log('all tasks in function1 are done');
	        // Both asyncs tasks are done
	    }).promise();
	}


	$('.overlay__info-skills').html($projectSkillsHTML);
	var skillsToShow = "all";
}




