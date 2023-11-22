const nodemailer = require('nodemailer');

const {USER_MAIL, PASSWORD} = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: USER_MAIL,
        pass: PASSWORD,
    },
});

transporter.verify().then(()=>{
    console.log("ready for sending emails");
});

module.exports = transporter;