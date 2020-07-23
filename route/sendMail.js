const express = require('express')
const nodemailer = require("nodemailer");

const sendMail = express.Router();

sendMail.post("/", async (req, res) => {
    const { message, emailFrom, subject, emailTo, html } = req.body;
    const transport = {
      service: "gmail",
      auth: {
        user: "doudou6500@gmail.com",
        pass: "Nutella65!",
      },
    };
  
    const emailOption = {
      from: emailFrom,
      to: emailTo,
      subject: subject,
      text: message,
      html,
    };
  
    try {
      const smtpTransport = nodemailer.createTransport(transport);
      await smtpTransport.verify((error, success) => {
        if (success) {
          console.log("Server is ready to take our messages");
        } else {
          console.log(error);
        }
      });
      await smtpTransport.sendMail(emailOption, (err, data) => {
        if (data) {
          res.status(201).send("email Send");
        } else {
          throw new Error(err)
        }
      });
      res.status(201).send("email Send");
    } catch (error) {
      res.status(422).json(error);
    }
  });
  
  module.exports = sendMail;