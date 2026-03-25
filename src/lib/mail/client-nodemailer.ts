"use server";
import {
  getInvitationEmailTemplate,
  getPatientRappelEmailTemplate,
  getStatusChangeEmailTemplate,
} from "@/components/mail/cons-rdv";
import { getResetPasswordEmailTemplate } from "@/components/mail/reset-password";
import { getVerificationEmailTemplate } from "@/components/mail/verfication-email";
import nodemailer from "nodemailer";
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

export const sendEmail = async ({
  to,
  subject,
  url,
  userName,
}: dataSendEmail) =>
  transporter.sendMail({
    from: "Service client",
    to: to,
    subject: subject,
    html: getVerificationEmailTemplate(url, userName), // HTML body
  });

export const sendEmailResetPassword = async ({
  to,
  subject,
  url,
  userName,
}: dataSendEmail) =>
  transporter.sendMail({
    from: "Service client",
    to: to,
    subject: subject,
    html: getResetPasswordEmailTemplate(url, userName), // HTML body
  });

export const sendEmailRappelPatient = async ({
  to,
  subject,
  patientName,
  medecinName,
  date_rdv,
}: {
  to: string;
  subject: string;
  patientName: string;
  medecinName: string;
  date_rdv: Date;
}) =>
  transporter.sendMail({
    from: "Service client <noreply@portail-archive-congo.com>",
    to: to,
    subject: subject,
    html: getPatientRappelEmailTemplate(patientName, medecinName, date_rdv),
  });

export const sendEmailStatusChange = async ({
  to,
  patientName,
  medecinName,
  newStatus,
}: {
  to: string;
  patientName: string;
  medecinName: string;
  newStatus: string;
}) =>
  transporter.sendMail({
    from: "Service client <noreply@portail-archive-congo.com>",
    to: to,
    subject: "Mise à jour de votre rendez-vous",
    html: getStatusChangeEmailTemplate(patientName, medecinName, newStatus),
  });

export const sendEmailInvitation = async ({
  to,
  patientName,
  medecinName,
  message,
}: {
  to: string;
  patientName: string;
  medecinName: string;
  message: string;
}) =>
  transporter.sendMail({
    from: "Service client <noreply@portail-archive-congo.com>",
    to: to,
    subject: "Invitation à un rendez-vous",
    html: getInvitationEmailTemplate(patientName, medecinName, message),
  });
