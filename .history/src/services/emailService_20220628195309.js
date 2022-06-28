const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

function sendMail({ from, to, subject, text, html}) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:false //if secure is false then the port will be 465 instead other one
    })
}

module.exports = sendMail;