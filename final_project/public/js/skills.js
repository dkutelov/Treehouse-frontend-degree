// Skills definition object
var skills = [
	{
		name		: "HTML",
		className	: "icon-html",
		borderColor	: "#4975FB" 
	},
	{
		name		: "JS",
		className	: "icon-js",
		borderColor	: "#EF5252"
	},
	{
		name		: "jQuery",
		className	: "icon-jq",
		borderColor	: "#EF5252"
	},
	{
		name		: "Ajax",
		className	: "icon-ajax",
		borderColor	: "#EF5252"
	},
	{
		name		: "Node.js",
		className	: "icon-node",
		borderColor	: "#EF5252"
	},
	{
		name		: "SVG",
		className	: "icon-svg",
		borderColor	: "#939393"
	},
	{
		name		: "CSS3",
		className	: "icon-css",
		borderColor	: "#ffd454"
	},
	{
		name		: "Sass",
		className	: "icon-sass",
		borderColor	: "#ffd454"
	},
	{
		name		: "PostCSS",
		className	: "icon-postcss",
		borderColor	: "#ffd454"
	},
	{
		name		: "Git",
		className	: "icon-git",
		borderColor	: "#939393"
	},
	{
		name		: "Gulp",
		className	: "icon-gulp",
		borderColor	: "#939393"
	},
	{
		name		: "NPM",
		className	: "icon-npm",
		borderColor	: "#939393"
	}
];

var skillsToShow = "all"; 

// Generate Html for Skills section
function skillsHTML(skillsToShow) {
	var skillsHTML = "";
	if ( skillsToShow == "all" ) {
		for (var i = 0; i < skills.length; ++i) {
  			skillsHTML += '<div class="skills__outer-circle">';
			skillsHTML += '<div class="skills__inner-circle">';
			skillsHTML += '<div class="skills__icon ' + skills[i].className +'"></div>';
			skillsHTML += '<h4 class="skills__name">' + skills[i].name + '</h4></div></div>';
		}
	} else {
		for (var i = 0; i < skillsToShow.length; ++i) {
  			skillsHTML += '<div class="skills__outer-circle skills__outer-circle--project-page" style="border: 2px solid' + skills[skillsToShow[i]].borderColor +'">';
			skillsHTML += '<div class="skills__inner-circle skills__inner-circle--project-page">';
			skillsHTML += '<div class="skills__icon ' + skills[skillsToShow[i]].className + '-sm' + '"></div>';
			skillsHTML += '<h4 class="skills__name-project-page">' + skills[skillsToShow[i]].name + '</h4></div></div>';
			skillsHTML += '</div></div>';
		}
	}
	return skillsHTML;
}

// Animation of skills icons
$(document).on('mousemove', '.skills__outer-circle', function(e) {
	var w = this.clientWidth;
	var h = this.clientHeight;
	var y = (e.offsetX - w * 0.5) / w * 55;
	var x = (1 - (e.offsetY - h * 0.5)) / h * 55;
	// $(this).css({transform:'perspective(300px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)'})
	$(this).css({
		'transform' :'rotateX(' + x + 'deg) rotateY(' + y + 'deg)',
		'-webkit-transform' :'rotateX(' + x + 'deg) rotateY(' + y + 'deg)',
		'-moz-transform' :'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
	});
});

$(document).on('mouseout', '.skills__outer-circle', function(e) {
	$(this).css({transform:'perspective(300px) rotateX(0deg) rotateY(0deg)'});
});
