/*!
 * Google map styler v1.0
 * Styling google map library
 * https://github.com/fs-nishimura/google-map-styler
 * MIT License
 * by fs-nishimura
 */


"use strict";


// -------------------------- default  -------------------------- //
var gMapOptions = {
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false,
  zoomControlOptions: {
  style: google.maps.ZoomControlStyle.SMALL
  },
  panControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false
};
var gMapStyleArrOff = [
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
];
var gMapStyleArr = [
  {
    "elementType": "labels",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "stylers": [
      { "saturation": -100 },
      { "lightness": 48 }
    ]
  }
];

var defaults = {
    latitude:1,
    longitude:1,
    style:gMapStyleArrOff,
    hoverStyle:gMapStyleArr,
    settings:gMapOptions,
    responsive:false,
    resizeable:true,
    pin:"./img/pin.png",
    pinWidth:20,
    pinHeight:20,
    pinWidthSp:10,
    pinHeightSp:10
  };
