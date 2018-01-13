'use strict';
const nodemailer = require('nodemailer');

let testSendMail = (smtpHost, cred) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: smtpHost,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: cred.user, // generated ethereal user
            pass: cred.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Netseer Reports Test" <report@netseer.com>', // sender address
        to: 'hsi.lee@inuvo.com', // list of receivers
        subject: 'Hello from ' + smtpHost + '✔', // Subject line
        text: 'Hello from ' + smtpHost, // plain text body
        html: '<b>Hello from ' + smtpHost + '</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
};

testSendMail('email-smtp.us-east-1.amazonaws.com', 
{   
    user: 'AKIAJ2ZR3V34SYIWJGIA', 
    pass: 'AiSHOC0lw9EHChtfU4zGc5MuCY5A6hNMRo3hMwQNldGc'
});
testSendMail('inuvo-com.mail.protection.outlook.com', {});
testSendMail('smtp1.kowabunga.net', {});