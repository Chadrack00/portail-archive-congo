"use server"
import nodemailer from "nodemailer";
import { getResetPasswordEmailTemplate } from "@/components/mail/reset-password";
import { getVerificationEmailTemplate } from "@/components/mail/verfication-email";
type dataSendEmail = {
  to: string;
  subject: string;
  url: string;
  userName: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GOOGLE_EMAIL_USER,
    pass: process.env.GOOGLE_EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({ to, subject, url, userName }: dataSendEmail) =>
  transporter.sendMail({
    from: "Service client",
    to: to,
    subject: subject,
    html: getVerificationEmailTemplate(url, userName), // HTML body
  });

export const sendEmailResetPassword = async ({ to, subject, url, userName }: dataSendEmail) =>
  transporter.sendMail({
    from: "Service client",
    to: to,
    subject: subject,
    html: getResetPasswordEmailTemplate(url, userName), // HTML body
  });
