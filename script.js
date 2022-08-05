//step 1 :define all your html static selectors
var cityEl = document.querySelector("#city")
var cityFormEl = document.querySelector("#city-form")
var cityHeaderEl = document.querySelector("#city-header")
var TempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidEl = document.querySelector("humidity")
var uviEl = document.querySelector("#uvi")
var cityHeaderCard1El = document.querySelector("#city-header-card-1")




var api = "43307f36c133c1b4d80feb3644b2ab3e"
//step2: make an addEventListener on Submit and create displayDashboard - it shows current weather and last five day

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
                TempEl.innerHTML =currentData.main.temp + " F"
                console.log(TempEl.innerHTML)
                windEl.innerHTML = currentData.wind.speed + " MPH"
                console.log(windEl.innerHTML)
                humidEl.textContent = currentData.main.humidity + "%"
                console.log(humidEl.innerHTML)
                uviEl.innerHTML = currentData.current.uvi
                console.log(uvEl.innerHTML)

                var fiveDayUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial`
                
                fetch(fiveDayUrl)
                .then(function (response) {
                    return response.json()
                })

                .then(function (fiveDayData){

                })

            })



        })

}



cityFormEl.addEventListener("submit", displayWeather)






