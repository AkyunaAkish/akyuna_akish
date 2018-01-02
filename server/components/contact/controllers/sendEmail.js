const sendEmail = require('../actions/sendEmail');

module.exports = (req, res) => {
    if(req.body && Object.keys(req.body).length > 0) {
        sendEmail(req.body)
            .then((emailRes) => {
                res.json({ success: emailRes });
            })
            .catch((emailErr) => {
                res.json({ err: JSON.stringify(emailErr) });
            });
    } else {
        res.json({ err: 'Email config object not included in request body.' });
    }
};