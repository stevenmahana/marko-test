var flash = require('connect-flash')
    , auth = require('middleware/auth')
    , api = require('src/api/v1Api');

var template = require('./template.marko');

module.exports = function(req, res) {

    var message = req.flash('message');

    if (Object.keys(req.body).length !== 0) { // POST request with files

        processForm(req, res);

    } else {

        template.render({
            message: message.length > 0 ? message : null
        }, res);

    }


};

function processForm(req, res) {

    try {

        api.login(req, set_session);

        function set_session(err, data) {

            if(data) {  // store user data in session

                var sess = req.session;
                sess.user = {
                    'UUID': data.UUID,
                    'bio': data.bio,
                    'name': data.name,
                    'email': data.email,
                    'username': data.username,
                    'enabled': data.enabled,
                    'role': data.role,
                    'status': data.status,
                    'avatar': data.avatar,
                    'public_key': data.public_key,
                    'token': data.token,
                    'refresh_token': data.refresh_token
                };

                //console.log(data);

                sess.save(function(err) {  // save session
                    if (err) { // handle session save error
                        console.log(err);
                        req.flash('message', err);
                        res.redirect('/login');
                    }

                    res.redirect('/');
                })

            } else {  // no returned user data from api

                if (err) { // handle error
                    console.log(err);
                    req.flash('message', err);
                    res.redirect('/login');
                } else {
                    console.log('Login failed with no api error');
                    req.flash('message', 'Login failed');
                    res.redirect('/login');
                }
            }
        }

    } catch(e) {  // shiznet happened
        console.log('>>> ERROR: Parse Auth Response Error - ' + e);
        req.flash('message', e);
        res.redirect('/login');
    }

}
