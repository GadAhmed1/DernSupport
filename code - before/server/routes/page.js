const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/tokenVerification');
const ThePages = ['home', 'exercise', 'nutrition', 'devices', 'sublimnts', 'login', 'register'];

ThePages.forEach((page) => {
    if (page === 'login' || page === 'home') {
        router.get(`/${page}`, (req, res) => {
            try {
                return res.render(`pages/${page}`);
            } catch (e) {
                return res.json({ "ERR": "ERR IN Rendering" });
            }
        });
    } else if (page === 'register') {
        router.get(`/register`, (req, res) => {
            try {
                return res.render(`pages/${page}`, {
                    name: req.body.name || '',
                    email: req.body.email || '',
                    errorMessage: "الرجاء ملء جميع الحقول"
                });
            } catch (e) {
                return res.json({ "ERR": "ERR IN Rendering" });
            }
        });
    } else {
        router.get(`/${page}`, verifyToken, (req, res) => {
            try {
                return res.render(`pages/${page}`);
            } catch (e) {
                return res.json({ "ERR": "ERR IN Rendering" });
            }
        });
    }
});

module.exports = router;
