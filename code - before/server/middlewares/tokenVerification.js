const jwt = require('jsonwebtoken');
const status = require('../utilities/jssendStatus');

const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.clearCookie('token').clearCookie('name').clearCookie('email').redirect('/login');
        }

        jwt.verify(token, process.env.JWTSECRETKEY, (err, decode) => {
            if (err) {
                return res.clearCookie('token').clearCookie('name').clearCookie('email').redirect('/login');
            }
            next();
        });
    } catch (e) {
        res.status(404).json({
            status: status.ERROR,
            message: e.message || e,
        });
    }
};

module.exports = verifyToken;