window.onload = function() {

	// Select html elements
	var video = document.getElementById("video");
	var videoText = document.getElementById("video-text");
	var playIcon = document.getElementById("play_pause");
	var fullScreenIcon = document.getElementById("full-screen");
	var muteIcon = document.getElementById("mute");
	var playProgress = document.getElementById("play-progress");
	var currentTime = document.getElementById("current-time");
	var videoDuration = document.getElementById("video-duration");
	var volumeControl = document.getElementById("volume-control");
	var videoSpeed = document.getElementById("speed");
	var captionOnOff = document.getElementById("caption-on-off");


	// Time formating fuction
	function timeFormat(sec) {
	    var min = Math.floor(sec / 60);
	    min = (min >= 10) ? min : "0" + min;
	    sec = Math.floor(sec % 60);
	    sec = (sec >= 10) ? sec : "0" + sec;
	    return min + ":" + sec;
	}


	// Event listner - on click play/pause
	playIcon.addEventListener("click", function() {
		Player.play_pause();
	});

	// Event listner - on click mute
	muteIcon.addEventListener("click", function() {
  		Player.mute();
  	});

  	// Event listner - on click full-screen 
  	fullScreenIcon.addEventListener("click", function() {
		Player.activateFullScreen();
  	});

	// Changes video speed b/w normal and fast
	videoSpeed.addEventListener('click', function() {
		Player.changeVideoSpeed();
	});

	// Toggles captions on and off
	captionOnOff.addEventListener('click', function() {
		Player.toggleCaptions();
    });

	// Event listner - updates progress bar as the video plays and update buffer bar
	video.addEventListener("timeupdate", function() {
		Player.showPlayAndBufferProgress();
	});

	// Calculates position where progress bar was clicked
	playProgress.addEventListener('click', function(e) {
		var clickPosition = e.offsetX / this.offsetWidth;
		video.currentTime = clickPosition * video.duration;
		playProgress.value = clickPosition / 100;
	});
	
  	// Event listner - play progress 
  	playProgress.addEventListener("change", function() {
		var time = video.duration * (playProgress.value / 100);
		video.currentTime = time;
	});


	// Pause the video when the slider handle is being dragged
	playProgress.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the slider handle is dropped
	playProgress.addEventListener("mouseup", function() {
		video.play();
		playIcon.src = "icons/pause-icon.png";
	});

	// Event listner - highlights the relevant text
	video.addEventListener("timeupdate", function() {
		textSpan[0].highlightText();
	});

	// Show staring time and video duration
	if (video.readyState >= 2) {
      	videoDuration.innerHTML = timeFormat(video.duration);
		currentTime.innerHTML = timeFormat(video.currentTime) + " / ";	
    }

	// Changes current time as video plays    
	video.addEventListener("timeupdate", function() {
		currentTime.innerHTML = timeFormat(video.currentTime) + " / ";	
 	});

	// Event listener for the volume control
	volumeControl.addEventListener("change", function() {
	  	video.volume = volumeControl.value;
	});


	// Plays video from clicked span
	var spanElements = videoText.getElementsByTagName('span');
	for (var i = 0; i < spanElements.length; i++) { 
		spanElements[i].addEventListener("click", function() {
			var clickedSpanText = this.innerHTML.slice(0, -1);
			for (var e = 0; e < textSpan.length; e++) {
				if (clickedSpanText == textSpan[e].text) {
					video.currentTime = textSpan[e].start;
					video.play();
					playIcon.src = "icons/pause-icon.png";
				}
			}
		});
	}
};