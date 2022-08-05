//static selectors
var cityEl = document.querySelector("#city")
var cityFormEl = document.querySelector("#city-form")

//current weather
var cityHeaderEl = document.querySelector("#city-header")
var TempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidEl = document.querySelector("humidity")
var uviEl = document.querySelector("#uvi")
var cityHeaderCard1El = document.querySelector("#city-header-card-1")

//5 day weather cards
var fiveDayDates = [document.querySelector('#date-1'), document.querySelector('#date-2'), document.querySelector('#date-3'), document.querySelector('#date-4'), document.querySelector('#date-5')]
var dayTemp = [document.querySelector('#temp-1'), document.querySelector('#temp-2'), document.querySelector('#temp-3'), document.querySelector('#temp-4'), document.querySelector('#temp-5')]
var dayWind = [document.querySelector('#wind-1'), document.querySelector('#wind-2'), document.querySelector('#wind-3'), document.querySelector('#wind-4'), document.querySelector('#wind-5')]
var dayHumidity = [document.querySelector('#humidity-1'), document.querySelector('#humidity-2'), document.querySelector('#humidity-3'), document.querySelector('#humidity-4'), document.querySelector('#humidity-5')]
var dayUVI = [document.querySelector('uvi-1'), document.querySelector('#uvi-2'), document.querySelector('#uvi-3'), document.querySelector('#uvi-4'), document.querySelector('#uvi-5')]
var dayIcons = [document.querySelector('#icon-1'), document.querySelector('#icon-2'), document.querySelector('#icon-3'), document.querySelector('#icon-4'), document.querySelector('#icon-5')]

//open weather api key
var api = "43307f36c133c1b4d80feb3644b2ab3e"

function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`

    fetch(currentURL)
        .then(function (response) {
            return response.json()
        })

        .then(function (currentData) {
            console.log(currentData)

            var fiveDayUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial`

            fetch(fiveDayUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(fiveData){
                console.log(fiveData)
                var currentDate= moment.unix(currentData.dt).format("MM/DD/YYYY")
                var iconImage=document.createElement("img")
                iconImage.setAttribute("src",`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
                cityHeaderEl.innerHTML =  currentData.name + " "+ currentDate
                cityHeaderEl.appendChild(iconImage)
                TempEl.textContent =currentData.main.temp + " F"
                console.log(TempEl.innerHTML)
                windEl.textContent = currentData.wind.speed + " MPH"
                console.log(windEl.innerHTML)
                humidEl.textContent = currentData.main.humidity + "%"
                console.log(humidEl.innerHTML)
                uviEl.textContent = currentData.current.uvi
                console.log(uvEl.innerHTML)
                
                fetch(fiveDayUrl)
                .then(function (response) {
                    return response.json()
                })

                .then(function (fiveDayData) {
                
                })

            })



        })

}



cityFormEl.addEventListener("submit", displayWeather)






