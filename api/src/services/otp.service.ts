// src/services/otp.service.ts

import crypto from "crypto"; // Node.js crypto module for generating random OTP
import { config } from "../config/index.js"; // App config (email credentials, etc.)
import transporter from "../lib/email-transporter.js"; // Nodemailer transporter instance
import redisClient from "../lib/redis-client.js"; // Redis client instance

interface EmailOTP {
  email: string;
  otp: string;
}

const OTP_EXPIRATION = 300; // OTP expiry time in seconds (5 minutes)

// Generate a 6-digit OTP using Node's crypto
export const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// Send OTP to user via email using Nodemailer
export const sendOTPEmail = async (data: EmailOTP) => {
  const mailOptions = {
    from: config.emailUser, // Sender email
    to: data.email, // Recipient email
    subject: "Your OTP Code", // Email subject
    text: `Your OTP code is: ${data.otp}. It expires in 5 minutes.`, // Email body
  };

  await transporter.sendMail(mailOptions); // Send the email
};

// Store OTP in Redis with expiration time
export const storeOTP = async (email: string, otp: string) => {
  await redisClient.setEx(`otp:${email}`, OTP_EXPIRATION, otp);
};

// Verify OTP against stored value in Redis
export const verifyOTP = async (email: string, otp: string) => {
  const storedOTP = await redisClient.get(`otp:${email}`);
  if (!storedOTP || storedOTP !== otp) return false; // Invalid or expired OTP

  await redisClient.del(`otp:${email}`); // Delete OTP after successful verification
  return true; // OTP is valid
};
