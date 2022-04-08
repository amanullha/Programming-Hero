

const API_KEY = "020e5bbb472afd2bf3300d10b798c1e4";

let weatherTempC = 32;
let weatherTempF = 64;

let initialIsDone = true;

const searchTemperature = async () => {

    const inputsearched = document.getElementById("searchId");
    let cityName = undefined;

    if (initialIsDone) {
        cityName = "Comilla";
    }
    else {
        cityName = inputsearched.value;
    }

    inputsearched.value = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;


    try {
        isLoadingShow(true);
        const response = await fetch(url);
        const data = await response.json();

        displayTemperature(data);

        isLoadingShow(false);

        isWarningShow(false);
        initialIsDone = false;
    } catch (error) {
        console.log(error);
        isLoadingShow(false);
        isWarningShow(true);
    }


}

const isWarningShow = (f) => {
    const w = document.getElementById('warning');
    if (!f) {
        w.style.display = "none";
    }
    else {
        w.style.display = "block";
    }
}
const isLoadingShow = (f) => {
    const w = document.getElementById('loading');
    if (!f) {
        w.style.display = "none";
    }
    else {
        w.style.display = "block";
    }
}

const displayTemperature = temp => {


    //    set temperature 
    weatherTempC = (temp.main.temp);
    weatherTempC = weatherTempC.toFixed(2);
    weatherTempF = ((weatherTempC * (9 / 5)) + 32).toFixed(2);
    setText("weather-temp", weatherTempC);
    convertTemp(true);


    const WeatherCityName = temp.name;
    setText("city-name-head", WeatherCityName);
    setText("city-name", WeatherCityName);
    const weatherConditon = temp.weather[0].main;
    setText("weather-condition", weatherConditon);
    const weatherDescription = temp.weather[0].description;
    setText("weather-description", weatherDescription);
    const weatherIcon = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    setIcon(weatherIcon);




    const weatherHumidity = temp.main.humidity;
    setText("humidity", weatherHumidity);
    const weatherWindSpeed = temp.wind.speed;
    setText("wind-speed", weatherWindSpeed);
    const weatherWindDeg = temp.wind.deg;
    setText("wind-deg", weatherWindDeg);
    const weatherWindGust = temp.wind.gust;


    //set area names
    getCurrenLocation(temp.coord.lot, temp.coord.lon);



}

const setText = (tagId, text) => {

    document.getElementById(tagId).innerText = text;
}

const setIcon = (url) => {
    document.getElementById('weather-icon').setAttribute('src', url);
}


/*****convert temperaturn  */

const convertTemp = (flag) => {

    const c = document.getElementById('C');
    const f = document.getElementById('F');

    if (flag) {

        setText("weather-temp", weatherTempC)
        c.style.fontWeight = "bold";
        f.style.fontWeight = "normal";
    }
    else {
        setText("weather-temp", weatherTempF)
        c.style.fontWeight = "normal";
        f.style.fontWeight = "bold";
    }
}


/************ get the coordinate of the  location ************/

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    getCurrenLocation(position.coords.latitude, position.coords.longitude);
}


//initial searchTemperature called;
searchTemperature();


/************ Get locaton adderss with Coordinates ************/
const getCurrenLocation = async (x, y) => {

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${x}&longitude=${y}&localityLanguage=en`;

    try {


        const response = await fetch(url);
        const data = await response.json();
        setAreaNames(data)
    } catch (error) {
        console.log(error);
    }
}

getCurrenLocation();
const setAreaNames = (data) => {


    setText("continent", data.continent);
    setText("country-name", data.countryName);
    setText("Subdivision", data.principalSubdivision);


}

// update date

const date = new Date().toLocaleString();
document.getElementById("date").innerText = date;

// initial city is comilla

