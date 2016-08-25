var template = require('./template.marko')
    , v1api = require('src/api/v1Api');

module.exports = function(req, res) {

    var objectData = function weatherData(arg, callback) {
        var location = "seattle";
        if (!location) { return callback(); }
        v1api.weather({query: location}, callback);
    };

    template.render({
        firstName: "frank",
        objectData: objectData
    }, res);
};
