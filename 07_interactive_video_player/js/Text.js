function VideoText(start, end, text) {
	this.start = start;
	this.end = end;
	this.text = text;
}

VideoText.prototype.highlightText = function() {
	var video = document.getElementById("video");
	var text = document.getElementById("video-text");
	for (var i = 0; i < textSpan.length; i++) {
		var currentSpan = textSpan[i];
		if (currentSpan.start < video.currentTime && video.currentTime < currentSpan.end) {
			text.children[i].classList.remove("not-highlighted");
            text.children[i].classList.add("highlighted");
		}
		if (video.currentTime < currentSpan.start || currentSpan.end < video.currentTime) {
			text.children[i].classList.remove("highlighted");
            text.children[i].classList.add("not-highlighted");
		}
	}
};


var textSpan = [
	new VideoText(0.24, 4.13, "Now that we've looked at the architecture of the internet, let's see how you might"),
	new VideoText(4.13, 7.52, "connect your personal devices to the internet inside your house."),
	new VideoText(7.53, 11.26, "Well there are many ways to connect to the internet, and"),
	new VideoText(11.27, 13.95, "most often people connect wirelessly."),
	new VideoText(13.96, 17.93, "Let's look at an example of how you can connect to the internet."),
	new VideoText(17.94, 22.36, "If you live in a city or a town, you probably have a coaxial cable for"),
	new VideoText(22.37, 26.87, "cable Internet, or a phone line if you have DSL, running to the outside of"),
	new VideoText(26.88, 30.91, "your house, that connects you to the Internet Service Provider, or ISP."),
	new VideoText(30.92, 34.72, "If you live far out in the country, you'll more likely have"),
	new VideoText(34.73, 39.42, "a dish outside your house, connecting you wirelessly to your closest ISP, or"),
	new VideoText(39.43, 41.19, "you might also use the telephone system."),
	new VideoText(42.35, 46.29, "Whether a wire comes straight from the ISP hookup outside your house, or"),
	new VideoText(46.30, 49.26, "it travels over radiowaves from your roof,"),
	new VideoText(49.27, 53.75, "the first stop a wire will make once inside your house, is at your modem."),
	new VideoText(53.76, 57.77, "A modem is what connects the internet to your network at home."),
	new VideoText(57.78, 60.00, "A modem is what connects the internet to your network at home.")
];


for (var i = 0; i < textSpan.length; i++) {
	var newSpan = document.createElement("span");
	newSpan.textContent = textSpan[i].text + " ";
	newSpan.classList.add("not-highlighted");
	var spanToDiv = document.getElementById("video-text");
	spanToDiv.appendChild(newSpan);
}

