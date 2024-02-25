const nodemailer = require("nodemailer");
require("dotenv").config;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: "Mern App",
      to: emailData.email,
      subject: emailData.subject,
      html: emailData.html,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("-----SMTP ERROR1--------");
        console.log(error);
      } else {
        console.log("Message sent: %s", info.response);
      }
    });
  } catch (error) {
    console.error("something is wrong", error);
    throw error;
  }
};

module.exports = emailWithNodeMailer;
