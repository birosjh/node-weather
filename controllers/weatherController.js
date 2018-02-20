const axios = require('axios')
require('dotenv').config()

exports.now = async function (req, res) {
    var parameters = {
        q: 'London,uk',
        appid: process.env.WEATHER_API
    }

    var weather = await getWeather(parameters);
    weather = {
        name: weather.name,
        description: weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1),
        temp: weather.main.temp,
        icon: 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
    }

    console.log(weather)
    res.send(weather);
};

exports.daily = function(req, res) {
    
    getWeather();
    res.send('Hello World!')
};

async function getWeather(parameters) {
    try {
        let response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: parameters
        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
}