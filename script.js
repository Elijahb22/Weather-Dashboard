var key = $("9f30d37e31cf137d1d0a62d41457f99f")

var getData = function (cityName) {
    let weathercall = fetch ("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid" + key + "");
} 
