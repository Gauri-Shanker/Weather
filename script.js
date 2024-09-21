let minl=new Date();
console.log(minl.getHours())
let temperature=document.querySelector(".temp")
let City = document.querySelector(".city")
let Humidity = document.querySelector(".humidity")
let Wind=document.querySelector(".wind")
let searchbox=document.querySelector(".search input")
let searchbtn = document.querySelector(".search button")
let weathericon = document.querySelector(".weather-icon")



searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
    console.log(typeof(searchbox.value));
})

const API_KEY="8fa22f0682b35819fa29f94b1c7d06b9"
// go to api.openweathermap.com and make an account and get your api key---------------------

const apiurl =`https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric&q=`;

async function checkweather(cityvalue){
    const response = await fetch(apiurl+`${cityvalue}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display = "none"

    }
    else{
    var data= await response.json();
    console.log(data);
    temperature.innerHTML = Math.round(data.main.temp) +"°C"
    City.innerHTML = data.name
    Wind.innerHTML=Math.floor(data.wind.speed*3.6)+"Km/h"

  


Humidity.innerHTML=Math.round(data.main.humidity)+"%"
        // let a = new Date()
        // hours = a.getHours()>=12 ?"PM":"AM"
        // if(hours=="PM")
        // weathericon.src="3662525.png"
        let a = new Date()
        hours = a.getHours() >= 13 && a.getHours()<=6 ? "PM" : "AM"
        if (hours == "PM") {

            if (data.weather[0].main == "Clear")
                weathericon.src = "clearnight.png"
            else if (data.weather[0].main == "Rain")
                weathericon.src = "rainnight.png"
            else if (data.weather[0].main == "Clouds")
                weathericon.src = "cloudnight.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon.src = "drizzlenight.png"
            else if (data.weather[0].main == "Mist")
                weathericon.src = "mistnight.png"
            else if (data.weather[0].main == "Snow")
                weathericon.src = "snownight.png"

        }
        else if (hours == "AM") {
            if (data.weather[0].main == "Clear")
                weathericon.src = "clear.png"
            else if (data.weather[0].main == "Rain")
                weathericon.src = "rain.png"
            else if (data.weather[0].main == "Clouds")
                weathericon.src = "clouds.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon.src = "drizzle.png"
            else if (data.weather[0].main == "Mist")
                weathericon.src = "mist.png"
            else if (data.weather[0].main == "Snow")
                weathericon.src = "snow.png"
        }

    document.querySelector(".weather").style.display="block"
     document.querySelector(".error").style.display = "none"
    }
}
// checkweather()

let q1 = "Noida"
let temperature1 = document.querySelector(".container .card2 .temp")
let City1 = document.querySelector(".container .card2 .city")
let Humidity1 = document.querySelector(".container .card2 .humidity")
let Wind1 = document.querySelector(".container .card2 .wind")
// let searchbox1 = document.querySelector(".container .card2 .search input")
// let searchbtn1 = document.querySelector(".container .card2 .search button")
let weathericon1 = document.querySelector(".container .card2 .weather-icon")
checkweather1("Noida")

async function checkweather1(cityvalue) {
    // cityvalue="Noida";
    const response = await fetch(apiurl + `${cityvalue}`);
    if (response.status == 404) {
        document.querySelector(".container .card2 .error").style.display = "block"
        document.querySelector(".container .card2 .weather").style.display = "none"

    }
    else {
        var data = await response.json();
        console.log(data);
        temperature1.innerHTML = Math.round(data.main.temp) + "°C"
        City1.innerHTML = data.name
        Wind1.innerHTML = Math.floor(data.wind.speed * 3.6) + "Km/h"




        Humidity1.innerHTML = Math.round(data.main.humidity) + "%"
        // let a = new Date()
        // hours = a.getHours()>=12 ?"PM":"AM"
        // if(hours=="PM")
        // weathericon.src="3662525.png"
        let a = new Date()
        hours = a.getHours() >= 13 && a.getHours() <= 6 ? "PM" : "AM"
        if (hours == "PM") {

            if (data.weather[0].main == "Clear")
                weathericon1.src = "clearnight.png"
            else if (data.weather[0].main == "Rain")
                weathericon1.src = "rainnight.png"
            else if (data.weather[0].main == "Clouds")
                weathericon1.src = "cloudnight.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon1.src = "drizzlenight.png"
            else if (data.weather[0].main == "Mist")
                weathericon1.src = "mistnight.png"
            else if (data.weather[0].main == "Snow")
                weathericon1.src = "snownight.png"

        }
        else if (hours == "AM") {
            if (data.weather[0].main == "Clear")
                weathericon1.src = "clear.png"
            else if (data.weather[0].main == "Rain")
                weathericon1.src = "rain.png"
            else if (data.weather[0].main == "Clouds")
                weathericon1.src = "clouds.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon1.src = "drizzle.png"
            else if (data.weather[0].main == "Mist")
                weathericon1.src = "mist.png"
            else if (data.weather[0].main == "Snow")
                weathericon1.src = "snow.png"
        }
        document.querySelector(".container .card2 .weather").style.display = "block"
        // document.querySelector(".container .card2 .error").style.display = "none"
    }
}




let temperature2 = document.querySelector(".container .card3 .temp")
let City2 = document.querySelector(".container .card3 .city")
let Humidity2 = document.querySelector(".container .card3 .humidity")
let Wind2= document.querySelector(".container .card3 .wind")
// let searchbox1 = document.querySelector(".container .card2 .search input")
// let searchbtn1 = document.querySelector(".container .card2 .search button")
let weathericon2 = document.querySelector(".container .card3 .weather-icon")
checkweather2("Pune")

async function checkweather2(cityvalue) {
    // cityvalue="Noida";
    const response = await fetch(apiurl + `${cityvalue}`);
    if (response.status == 404) {
        document.querySelector(".container .card3 .error").style.display = "block"
        document.querySelector(".container .card3 .weather").style.display = "none"

    }
    else {
        var data = await response.json();
        console.log(data);
        temperature2.innerHTML = Math.round(data.main.temp) + "°C"
        City2.innerHTML = data.name
        Wind2.innerHTML = Math.floor(data.wind.speed * 3.6) + "Km/h"




        Humidity2.innerHTML = Math.round(data.main.humidity) + "%"
        // let a = new Date()
        // hours = a.getHours()>=12 ?"PM":"AM"
        // if(hours=="PM")
        // weathericon.src="3662525.png"
        let a = new Date()
        hours = a.getHours() >= 13 && a.getHours() <= 6 ? "PM" : "AM"
        if (hours == "PM") {

            if (data.weather[0].main == "Clear")
                weathericon2.src = "clearnight.png"
            else if (data.weather[0].main == "Rain")
                weathericon2.src = "rainnight.png"
            else if (data.weather[0].main == "Clouds")
                weathericon2.src = "cloudnight.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon2.src = "drizzlenight.png"
            else if (data.weather[0].main == "Mist")
                weathericon2.src = "mistnight.png"
            else if (data.weather[0].main == "Snow")
                weathericon2.src = "snownight.png"

        }
        else if (hours == "AM") {
            if (data.weather[0].main == "Clear")
                weathericon2.src = "clear.png"
            else if (data.weather[0].main == "Rain")
                weathericon2.src = "rain.png"
            else if (data.weather[0].main == "Clouds")
                weathericon2.src = "clouds.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon2.src = "drizzle.png"
            else if (data.weather[0].main == "Mist")
                weathericon2.src = "mist.png"
            else if (data.weather[0].main == "Snow")
                weathericon2.src = "snow.png"
        }

        document.querySelector(".container .card3 .weather").style.display = "block"
        // document.querySelector(".container .card2 .error").style.display = "none"
    }
}





let temperature3 = document.querySelector(".container .card4 .temp")
let City3 = document.querySelector(".container .card4 .city")
let Humidity3= document.querySelector(".container .card4 .humidity")
let Wind3 = document.querySelector(".container .card4 .wind")
// let searchbox1 = document.querySelector(".container .card2 .search input")
// let searchbtn1 = document.querySelector(".container .card2 .search button")
let weathericon3 = document.querySelector(".container .card4 .weather-icon")
checkweather3("Delhi")

async function checkweather3(cityvalue) {
    // cityvalue="Noida";
    const response = await fetch(apiurl + `${cityvalue}`);
    if (response.status == 404) {
        document.querySelector(".container .card4 .error").style.display = "block"
        document.querySelector(".container .card4 .weather").style.display = "none"

    }
    else {
        var data = await response.json();
        console.log(data);
        temperature3.innerHTML = Math.round(data.main.temp) + "°C"
        City3.innerHTML = data.name
        Wind3.innerHTML = Math.floor(data.wind.speed * 3.6) + "Km/h"




        Humidity3.innerHTML = Math.round(data.main.humidity) + "%"
        let a = new Date()
        hours = a.getHours() >= 13 && a.getHours() <= 6 ? "PM" : "AM"
        if(hours=="PM"){
            
            if (data.weather[0].main == "Clear")
                weathericon3.src = "clearnight.png"
            else if (data.weather[0].main == "Rain")
                weathericon3.src = "rainnight.png"
            else if (data.weather[0].main == "Clouds")
                weathericon3.src = "cloudnight.png"
            else if (data.weather[0].main == "Drizzle")
                weathericon3.src = "drizzlenight.png"
            else if (data.weather[0].main == "Mist")
                weathericon3.src = "mistnight.png"
            else if (data.weather[0].main == "Snow")
                weathericon3.src = "snownight.png"

        }
        else if(hours=="AM")
        { 
            if (data.weather[0].main == "Clear")
            weathericon3.src = "clear.png"
        else if (data.weather[0].main == "Rain")
            weathericon3.src = "rain.png"
        else if (data.weather[0].main == "Clouds")
            weathericon3.src = "clouds.png"
        else if (data.weather[0].main == "Drizzle")
            weathericon3.src = "drizzle.png"
        else if (data.weather[0].main == "Mist")
            weathericon3.src = "mist.png"
        else if (data.weather[0].main == "Snow")
            weathericon3.src = "snow.png"
    }
        document.querySelector(".container .card4 .weather").style.display = "block"
        // document.querySelector(".container .card2 .error").style.display = "none"
    }
}


