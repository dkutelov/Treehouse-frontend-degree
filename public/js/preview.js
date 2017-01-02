var $previewOverlay = '<div class="preview-overlay"></div>';
var $iframeContainer = '<div class="preview-overlay-container"></div>';
var $livePreviewChangeBox = '<div class="preview-overlay--icon-box"></div>';
var $closePreviewIcon = '<div class="preview-overlay-close js-preview-close"><svg class="project--close-svg"><use xlink:href="#preview-exit" x="0" y="0"/></svg></div>';


function setPreviewSize(element) {
	if (element === "mobile") {
		$('iframe')
			.attr('width', '320px')
			.attr('height', '480px')
			.addClass('preview-overlay--frame-mobile');

	} else if (element === "tablet") {
		$('iframe')
			.attr('width', '780px')
			.attr('height', '1024px')
			.addClass('preview-overlay--frame-tablet');

		$('.preview-overlay-container').addClass('preview-overlay--tablet-box');

	} else if (element === "desktop") {
		$('iframe')
			.attr('width', '1280px')
			.attr('height', '1024px')
			.addClass('preview-overlay--frame-desktop');

		$('.preview-overlay-container').addClass('preview-overlay--desktop-box');
	}
}

function removeClasses() {
	$('iframe')
		.removeClass('preview-overlay--frame-mobile')
		.removeClass('preview-overlay--frame-tablet')
		.removeClass('preview-overlay--frame-desktop');
	$('.preview-overlay-container')
		.removeClass('preview-overlay--desktop-box')
		.removeClass('preview-overlay--tablet-box');
}

function livePreview(element, i) {
	// $('html, body').css({'overflow': 'auto', 'height': 'auto'});
	var url = projects[i].previewUrl;
	var $iframe = '<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless=""></iframe>';
	// var frameHtml = '<div class="preview-overlay--frame-';
	// frameHtml += element;
	// frameHtml += '"></div>';

	// Append the preview overlay
	$overlay.append($previewOverlay);
	$('.preview-overlay').fadeIn("fast");

	$('.preview-overlay').append($iframeContainer, $livePreviewChangeBox);

	$('.preview-overlay-container').append($iframe);

	$('.preview-overlay--icon-box').append(
		$mobilePreviewIcon,
		$tabletPreviewIcon,
		$desktopPreviewIcon,
		$closePreviewIcon
	);

	//Change classes of preview buttons to assign different event listeners
	$('.preview-mobile').removeClass('js-preview-mobile').addClass('js-preview-change-mobile');
	$('.preview-tablet').removeClass('js-preview-tablet').addClass('js-preview-change-tablet');
	$('.preview-desktop').removeClass('js-preview-desktop').addClass('js-preview-change-desktop');

	// Set preview url
	$('iframe').attr('src', url);

	$('iframe').addClass('preview-overlay--iframe');

	setPreviewSize(element);

	$(document).on('click', '.js-preview-change-mobile', function() {
  		var element = "mobile";
  		removeClasses();
  		setPreviewSize(element);
	});

	$(document).on('click', '.js-preview-change-tablet', function() {
  		var element = "tablet";
  		removeClasses();
  		setPreviewSize(element);
	});

	$(document).on('click', '.js-preview-change-desktop', function() {
  		var element = "desktop";
  		removeClasses();
  		setPreviewSize(element);
	});

	// Closes preview overlay
	$(document).on('click', '.js-preview-close', function() {
 		$('.preview-overlay').fadeOut("fast");
 		//Change back classes of preview buttons to assign different event listeners
		$('.preview-mobile').removeClass('js-preview-change-mobile').addClass('js-preview-mobile');
		$('.preview-tablet').removeClass('js-preview-change-tablet').addClass('js-preview-tablet');
		$('.preview-desktop').removeClass('js-preview-change-desktop').addClass('js-preview-desktop');
	});
}