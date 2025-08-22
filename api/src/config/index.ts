import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  jwtkey: process.env.JWT_SECRET! || "ariss-jwt-secret-key",
  gstApiKey: process.env.GST_API_KEY,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASS,
  emailService: process.env.EMAIL_SERVICE,
  otpExpiry: process.env.OTP_EXPIRY,
  redisUsername: process.env.REDIS_USERNAME,
  redisPassword: process.env.REDIS_PASSWORD,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  razorpayKey: process.env.RAZORPAY_ID,
  razorpaySecret: process.env.RAZORPAY_SECRET,
};
