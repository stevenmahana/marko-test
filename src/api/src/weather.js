var request = require('request');
var pr = require('./lib/parseResponse');


exports.weather = function(options, callback) {
    var query = options.query || options.location;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&mode=json&APPID=18c1ff57eb991be7974572a5aa6bf2f6';
    request(url, function(err, response, body) {
        if (err) {
            return callback(err);
        }

        if (response.statusCode !== 200) {
            return callback('Request to ' + url + ' return status code ' + response.statusCode);
        }

        setTimeout(function() { // used to test async behavior

            pr.parseResponse(body, options, callback);

        }, 1000);

    });
};

