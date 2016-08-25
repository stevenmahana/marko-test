var weather_connect = require('./src/weather');

// == [ WEATHER ] == //
exports.weather = function(options, callback) {
    weather_connect.weather(options, callback);
};
