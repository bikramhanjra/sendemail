const nodemailer = require("nodemailer");

const sentmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "carli.williamson@ethereal.email",
        pass: "azCRRE42hTWkgHRFUm",
      },
    });

    const info = await transporter.sendMail({
      from: ' "Node js " <carli.williamson@ethereal.email>',
      to: "abc@gmail.com",
      subject: "email from backend",
      text: "This is email from node js for Testing Purpose",
      html: "<br>This is email from node js for Testing Purpose</br>",
    });

    console.log("Message sent:", info);
    res.status(200).json(info)
  } catch (error) {
    console.log("this is error", error);
  }
};

module.exports = sentmail;
