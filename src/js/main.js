// -------------------------- styler definition  -------------------------- //

var gmapStyler = function gmapStyler(element, options) {

    var self = this;
    var _element = element;
    var _options = options;
    var _jQ = (!_options ? true : false);
    var _target = (_jQ ? this[0] : element);
    var _options = (_jQ ? _element : _options);
    _options = extend({}, _options, defaults);
    _options.latitude = _target.getAttribute("data-latitude");
    _options.longitude = _target.getAttribute("data-longitude");

    if (!_options.latitude || !_options.longitude) {
        throw new Error("latitude or longitude are not defined");
        return false;
    } else if (!_target) {
        throw new Error("Map HTML element does not exist");
        return false;
    }

    var _coord = new google.maps.LatLng(_options.latitude - 0.000000, _options.longitude);
    _options.settings.center = _coord;

    var _GMap = new google.maps.Map(_target.children[0], _options.settings);
    var _pin = (isMobile() ? {
        url: _options.pin,
        scaledSize: new google.maps.Size(_options.pinWidthSp, _options.pinHeightSp)
    } : _options.pin);
    var _GMarker = new google.maps.Marker({
        position: _coord,
        map: _GMap,
        icon: _pin
    });

    _GMap.setOptions({
        styles: _options.style
    });


    if(_options.resizeable || _options.responsive){
        google.maps.event.addDomListener(window, 'resize', function() {
          _GMap.setCenter(_coord);
      });
    }


    _target.addEventListener("mouseover", function() {
        _GMap.setOptions({
            styles: _options.hoverStyle
        });
    });
    _target.addEventListener("mouseleave", function() {
        _GMap.setOptions({
            styles: _options.hoverStyle
        });
    });

    if (isMobile()) {
        _target.addEventListener("touchstart", function() {
            _GMap.setOptions({
                styles: _options.hoverStyle
            });
        });
        _target.addEventListener("touchend", function() {
            _GMap.setOptions({
                styles: _options.style
            });
        });
    }

}


var extend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
            continue;

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key))
                out[key] = arguments[i][key];
        }
    }

    return out;
};

if (window.jQuery) {
    $.fn.gmapStyler = gmapStyler;
}

function isMobile() {
    if ($("body").hasClass('ua-sp')) {
        return true;
    } else {
        return false;
    }
}


