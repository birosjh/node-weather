const axios = require('axios')

exports.daily = function(req, res) {
    
    getDailyWeather();
    res.send('Hello World!')
};

async function getDailyWeather() {
    try {
        let response = await axios.get('https://www.metaweather.com/api/location/search/', {
            params: {
                'query': 'london'
            }
        });
        console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}