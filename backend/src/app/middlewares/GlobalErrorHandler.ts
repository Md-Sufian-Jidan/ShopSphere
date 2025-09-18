import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../interface/error.types";
import { handleDuplicateError } from "../helper/duplicate.error";
import { zodErrorHandler } from "../helper/zod.error";
import { handleCastError } from "../helper/cast.error";
import { validationError } from "../helper/validation.error";
import AppError from "../errorHelper/AppError";
import env from "../../config/env";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = `Something went wrong ${err.message}`;
  let errorSources: TErrorSources[] = [];

  // Duplicate Error
  if (err.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }

  // Zod Error
  else if (err.code === "ZodError") {
    const simplifiedError = zodErrorHandler(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }

  // Cast Error
  else if (err.code === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }

  // Validation Error
  else if (err.name === "ValidationError") {
    const simplifiedError = validationError(err);
    statusCode = simplifiedError.statusCode;
    errorSources = simplifiedError.errorSources as TErrorSources[];
    message = simplifiedError.message;
  }

  // App Error
  else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // JS Error
  else if (err instanceof Error) {
    statusCode = 500;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err: env.NODE_ENV === "development" ? err : null,
    stack: env.NODE_ENV === "development" ? err.stack : null,
  });
};
