import { Router } from "express";
import otpRouter from "./otp.routes";

const mainRouter = Router();

mainRouter.use("/otp", otpRouter);

export default mainRouter;
