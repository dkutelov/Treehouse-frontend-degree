var Player = {
	
	play_pause: function() {
		var playIcon = document.getElementById("play_pause");
		if (video.paused == true) {
			video.play();
			playIcon.src = "icons/pause-icon.png";
  		} else {
  			video.pause();
  			playIcon.src = "icons/play-icon.png";
  		}
	},
	
	mute : function() {
		var muteIcon = document.getElementById("mute");
		if (video.muted == false) {
			video.muted = true;
			muteIcon.src = "icons/volume-off-icon.png";
		} else {
	    	video.muted = false;
			muteIcon.src = "icons/volume-on-icon.png";
  		}
	},
	
	activateFullScreen : function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
  			} else if (video.mozRequestFullScreen) {
  				video.mozRequestFullScreen();
  			} else if (video.webkitRequestFullscreen) {
  				video.webkitRequestFullscreen();
  			}
	},
	
	showPlayAndBufferProgress : function() {
		var playProgress = document.getElementById("play-progress");
		var bufferProgress = document.getElementById("buffer-progress");
		var progressValue = (100 / video.duration) * video.currentTime;
  		playProgress.value = progressValue;	
  		var bufferValue = (100 / video.duration) * video.buffered.end(0);
  		bufferProgress.value = bufferValue;
	},
	
	
	changeVideoSpeed : function() {
		videoSpeed = document.getElementById("speed");
		if (videoSpeed.innerText == 'Fast') {
			video.playbackRate = 1.5;
			video.play();
			videoSpeed.innerText = 'Norm';
		} else if (videoSpeed.innerText == 'Norm') {
			video.playbackRate = 1.0;
			video.play();
			videoSpeed.innerText = 'Fast';
		}
	},
	
	toggleCaptions : function() {
		var captionOnOff = document.getElementById("caption-on-off");
		if (video.textTracks[0].mode == "showing") {
               video.textTracks[0].mode = "hidden";
			   captionOnOff.innerHTML = "<strike>CC</strike>";
            } else {
            	video.textTracks[0].mode = "showing"; 
                captionOnOff.innerHTML = "CC";
            }    
	}
	
};