// - - - - - - - - - - - //
// - - - VARIABLES - - - //
// - - - - - - - - - - - //

// - - - Navigation Icons - - - //
var icon = document.getElementsByClassName("icon");
var navHighlight = document.getElementsByClassName("active-icon-border");
var navIconContainer = document.querySelectorAll('.icon-box'); // Selects the container of the navigation icons
// - - - Notifications Bell and Pop up messages - - - //
var bellContainer = document.getElementById("bell-container"); // Selects the container of the notification bell
var bellStatus = document.getElementById("bell-status"); // Selects the bell status dot
var notificationMessageContainer = document.getElementById("notification-messages");
var notificationMessages = document.getElementsByClassName("notificaiton-message");
var messageClose = document.getElementsByClassName("message-close");
var alertMessages = document.getElementsByClassName("alert-message");
var alertClose = document.getElementsByClassName("alert-close");
// - - - Line chart - - - //
var timePeriod = document.getElementsByClassName("time-period");
// - - - New Members - - - //
var numberOfNewMemebersToShow = 4;
var $newMembersBox = $('<div class="newMemberBox"></div>');
var $photo = $('<img class="memberPhoto">');
var $name = $('<p class="memberName"></p>');
var $email = $('<p class="memberEmail"></p>');
var $date = $('<p class="memberDate"></p>');
var newMembers = [
	new Member("Victoria Chambers", "victoria.chambers80@example.com", "img/usr1.jpg", "10/15/15"),
	new Member("Dale Burd", "dale.byrd52@example.com", "img/usr2.jpg", "10/15/15"),
	new Member("Dawn Wood", "dawn.wood16@example.com", "img/usr3.jpg", "10/15/15"),
	new Member("Dan Oliver", "dan.oliver82@example.com", "img/usr4.jpg", "10/15/15")
];
// - - - Recent Activities - - - //
var recentActivitiesToShow = 4;
var $activityBox = $('<div class="activityBox"></div>');
var $activityIcon = $('<div class="activityIcon"></div>');
var $activity = '';
var $userAndActivity = $('<p class="userAndAcitivty"></p>');
var $daysSinceActivity = $('<p class="daysSinceActivity"></p>');
var $rightArrow = $('<div class="rightArrow"></div>');
var recentActivities = [
	new Activity("icons/icon-comment.svg","Victoria Chambers", "commented on YourApp's SEO Tips", "4"),
	new Activity("icons/icon-like.svg","Dale Burd", "like the post Facebook's Changes for 2016", "5"),
	new Activity("icons/icon-new-user.svg", "Dawn Wood", "signed up for YourApp", "2"),
	new Activity("icons/icon-post.svg", "Dan Oliver", "posted YourApp's SEO Tips", "1")
];
// - - - Switch Button - - - //
var btnOn = document.getElementsByClassName("buttonOn");
var btnOff = document.getElementsByClassName("buttonOff");
var btnOnOff = document.querySelectorAll('.switch');
var labelBtnOnOff = document.querySelectorAll('.label-text');



// - - - - - - - - - - - //
// - - - FUNCTIONS - - - //
// - - - - - - - - - - - //

// - - - Function to return index of clicked class - - - //
function indexIn(selector, element) {
  var list = document.querySelectorAll(selector);
  for (var i = 0; i < selector.length; ++i)
    if (list[i] === element) return i;
  return -1;
}

// - - - Function to show/ hide text ON and OFF of buttons - - - //
function buttonSwitch(i) {
	if ( btnOn[i].style.visibility != 'hidden' ) {
            	btnOn[i].style.visibility = 'hidden';
        } else {btnOn[i].style.visibility = 'visible';
    }
    if ( btnOff[i].style.visibility == '' || btnOff[i].style.visibility == 'hidden' ) {
        	btnOff[i].style.visibility = 'visible';
        } else {
	        btnOff[i].style.visibility = 'hidden';
		}
}

// - - - Function to highlighed clicked icon - - //
function iconHighleight(i){
	for ( var y = 0 ; y < navHighlight.length ; y++ ){ // unhighlights all icons
		navHighlight[y].style.backgroundColor = "#4d4c72";
		icon[y].style.fill = "#D6E5E3";
	}
	navHighlight[i].style.backgroundColor = "#85db80"; // highlights clicked icon
	icon[i].style.fill = "#fff";
}

// - - - New Members Constructor  - - - //
// - - - - - - - - - - - - - - - - -  - //
function Member(name, email, photo, date){
	this.name = name;
	this.email = email;
	this.photo = photo;
	this.date = date;
}

// - - - Recent Activity Constructor  - - - //
// - - - - - - - - - - - - - - - - - - - - -//
function Activity(icon, name, activity, daysSinceActivity){
	this.icon = icon;
	this.name = name;
	this.activity = activity;
	this.daysSinceActivity = daysSinceActivity;
}

// - - - Sets first icon as highlighted
navHighlight[0].style.backgroundColor = "#85db80";
icon[0].style.fill = "#fff";


// - - - - - - - - - - - - - -  //
// - - - Event Listeners  - - - //
// - - - - - - - - - - - - - -  //

// - - - Navigation icons highlighting - cycle trough nav icon container and listen for event
for ( var i = 0 ; i < navIconContainer.length ; i++ ){
	navIconContainer[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.icon-box', this);
		iconHighleight(indexClicked);
	});
}

// Adds event lister to the bell to show notification messages and the change color of the bell status dot
bellContainer.addEventListener('click', function() {
	 bellStatus.style.backgroundColor = "#85db81";
	 notificationMessageContainer.style.visibility = 'visible';
 });

// Adds event lister to notification messages close mark
for ( var i = 0 ; i < messageClose.length ; i++ ){
	messageClose[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.message-close', this);
		notificationMessages[indexClicked].style.visibility = 'hidden';
	});
}

// Adds event lister to alert messages close mark
for ( var i = 0 ; i < alertClose.length ; i++ ){
	alertClose[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.alert-close', this);
		alertMessages[indexClicked].style.height = '0';
		alertMessages[indexClicked].style.margin = '0';
		alertMessages[indexClicked].style.visibility = 'hidden';
	});
}

// Adds event lister to On-Off buttons in section Settings
for ( var i = 0 ; i < labelBtnOnOff.length ; i++ ){ // manage switch from label
	labelBtnOnOff[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.label-text', this);
		buttonSwitch(indexClicked);
	});
}

for ( var i = 0 ; i < btnOnOff.length ; i++ ){ // manage switch from button
	btnOnOff[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.switch', this);
		buttonSwitch(indexClicked);
	});
}


// - - - - - - -- - - //
// - - - Charts - - - //
// - - - - - - -- - - //

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontSize = 14;

// Chart.defaults.global.scaleLabel = "<%= ' ' + value%>";
// - - - Line chart - - - //
// - - - - - - - - - - - -//

var trafficChart = {
	trafficLineChartOptions : {
		bezierCurve: false,
		legend: {
    		display: false
    	},
		scales: {
    		yAxes: [{
	    		gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }],
            xAxes: [{
				gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
           	}]
        }
	},
	hourlyData : {
		labels: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
		datasets: [{ 
			data: [5, 6, 7, 6, 8, 7, 7, 9, 8, 10],
			backgroundColor: 'rgba(229,159,113, 0.5)',
			lineTension: 0,
			pointBorderColor: 'rgba(0,0,0, 0.8)',
			pointRadius: 6,
			pointBorderWidth: 2,
			pointBackgroundColor: '#fff'
		}]
	},
	dailyData : {
		labels: ['01-09','02-09','03-09','04-09','05-09','06-09','07-09','08-09','09-09','10-09','11-09','12-09','13-09','14-09','15-09','16-09'],
		datasets: [{ 
			data: [50, 60, 75, 105, 75, 55, 75, 100, 60, 70, 60, 75, 105, 75, 55, 75],
			backgroundColor: 'rgba(235,239,191, 0.5)',
			lineTension: 0,
			pointBorderColor: 'rgba(214,34,70, 0.8)',
			pointRadius: 6,
			pointBorderWidth: 2,
			pointBackgroundColor: '#fff'
		}]
	},
	weeklyData : {
		labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
		datasets: [{
			data: [ 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2010],
			backgroundColor: 'rgba(226,227,246, 0.5)',
			lineTension: 0,
			pointBorderColor: 'rgba(116,120,191, 0.9)',
			pointRadius: 6,
			pointBorderWidth: 2,
			pointBackgroundColor: '#fff',
			spanGaps: true
      	}]	
	},
	monthlyData : {
		labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
		datasets: [{
          data: [15000, 30000, 22500, 37500, 17500, 37500, 45000, 30000, 60200, 45000, 60100],
          backgroundColor: 'rgba(255,225,156, 0.7)',
          lineTension: 0,
          pointBorderColor: 'rgba(43,45,66, 1)',
          pointRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: '#fff'
      	}]
	},
	changeChartData : function(index) {
		if ( index == 0 ) {
			chartsData = trafficChart.hourlyData;
		}
		if ( index == 1 ) {
			chartsData = trafficChart.dailyData;
		}
		if ( index == 2 ) {
			chartsData = trafficChart.weeklyData;
		}
		if ( index == 3 ) {
			chartsData = trafficChart.monthlyData;
		}
		return chartsData;
	},
	changeActiveTab :function(index) {
		for ( var i = 0 ; i < timePeriod.length ; i++ ){
		timePeriod[i].removeAttribute("id");
		timePeriod[index].setAttribute('id', 'active');
		}
	},
	drawChart : function(chartData){
		if(trafficLineChart != null){
        	trafficLineChart.destroy();
    	}
		var lineChart = document.getElementById("traffic-line-chart").getContext('2d');
		var trafficLineChart = new Chart(lineChart, {
			type: 'line',
			animation: {
				animateScale: true
    		},
			data: chartData,
			options: trafficChart.trafficLineChartOptions
		});
	}
};

// - - - Draw first line chart with weekly data - - - //
trafficChart.drawChart(trafficChart.weeklyData);

// - - - Draw new line chart and change activ label when label clicked - - - //
for ( var i = 0 ; i < timePeriod.length ; i++ ){
	timePeriod[i].addEventListener('mousedown', function() {
		var indexClicked = indexIn('.time-period', this);
		var chartData = trafficChart.changeChartData(indexClicked);
		trafficChart.drawChart(chartData);
		trafficChart.changeActiveTab(indexClicked);
	});
}


// - - - Bar chart - - - //
// - - - - - - - - - - - //

var ctx = document.getElementById("barChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
	        label: "New Visitors",
            data: [30, 55, 100, 70, 150, 135, 45],
            backgroundColor: ['rgb(84,94,117)','rgb(84,94,117)','rgb(84,94,117)','rgb(84,94,117)','rgb(84,94,117)','rgb(84,94,117)','rgb(84,94,117)'],
            borderWidth: 0,
            hoverBackgroundColor: ['rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)']
        },
        {
	        label: "Visitors",
            data: [50, 75, 150, 100, 201, 175, 75],
            backgroundColor: [
                'rgb(115,119,191)','rgb(115,119,191)','rgb(115,119,191)','rgb(115,119,191)','rgb(115,119,191)','rgb(115,119,191)', 'rgb(115,119,191)'
            ],
            borderWidth: 0,
            hoverBackgroundColor: ['rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)','rgb(128,201,144)']
        }
        
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


// - - - Doughnut Chart - - - //
// - - - - - - - - - - - - -- //

var doughnutChartBox = document.getElementById("doughnut-chart").getContext("2d");
var doughnutChart = new Chart(doughnutChartBox, {
    type: 'doughnut',
  	data: {
        labels: [
            "Desktop",
            "Tablet",
            "Phones",
            "Others"
            ],
        datasets: [
            {
                data: [350, 55, 90, 10],
                backgroundColor: [
                    "#7377bf",
                    "#81c98f",
                    "#74b1bf",
                    "#FF6384"
                ],
                hoverBackgroundColor: [
                    "rgb(84,94,117)",
                    "rgb(84,94,117)",
                    "rgb(84,94,117)",
                    "rgb(84,94,117)"
                ],
                borderWidth:0
            }]

    },
    options: {
        responsive: true,
        rotation: 0.35,
		animation: {
			animateRotate: true,
			animateScale: true},
        legend: {
            display: false,
        }
    }
});

document.getElementById('doughnut-legend').innerHTML = doughnutChart.generateLegend();
var $selectCheck = $(".2-legend:nth-child(2)");
console.log($selectCheck);
$legendKey = $('<span></span>');
$(".2-legend > li:nth-child(1)").append($legendKey);



// - - - New Members - - - //
// - - - - - - - - - - - - //
for ( var i = 0 ; i < numberOfNewMemebersToShow ; i++ ){
	$photo.prop("src", newMembers[i].photo);
	$name.text(newMembers[i].name);
	$email.text(newMembers[i].email);
	$date.text(newMembers[i].date);
	$newMembersBox.append($photo, $name, $email, $date);
	$("#members").append($newMembersBox.clone());
}


// - - - Recent Activities - - - //
// - - - - - - - - - - - - - - - //
for ( var i = 0 ; i < recentActivitiesToShow ; i++ ){
	$activityIcon.css('background-image', 'url("' + recentActivities[i].icon + '")');
	$name.text(recentActivities[i].name);
	$activity = recentActivities[i].name + ' ' + recentActivities[i].activity;
	$userAndActivity.text($activity);
	if ( recentActivities[i].daysSinceActivity > 1 ){
		$daysSinceActivity.text(recentActivities[i].daysSinceActivity + ' days ago.');
	} else {
		$daysSinceActivity.text(recentActivities[i].daysSinceActivity + ' day ago.');
	}
	$activityBox.append($activityIcon, $userAndActivity, $daysSinceActivity, $rightArrow);
	$("#activity").append($activityBox.clone());
}


// - - - Message From - - - //
// - - - - - - -- - - - - - //
var MessageForm = {
	result : $("#search-result"),
	userName : $('#user-name'),
	users : [
      "Victoria Chambers",
      "Dale Burd",
      "Dawn Wood",
      "Dan Oliver",
      "Deloris Ruppel",
	  "Jackson Chapell",
	  "Esperanza Demeritt",
	  "Felicitas Drey",
	  "Ian Jiang",
	  "Percy Matthews",
	  "Houston Glaser",
	  "Alexa Bargo",
	  "Dominga Chatterton",
	  "Oma Hagopian",
	  "Eugenia Ashbrook",
	  "Fidelia Canada",
	  "Angila Toussaint",
	  "Emilee Cheslock",
	  "Arnette Fischetti",
	  "Rubye Ewing",
	  "Kiana Glance",
	  "Erlinda Imes",
	  "Ambrose Barratt",
	  "Maxwell Papadopoulos"
      ],	
	matchUsers: function(input) {
		var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
		return MessageForm.users.filter(function(user) {
			if (user.match(reg)) {
				return user;
    		}
  		});
	},
	changeInput: function(val) {
		var autoCompleteResult = MessageForm.matchUsers(val);
		MessageForm.result.empty();
		autoCompleteResult.forEach(function(e) {
            var p = $('<p />');
            p.css({
              'margin': '0px 0px 0px 15px',
              'padding': '5px'
            });
            p.text(e);
            p.click(function() {
                val = $(this).text();
                MessageForm.userName.val(val);
                MessageForm.result.empty().hide();
            });
            p.mouseenter(function() {
                $(this).css("background-color", "#7377bf");
                $(this).css("color", "#fff");
            }).mouseleave(function() {
                $(this).css("background-color", "#fff");
                $(this).css("color", "#000");                
            });
            MessageForm.result.append(p);
        });
	},
	clearAutocomplete : function(){ 
		var placeholderValue = MessageForm.userName.prop('placeholder');
		if ( placeholderValue == "Search for User" ) {
			MessageForm.result.show();
		}
	},
	validationOfInput : function() {
		$('#pop-up-message').fadeIn(1500,function(){
			$(this).delay(1000);
			$(this).fadeOut(1000);
		});
		var x = document.forms["user-message-form"]["user-name"].value;
		var y = document.forms["user-message-form"]["message"].value;
		if (x == null || x == "" || y == null || y == "") {
			$('#message-text').text('You need to fill in name and message!');
			return false;
    	} else {
	    	$('#message-text').text('Your message was successfully sent!');
    	}
	}		
};

// - - - Activates autocomplete - - - //
var inputSearch = document.getElementById("user-name");
inputSearch.addEventListener('keyup', function() {
		MessageForm.clearAutocomplete();
		MessageForm.changeInput(this.value);
});


// - - - On click on submit button checks user name and message for input - - - //
$( "#user-message-form" ).submit(function( event ) {
	MessageForm.validationOfInput();
	event.preventDefault();
});


// - - - Settings Local Storage - - - //

// - - - Gets local storage if any from previous sessions otherwise null - - - //
var emailNotificationsSelected = localStorage.getItem('email-notifications');
var publicProfileSelected = localStorage.getItem('public-profile-selected');
var timeZoneSelected = localStorage.getItem('time-zone-selected');

// - - - Changes Button Settings Depending On Local Storage - - - /
if (emailNotificationsSelected !== null) { // Email Settings
	if (emailNotificationsSelected == "true") {
   		$( '#email-notifications' ).prop( 'checked', true );
	} else if (emailNotificationsSelected == "false" ) {
		$( '#email-notifications' ).prop( 'checked', false );
   		buttonSwitch(0);
	}
}
if (publicProfileSelected !== null) { // Public Profile
	if (publicProfileSelected == "true") {
   		$( '#set-profile' ).prop( 'checked', true );
	} else if (publicProfileSelected == "false" ) {
		$( '#set-profile' ).prop( 'checked', false );
   		buttonSwitch(1);
	}
}
if (timeZoneSelected !== null) { // Time Zone
    $( 'select#select-timezone').val(timeZoneSelected);
}

// - - - Listens for Submit on Save Button, Gets Settings and Stores Settings
$( "#settings-form" ).submit(function(event) {
	event.preventDefault();
	// - - - Gets User Settings - - - //
	emailNotificationsSelected = $( "#email-notifications" ).prop('checked');
    publicProfileSelected = $( '#set-profile' ).prop( 'checked' );
    timeZoneSelected = $( 'select#select-timezone option:selected').val();
	// - - - Stores Settings to Local Storage - - - //
	localStorage.setItem('email-notifications', emailNotificationsSelected);
    localStorage.setItem('public-profile-selected', publicProfileSelected);
    localStorage.setItem('time-zone-selected', timeZoneSelected);
});