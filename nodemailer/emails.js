const {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} = require("./email_templates.js");
const { transporter, sender } = require("./nodemailer.config.js");
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [email];

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Email sent successfully", response);
    console.log("Email Preview Link", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

const sendWelcomeEmail = async (email, name) => {
  const recipient = [email];

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      html: WELCOME_EMAIL_TEMPLATE.replace("{username}", name),
    });

    console.log("Welcome email sent successfully", response);
    console.log("Email Preview Link", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [email];

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
    console.log("Password reset email sent successfully", response);
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

const sendResetSuccessEmail = async (email) => {
  const recipient = [email];

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset email sent successfully", response);
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);

    throw new Error(`Error sending password reset success email: ${error}`);
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
};
