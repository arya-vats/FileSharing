const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

function sendMail({ from, to, subject, text, html}) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST
        port: process.env.SMTP_PORT
    })
}

module.exports = sendMail;