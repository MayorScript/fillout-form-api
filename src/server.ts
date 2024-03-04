import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import config from "./config";

import formRoute from "./routes/formRoute";

dotenv.config(); // Load environment variables

const app: Application = express();

// Middleware
app.use(express.json()); // Parse application/json
app.use(express.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(cors(config.cors)); // Enable CORS requests

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Healthy!");
});
app.use("/", formRoute);

export default app;
