// Home page rotating words in key message
var $rotatingWords = $('.key-messages-content-rotating-words');
var rotatingWordsContent = ['modern', 'responsive', 'super fast'];
var wordIndex = 1;

//Changes words in key message on home page
function changeWord() {
	$rotatingWords.fadeOut(200, function(){
		$rotatingWords.text(rotatingWordsContent[wordIndex]).fadeIn(200);	
	});
	if ( wordIndex < 2) {
		wordIndex += 1;
	} else {
		wordIndex = 0;
	}
}

//Call function on regular intervals to change word in key message on home page
setInterval(function(){ 
	changeWord();
}, 2000);