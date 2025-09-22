import { NextFunction, Request, Response } from "express";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

interface TMeta {
  total: number;
}

interface TResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: TMeta;
}

class Utility {
  CatchAsync(fn: AsyncHandler) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }

  SendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data.statusCode).json({
      statusCode: data.statusCode,
      success: data.success,
      message: data.message,
      data: data.data,
      meta: data.meta,
    });
  };
}

export const utility = new Utility();
