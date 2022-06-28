const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

function sendMail({ from, to, subject, text, html}) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:false, //if secure is false then the port will be 465 instead other one
        auth:{
            user: process.env.MAIL_USER,
            pass : process.env.MAIL_PASSWORD
        }
    })
    let info = await transporter.sendMail({
        from:from, //left is key and right is value.
        to : to,
        subject: subject,
        text:text,
        html:html
    })

    
}

module.exports = sendMail;