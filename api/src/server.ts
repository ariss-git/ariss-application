import express, { Request, Response } from "express";
import cors from "cors";
import mainRouter from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", mainRouter);

app.get("/api", (_req: Request, res: Response) => {
  res.json({ sucess: true, status: 200, message: "Server working fine" });
});

export default app;
