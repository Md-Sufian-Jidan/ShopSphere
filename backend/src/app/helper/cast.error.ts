import mongoose from "mongoose";
import { TGenericsErrorResponse } from "../interface/error.types";

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericsErrorResponse => {
  return {
    statusCode: 400,
    message: `Invalid MongoDB objectId. Please Provide a valid id!`,
  };
};
