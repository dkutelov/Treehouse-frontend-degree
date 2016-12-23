var projects = [
	{
		name: "Web Api - Spotify Music Album Search",
		imageLargeUrl	: "dist/img/projects/music-search-large.jpg",
		imageSmallUrl	: "", 
		description: "",
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
var $overlayInfo = $('.overlay__info'); // change to create dynamically
var $overlaySkills = '<div class="overlay__info-skills"></div>';


$overlayInfo.append($overlaySkills);

var index = 0; // change to get clicked project
var skillsToShow = projects[index].skills;

var $projectSkillsHTML = skillsHTML(skillsToShow);
$('.overlay__info-skills').html($projectSkillsHTML);
