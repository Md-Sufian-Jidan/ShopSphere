import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to the show");
});

export default app;
