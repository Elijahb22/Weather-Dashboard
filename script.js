var key = $("9f30d37e31cf137d1d0a62d41457f99f")
// This function obtains the data that we want
var getData = function (cityName) {
    // use the weathercall so we can call the data in a blocked scope
    let weathercall = fetch ("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid" + key + "");
    
    weathercall.then(Response => {
        return Response.json();
    }).then(weather => {
        //use the icon var so we call the data in a blocked scope
        let iconLink = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
        //var to set a new date f
        var d = new Date();
        var date = d.getDate() + "/" + (d.getMonth()+1) +  "/" +  d.getFullYear();
        
        //var for the search city btn
        var citySearch = document.createElement("button");
        citySearch.innerText = weather.name;
        citySearch.classList.add("btn", "btn-secondary", "previousCity");
    })
} 
