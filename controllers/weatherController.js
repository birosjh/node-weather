const axios = require('axios')
require('dotenv').config()

exports.now = async function (req, res) {
    var parameters = {
        q: 'London,uk',
        appid: process.env.WEATHER_API
    }

    var weather = await getWeather(parameters);
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