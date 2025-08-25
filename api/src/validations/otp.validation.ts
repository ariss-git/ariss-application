import { z } from "zod";

export const otpSchema = z.object({
  email: z.string().email("Invalid Email address"),
  otp: z
    .string()
    .min(6, "6 Digit OTP is required")
    .max(6, "6 Digit OTP is required"),
});
