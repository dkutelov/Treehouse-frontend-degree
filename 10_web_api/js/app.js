// - - - V A R I A B L E S - - - //
// - - - - - - - - - - - - - - - //

var inputText = '';
var allAlbums = [];
// - - - Overlay variables
var numberOfAlbums = 0;
var $overlay = $('#overlay');
var $albumName = $('<h2 id="albumName"></h2>');
var $albumArtisits = $('<h3 id="albumArtists"></h3>');
var $albumImage = $('<img>');
var $albumTracks = $('<ul id="tracks"></ul>');
var $buttonPrev = $('<div class="prev"><img src="img/arrowPrevious.png" alt="arrow previuos image"></div>');
var $buttonNext = $('<div class="next"><img src="img/arrowNext.png" alt="arrow previuos image"></div>');
var albumCounter = 0;
var $popUpMessage = $('<div id="pop-up-message">No artist found! Try again!</div>');
// - - - Track audio variables
var playing = 'playing';
var audioObject = null;
var $photosContainer = $('<div id="photosContainer"></div>');
// - - - Flickr photos
var allPhotos = [];
var numberOfPhotos = 0;

// - - - F U N C T I O N S - - - //
// - - - - - - - - - - - - - - - //

// Disables Search and shows spinner
function disableSearch() {
	$("#searchInput").prop("disabled", true);
	$("#spinnerOverlay").fadeIn();
}

// Re-enables Search and hides spinner
function enableSearch() {
	$("#searchInput").prop("disabled", false);
	$("#spinnerOverlay").fadeOut();
}

// Gets album tracks, release date and popularity for each album
function addAlbumDetails(index){
	
	var url = allAlbums[index].albumUrl;
	
	$.getJSON(url, function(response) {
		var allArtistsNames = [];
		var artistName = '';
		
		$.each(response.artists,function(i,item) {
			 	artistName = item.name;
			 	allArtistsNames.push(artistName);
		});// end of each
		
		var tracks = [];
		
		$.each(response.tracks.items,function(i,item) {
			var track = {
				name: '',
				duration: 0,
				sampleURL: ''
			};
			 track.name = item.name;
			 track.duration = (item.duration_ms / 60000).toFixed(2);
			 track.sampleURL = item.preview_url;
			 tracks[i] = track;
		});// end of each
		
		var albumReleaseDate = new Date(response.release_date);
		
		var albumDetails = { // create second object - tracks, release data and popularity
			tracks: tracks,
			artists: allArtistsNames,
			releaseDate: albumReleaseDate.getUTCFullYear(),
			popularity: response.popularity
	 	};
	 	
	 	$.extend(allAlbums[index],albumDetails); // adds object albumDetails to Album

	});//end of getJSON
}//enf of addAlbumDetails function

// Builds HTML for the sorting options buttons
function showSortOptions() {
	var sortOptions = '<h2>Sort by:</h2>';
	sortOptions += '<ul id="sortOptions">';
	sortOptions += '<li id="sortName">Name</li>';
	sortOptions += '<li id="sortDate">Date</li>';
	sortOptions += '<li id="sortPop">Popularity</li>';
	sortOptions += '</ul>';
	$('#sortOptionsBox').html(sortOptions);
}

// Lists albums after sorting
function showAlbums() {
	var albumsListingHTML = '<ul id="albumListing">';
	
	$.each(allAlbums,function(index,item) {
    	albumsListingHTML += '<li class="albumBox">';
		albumsListingHTML += '<div class="imgBox"><img src="' + allAlbums[index].albumCoverImage + '"></div>';
		albumsListingHTML += '<div class="caption">';
		albumsListingHTML += '<h2>' + allAlbums[index].albumName + '</h2>';
		albumsListingHTML += '<p>' + allAlbums[index].artists + '</p>';
		albumsListingHTML += '</div>';
		albumsListingHTML += '<p class="year">' + allAlbums[index].releaseDate + '</p>';
		albumsListingHTML += '<p class="popularity">Popularity: ' + allAlbums[index].popularity + '</p>';
		albumsListingHTML += '</li>';
     }); // end each
     
	albumsListingHTML += '</ul>';
	$('#searchResults').html(albumsListingHTML);
}// end of showAlbums function

// Sorting albums
function albumSort(what) {

	function byPopularity(a, b) {
		return (a.popularity < b.popularity) ? -1 :
          ((a.popularity > b.popularity) ? 1 : 0);
  	}
  	
  	function byDate(a, b) {
    	return (a.releaseDate < b.releaseDate) ? -1 :
        ((a.releaseDate > b.releaseDate) ? 1 : 0);
  	}
  
  	function byName(a, b) { 
    	return (a.albumName < b.albumName) ? -1 :
        ((a.albumName > b.albumName) ? 1 : 0);
	}

	if ( what === 'popularity') {
		allAlbums.sort(byPopularity);
			
	} else if ( what === 'date') {
		allAlbums.sort(byDate);
	}
	
	else if ( what === 'name') {
		allAlbums.sort(byName);
	}
	
	$('#searchResults').empty();
	$('#searchResults').fadeOut('fast');
	$('#searchResults').fadeIn('fast', function(){
		showAlbums();
	});
}


// Shows i album
function showAlbum(i) {
	var overlayHTML = '<div id="prev"><img src="img/arrowPrevious.png" alt="arrow previuos image"></div>';
	overlayHTML 	+= '<div id="album"></div>';
	overlayHTML 	+= '<div id="next"><img src="img/arrowNext.png" alt="arrow previuos image"></div>';
	overlayHTML 	+= '<div id="overlayClose">CLOSE</div>';
	$overlay.html(overlayHTML);
	
	// Album artists
	var iArtists = '';
	var y = allAlbums[i].artists.length;
	
	if ( y > 1 ) {
		$.each(allAlbums[i].artists,function(index,item){
			iArtists +=  allAlbums[i].artists[index] + ' ';
		});
	} else {
		iArtists = allAlbums[i].artists;
	}
	
	$('#album').append($albumImage, $albumName, $albumArtisits, $albumTracks, $photosContainer);
	$('#albumName').text(allAlbums[i].albumName);
	$('#albumArtists').text(iArtists);
	$albumImage.attr('src', allAlbums[i].albumCoverImage);
	$albumImage.attr('id', 'albumImg');
	
	var tracksListing = '';
	
	$.each(allAlbums[i].tracks, function(index,item){
		tracksListing += '<li class="track">';
		tracksListing += '<a href="' + allAlbums[i].tracks[index].sampleURL + '"><img src="img/play-icon.png" class="playTrack"></a>';
		tracksListing += '<p class="name">' + allAlbums[i].tracks[index].name + '</p>';
		tracksListing += '<p class="duration">' + allAlbums[i].tracks[index].duration + '</p>';
		tracksListing += '<div class="filler"></div>';
		tracksListing += '</li>';
	});// end each
	
	$albumTracks.html(tracksListing);
	
	showFlickrPhotos(inputText);

	$('html,body').scrollTop(0);
} // end of showAlbum function

// Plays clicked track
function playTrack(url, target) {
    audioObject = new Audio(url);
    audioObject.play();
    target.classList.add(playing);
    $('.playing').attr('src', 'img/pause-icon.png');
    $('.playing').parents('.track').css('color','#52528C');
    $('.playing').parent().siblings('.filler').css('border-bottom', '1px dashed #52528C');
    
    audioObject.addEventListener('ended', function () {
        $('.playing').attr('src', 'img/play-icon.png');
        $('.playing').parents('.track').css('color','#BFC3BA');
        $('.playing').parent().siblings('.filler').css('border-bottom', '1px dashed #BFC3BA');
        target.classList.remove(playing);
    });
    
    audioObject.addEventListener('pause', function () {
        $('.playing').attr('src', 'img/play-icon.png');
        $('.playing').parents('.track').css('color','#BFC3BA');
        $('.playing').parent().siblings('.filler').css('border-bottom', '1px dashed #BFC3BA');
        target.classList.remove(playing);
	});
}// end of playTrack function

// Get photos about the artist from Flickr feed
function getFlickrPhotos(keyword){
	var searchQ = keyword + ', music';
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: searchQ,
      format: "json"
    };
    function getPhotos(data) {
	  numberOfPhotos = data.items.length;
      $.each(data.items,function(i,photo) {
	      var flickrPhoto = {
		      photoLink : photo.link,
		      photoImgUrl :  photo.media.m
	      };
	      allPhotos.push(flickrPhoto);	      
      }); // end each 		
    }
    $.getJSON(flickerAPI, flickrOptions, getPhotos);
}

function showFlickrPhotos(keyword){
	var photoHTML = '<h4>Check some latest photos for ' + keyword + ' from Flickr:</h4>'  +  '<ul>';
	var Int = numberOfPhotos;

	for (i = 0; i < 3; i++) {
		var y = Math.floor((Math.random() * Int));// selects random number b/w 0 and number of photos
		photoHTML += '<li class="flickrPhoto">';
		photoHTML += '<a href="' + allPhotos[y].photoLink + '" class="image">';
		photoHTML += '<img src="' + allPhotos[y].photoImgUrl + '"></a></li>';
	}
	photoHTML += '</ul>';
	$photosContainer.html(photoHTML);
}

function showNextAlbum(){
	albumCounter += 1;
	if ( albumCounter === allAlbums.length ) {
		albumCounter = 0;
	}
	$("#album").fadeOut('Fast', function(){
		showAlbum(albumCounter);
	});
	$("#album").show();
}

function showPrevAlbum(){
	albumCounter -= 1;
	if ( albumCounter < 0 ) {
		albumCounter = allAlbums.length - 1;
	}
	$("#album").fadeOut('Fast', function(){
		showAlbum(albumCounter);
	});
	$("#album").show();
}

// - - - END OF FUNCTIONS - - - //

// Create response of error or nothing found ! ! ! ! ! ! ! ! 
$('#searchForm').on('submit', function(event) {
	event.preventDefault();

	allAlbums = [];
	inputText = $('#searchInput').val();
	var searchQuery = 'artist:' + inputText;

	disableSearch();

	var spotifySearch = 'https://api.spotify.com/v1/search';
	var searchData = {
		"type": "album",
		"q": searchQuery
	};

	function searchOutput(response) {
     	$.each(response.albums.items,function(index,item) { // asigns album details to object litteral Album
			var album = {
				id: item.id,
				albumName: item.name,
				albumCoverImage: item.images[0].url,
				albumUrl: item.href
			};
			allAlbums.push(album); 
			addAlbumDetails(index);
		}); // end each	
  	}// end searchOutput function
  	
  	$.getJSON(spotifySearch, searchData).done(function(response){
	  	searchOutput(response);
	  	}).fail(function() {
	  		Alert( "Error!!! Please, try again!" );
  	});// End of getJSON
  
  	getFlickrPhotos(inputText);
  	
  	$(document).ajaxStop(function() {//   	Show search results
	  	if ( allAlbums.length === 0) {
		  	$('#searchResults').append($popUpMessage);
		  	$popUpMessage.fadeIn(1500,function(){
			$(this).delay(1000);
			$(this).fadeOut(1000);
			});

			enableSearch();
			return;
	  	}  	
	  	
  		showSortOptions();
  		
		showAlbums();	
		
		enableSearch();
				
		// Listen for click events on sorting buttons
		$(document).on('click',"#sortPop",function(event){
			event.preventDefault();
			event.stopPropagation();
			albumSort('popularity');
		});
		
		$(document).on('click',"#sortDate",function(event){
			event.preventDefault();
			event.stopPropagation();
			albumSort('date');
		});
		
		$(document).on('click',"#sortName", function(event){
			event.preventDefault();
			event.stopPropagation();
			albumSort('name');
		});

		// Opens up pop up with ambum details
		$(document).on('click',"#albumListing li", function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var index = $("#albumListing li").index(this);
			albumCounter = index;

			// Shows overlay
// 			$('html, body').css({'overflow': 'hidden', 'height': '100%'});
			$overlay.fadeIn("fast");// Shows overlay
			showAlbum(index);
			
			// Left-right arrow icons navigation
			$(document).on('click', '#next', function() {
				showNextAlbum();
			});
			
			$(document).on('click','#prev', function(){
				showPrevAlbum();
			});
			
			//
			// Navigation with left/ right arrow keys
			$(document).keydown(function(e) {
			  if ( e.which === 39 ) {
					showNextAlbum();
			    } else if ( e.which === 37 ) {
					showPrevAlbum();
				} else if ( e.which === 27 ) {
					$overlay.hide();
				    $('html, body').css({'overflow': 'auto', 'height': 'auto'});
			    }
			});			
			
			$(document).on('click','.track a', function(e){
				e.preventDefault();
			    var target = e.target;
			    var sampleTrackUrl = $(this).attr('href');
			    if (target !== null && target.classList.contains('playTrack')) {
			        if (target.classList.contains(playing)) {
			            audioObject.pause();
			        } else {
			            if (audioObject) {
			                audioObject.pause();
			            }
						 playTrack(sampleTrackUrl, target);
			        }
			    }
			});	// end of track on click	

			$(document).on('click', '#overlayClose', function() {
				$overlay.fadeOut();
				$('html, body').css({'overflow': 'auto', 'height': 'auto'});
			});


		}); //end of albumListing li on click
		
	});	

});// end of searchForm on submit
			
