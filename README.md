# google-map-styer

Vanilla javascript plugin for changing style/color on Google Map.

## Usage

1. Set HTML
```
<div class="gmap">
<div class="gmap-inner"></div>
</div>
```
- each needs to have separated class

2. Set CSS
Width & height is defined in CSS.
Set responsive option true if the width / height is flexible.

```
.gmap{
	width:500px;
	height:500px;
}
.gmap-inner{
	width:500px;
	height:500px;
}

```

3. Include scripts  
You'll need to get Google Map API key.

```
<!-- include google map main js-->
<script id="gmap" src="http://maps.google.com/maps/api/js?sensor=false&amp;key=xxxxxxx"></script>
<!-- include plugin file-->
<script id="gmap" src="PATH_TO_YOUR_SCRIPTS/googlemapstyler.min.js"></script>
```

4. Set scripts  
With Vanilla Javascript
```
<script>
	window.onload=function(){
		var gmap = document.getElelemtsByClassName("gmap")
		var gmapstyler = new gmapStyler(gmap,{
			//options
			latitude:0,
			longitude:0,
			style:[
			  {
			    "elementType": "labels",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "stylers": [
			      { "saturation": -100 },
			      { "lightness": 48 }
			    ]
			  }
			]
		});

	}
</script>
```

With jQuery
```
<script>
	$(window).load(function(){
		$(".gmap").gmapStyler({
			//options
			// inner:".gmap-inner",
			latitude:0,
			longitude:0,
			style:[
			  {
			    "elementType": "labels",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "stylers": [
			      { "saturation": -100 },
			      { "lightness": 48 }
			    ]
			  }
			]
		});
	});
</script>
```

## Options
| option | type | description	 |
|----------|-----|-----|
| latitude | `number` | **required** latitude for center position	 |
| longitude | `number` | **required** longitude for center position	 |
| wrapper | `str` | HTML *class* for map wrapper (default : ```gmap```)	 |
| inner | `str` | HTML *class* for map inner(default : ```gmap-inner```)	 |
| style | `array` | an array containing styling google map	 |
| responsive | `boolean` | responsive map width/height (default : mono style) |
| zoom | `number` | zoom level (default : 17)   |
| pin | `str` | pin image path    |
| pinWidth | `number` | pin image width  |
| pinHeight | `number` | marker image height  |
| pinWidthSp | `number` | marker image width on smartphone |
| pinHeightSp | `number` | marker image height on smartphone |
 

