const axios = require('axios')
const hdate = require('human-date')
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
    weather = weather.list.map( (x) => ({
        date: hdate.prettyPrint(new Date(x.dt)), 
        temp: x.main.temp,
        description: x.weather[0].description.charAt(0).toUpperCase() + x.weather[0].description.slice(1),
        icon: 'http://openweathermap.org/img/w/' + x.weather[0].icon + '.png'
    }))
    
    weather = weather.filter(function (_, index) {
        if (index == 1) {
            return true
        }
        return index % 8 == 0
    })

    res.send(weather.slice(0,5))
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