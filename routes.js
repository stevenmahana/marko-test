var auth = require('middleware/auth')
    , multer  = require('multer');

var upload = multer({ dest: 'uploads/' });

exports.addRoutes = function(app) {

    /* == [ DASHBOARD ] == */
    var dashboardTemplate = require('./src/pages/dashboard/index');
    app.get('/', dashboardTemplate);

    /* == [ BLOG ] == */
    var blogTemplate = require('./src/pages/blog/index');
    app.get('/blog/', auth.authorize, blogTemplate);
    app.get('/blog/:cat/', auth.authorize, blogTemplate);
    app.get('/blog/:cat/:uuid', auth.authorize, blogTemplate);
    app.post('/blog/:cat', auth.authorize, upload.single('image'), blogTemplate);

    /* == [ LOGIN PAGE ] == */
    var loginTemplate = require('./src/pages/login/index');
    app.get('/login', auth.verify, loginTemplate);
    app.post('/login', auth.verify, loginTemplate);

};
