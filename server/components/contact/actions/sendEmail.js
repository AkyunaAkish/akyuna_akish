require('dotenv').config();

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

module.exports = (emailConfig) => {
    return mailgun.messages().send({
        from: emailConfig.senderEmail,
        to: 'akyunaakish@gmail.com',
        subject: 'Message from Portfolio Website',
        text: emailConfig.text
    });
};