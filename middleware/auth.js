var session = require('express-session');


/* ====== [ AUTHENTICATION UTILITY ] ====== */
module.exports = {

    authorize: function(req, res, next) {

        var sess = req.session;

        if (sess.user) {

            next();

        } else {

            res.redirect('/login');
        }
    },
    verify: function(req, res, next) {

        var sess = req.session;

        if (sess.user) {

            var back_url=req.header('Referer') || '/';
            res.redirect(back_url);

        } else {

            next()
        }     

    },
    user: function(req) {

        var sess = req.session;

        if (sess.user) {

            var user = {
                'bio': sess.user.bio,
                'role': sess.user.role,
                'status': sess.user.status,
                'enabled': sess.user.enabled,
                'name': sess.user.name,
                'email': sess.user.email,
                'username': sess.user.username,
                'avatar': sess.user.avatar,
                'background': sess.user.background,
                'profile': sess.user.profile
            };

            return user;

        } else {

            return null;
        }

    }

};
