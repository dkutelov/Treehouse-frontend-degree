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
var $descriptionContent = '<div class="desc-content"></div>'

function projectDescriptionHtml(projectIndex, batch) {
	var descritpionHTML = '';
	for (var i = 0; i < 5; i++) {
		var y = batch + i;
		descritpionHTML += '<div class="overlay__info-text-row-container">';
		descritpionHTML += '<p class="overlay__info-text overlay__info-text-line' + (i+1) + '">';
		descritpionHTML += projects[projectIndex].description[y];
		descritpionHTML += '</p></div>'
	}

	return descritpionHTML; 
}

function showProject(index) {
	var skillsToShow = projects[index].skills;
	var $projectSkillsHTML = skillsHTML(skillsToShow);

	$overlay.append($responsiveLabel, $overlayMainImage, $overlayInfoBlock);
	// check if resposnive is true
	$('.overlay__main-image').append($mainImage);
	$('.overlay__main-image img').attr('src', projects[index].imageLargeUrl);

	$('.overlay__info').append($projectName, $projectSubheading, $descriptionContent, $projectSkills);
	$('.overlay__info-heading').text(projects[index].name);

	var batch = 0;
	for (var i = 0; i < 3; i++) {
		// $('.desc-content').empty();
		// $('.desc-content').find('p').removeClass('overlay__info-text-line-disappear');
		var descHTML = projectDescriptionHtml(index, batch);
	// batch 1 stay for 5sec
	// apply slide down animation

	// load batch 2
	// repeat this times project.description.length / 5
	// if last batch has less than 5 elements
		$('.desc-content').html(descHTML).delay(3000).queue(function(){
    		$(this).find('p').addClass('overlay__info-text-line-disappear');
		});

		// setInterval(function(){ 
		// 	$('.desc-content').find('p').addClass('overlay__info-text-line-disappear');
		// }, 5000);
	
		// $('.desc-content').dalay(1000).find('p').addClass('overlay__info-text-line-disappear');

		batch += 5;
	}

	$('.overlay__info-skills').html($projectSkillsHTML);
	var skillsToShow = "all";
}




