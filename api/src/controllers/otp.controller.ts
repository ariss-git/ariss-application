// src/api/controller/otp.controller.ts

import { Request, Response } from "express";
import {
  generateOTP,
  sendOTPEmail,
  storeOTP,
} from "../services/otp.service.js";
import { otpSchema } from "../validations/otp.validation.js";

// Controller to send OTP
export const sendOTPController = async (req: Request, res: Response) => {
  try {
    const data = otpSchema.parse(req.body);

    const otp = generateOTP();
    await storeOTP(data.email, otp);
    await sendOTPEmail(data);

    return res.status(200).json({
      success: true,
      message: [`OTP sent on email - ${data.email}`],
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
