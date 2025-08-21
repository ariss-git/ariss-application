import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (_req: Request, res: Response) => {
  res.json({ sucess: true, status: 200, message: "Server working fine" });
});

export default app;
