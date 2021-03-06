$(function(){
	if(datas){
		slide(datas);
	}
	if(position){
		drawMap(position);
	}
	$('.main .map, .map .close').bind('click',toggleMap);
});

function slide(data) {
	$.supersized({
		slide_interval : 2000,	
		transition : 1, 			
		transition_speed :1000,
		horizontal_center : 1,
		image_path : 'public/images/',
		slides : data
	});
}

function drawMap(position){
	
	var travelrStyle = [{featureType: "all",stylers: [{ saturation: -100 }]}];
  var travelrType = new google.maps.StyledMapType(travelrStyle,{name: "travelr"});
	var LatLng=new google.maps.LatLng(position.lat,position.lng);
	
	var mapOptions = {
    zoom: 9,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl:false,
    scaleControl: false,
    center: LatLng,
    mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'travelr']}
  };
	
	var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
  map.mapTypes.set('travelr', travelrType);
  map.setMapTypeId('travelr');
	var markerLatLng=LatLng;
	 var image='public/css/img/marker.png';
    var marker = new google.maps.Marker({
          position: markerLatLng,
          map: map,
          icon:image
      });
}

function toggleMap(){
	$('div.map').toggleClass('on');
	return false;
}

