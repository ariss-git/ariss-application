import express, { Request, Response } from "express";

const app = express();

app.get("/api", (_req: Request, res: Response) => {
  res.json({ sucess: true, status: 200, message: "Server working fine" });
});

export default app;
