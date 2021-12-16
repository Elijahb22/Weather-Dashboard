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
        //var to set a new date 
        var d = new Date();
        var date = d.getDate() + "/" + (d.getMonth()+1) +  "/" +  d.getFullYear();
        
        //var for the search city btn
        var citySearch = document.createElement("button");
        citySearch.innerText = weather.name;
        citySearch.classList.add("btn", "btn-secondary", "previousCity");
        //created a function that calls the citys name, temp, windspeed, humidty
        $("#city").text(weather.name + " (" + date + ")");
        $("#temp").text(weather.main.temp + "℉");
        $("#wind").text(weather.wind.speed + " MPH");
        $("#humidity").text(weather.main.humidity + "%");
        $("#weatherIcon").attr("src", iconLink);
        $(".searchHistory").append(citySearch);
        
        let weatherObj = {
            "lat": weather.coord.lat,
            "lon": weather.coord.lon
        }
        // generate the 5 day forcast
        generateFiveDayForecast(weatherObj);

        // error log if typed in a city that does not exist
    }).catch((err) => {
        console.log(err);
    });
}; 

$(".submit").on('click', function(){
    let userData = $("#userCity").val();
    if(userData){
        getData(userData);
    }
});

