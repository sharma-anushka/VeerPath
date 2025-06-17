const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL ||  "nayeli.hirthe27@ethereal.email",
    pass: process.env.NODEMAILER_PWD || "CDHtKGgBNKvj1TD1eS",
  },
});

const sender = {
  address: "nayeli.hirthe27@ethereal.email",
  name: "Nayeli Hirthe",
};

module.exports = {
  transporter,
  sender,
};
