var template = require('./template.marko');
//var peopleService = require('src/services/people');

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // var cat = req.params.cat;
    // var subcat = req.params.subcat;
    // var genre = req.params.genre;

    // ...

    template.render({
        // cat: cat,
        // subcat: subcat,
        // genre: genre
    }, res);
};
