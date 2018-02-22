const axios = require('axios')
require('dotenv').config()

exports.now = async function (req, res) {
    var parameters = {
        q: 'London,uk',
        appid: process.env.WEATHER_API
    }

    var weather = await getWeather('weather', parameters);
    weather = {
        name: weather.name,
        description: weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1),
        temp: weather.main.temp,
        icon: 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
    }

    console.log(weather)
    res.send(weather);
};

exports.fiveDays = async function(req, res) {
    var parameters = {
        lat: "35",
        lon: "139",
        appid: process.env.WEATHER_API
    }
    
    var weather = await getWeather('forecast', parameters);
    console.log(weather);
    res.send('Hello World!')
};

async function getWeather(type, parameters) {
    try {
        let response = await axios.get('https://api.openweathermap.org/data/2.5/' + type, {
            params: parameters
        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
}