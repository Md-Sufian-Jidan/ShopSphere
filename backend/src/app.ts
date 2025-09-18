import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";
import { NotFound } from "./app/middlewares/NotFound";
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import AppError from "./app/errorHelper/AppError";
import { globalErrorHandler } from "./app/middlewares/GlobalErrorHandler";


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute in ms
  max: 20,              // limit each IP to 2 requests per windowMs
  message: "Too many requests, please try again later."
});

app.use(limiter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to the show");
});


// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

// NO ROUTE MATCHES
app.use(NotFound);

export default app;
