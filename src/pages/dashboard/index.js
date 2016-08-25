var template = require('./template.marko')
    , v1api = require('src/api/v1Api');

module.exports = function(req, res) {

    var objectData = function weatherData(arg, callback) {
        var location = "seattle";
        if (!location) { return callback(); }
        v1api.weather({query: location}, callback);
    };

    // Use res.marko to render the template to the writeable response stream
    // and also set the `Content-Type` header to 'text/html; charset=utf-8'
    res.marko(template, {
        firstName: "frank",
        objectData: objectData
    });
};
