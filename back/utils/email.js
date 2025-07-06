// email.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config(); // ✅ Load here too just in case

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  port: 587,
  secure: false,
});

export function sendRecurringReminder({ to, subject, text }) {
  return transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    text,
  });
}
