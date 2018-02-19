const express = require('express');
const app = express();

const weather_controller = require('./controllers/weatherController');

app.use(express.static('public'))

app.set('view engine', 'html')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/daily', weather_controller.daily)

app.listen(3000, function () {
    console.log('Listening on port 3000...')
})


