/* CURRENTLY IN: javascript/main.js */

$('.bxslider').bxSlider({
	 auto: true,
	 pager: false,
	 controls: false
});

var map;

$('.select-petersfield').on('click',function(){
	$('.chelsea').slideToggle();
	$('.petersfield').slideToggle()
	getMap('362 2nd Ave,New York, NY','map-petersfield','Pushcart Coffee Peters field');
	//fixes and issue where the map isn't displayed properly due to the div being hidden on load
	lastCenter=map.getCenter(); 
	google.maps.event.trigger(map, 'resize');
	map.setCenter(lastCenter);
});

$('.select-chelsea').on('click',function(){
	$('.petersfield').slideToggle();
	$('.chelsea').slideToggle();
	getMap('401+W+25th+St,+New+York,+NY,+10001','map-chelsea','Pushcart Coffee @ chelsea');
	//fixes and issue where the map isn't displayed properly due to the div being hidden on load
	lastCenter=map.getCenter(); 
	google.maps.event.trigger(map, 'resize');
	map.setCenter(lastCenter);
});

$('#navList li a').on('click',function(e){
	//prevents any defualt actions
	e.preventDefault()
	$('html, body').animate({
		//need to set the text to lowercase to match the id name
		scrollTop: $('#' + $(this).text()).offset().top - 65
	}, 1000);
});


function getMap(address, elementId, nameOfLocation){
	//key for google maps to work
	var __KEYID__ = 'AIzaSyAqB0Oju84S-3pjqi6-qoNHDTvGLSTFL50';
	//constructiing the url to be used later
	var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='
		+ address
		+ '&sensor=false&key'
		+ __KEYID__
	//creating the variables to save the lat and long to after the ajax call
	var lat = "";
	var lng = "";
	//ajax call to get the lat and long cords of the address
	$.ajax({
		url: url
		, success: function(data){
		//getting the lat and long
		lat = data.results[0].geometry.location.lat;
		lng = data.results[0].geometry.location.lng;

		var myLatlng = new google.maps.LatLng(lat, lng);
		function initialize() {
			//constructing the map options
			var mapOptions = {
			    zoom: 17,
			    center: myLatlng,
			    scrollwheel: false
			  };
			  //constructing the map to be displayed
			  map = new google.maps.Map(document.getElementById(elementId)
			  	, mapOptions);
			//creating the marker for the business location
			var marker = new google.maps.Marker({
      				position: myLatlng,
      				map: map,
     				title: nameOfLocation
  			});
		}
		//calling the map api to create and display the map
		google.maps.event.addDomListener(window, 'load', initialize);
  }});
}
//loading the chelsea map by defualt
getMap('401+W+25th+St,+New+York,+NY,+10001','map-chelsea','Pushcart Coffee @ chelsea');
//loading the petersfield map by defualt
getMap('362 2nd Ave,New York, NY','map-petersfield','Pushcart Coffee Peters field');
