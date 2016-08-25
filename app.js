require('./configure');
require('app-module-path').addPath(__dirname);

var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , flash = require('connect-flash')
    , port = process.env.PORT || 8080;

// session management
app.use(session({
    secret: 'pro angler',
    cookie: { maxAge: 600000 },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Consolidated Routes file to avoid clobbering
require('./routes').addRoutes(app);
var isProduction = (process.env.NODE_ENV === 'production');

app.listen(port, function() {
    console.log('Listening on port %d', port);
    console.log('http://localhost:' + port + '/');
});