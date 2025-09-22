import { NextFunction, Request, Response } from "express";
import { utility } from "../../utils/utility";
import { userService } from "./user.service";

// const Check

class UserControllers {
  // CREATE USER
  create = utility.CatchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await userService.create(req.body);

      utility.SendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User created success",
        data: result,
      });
    },
  );

  // GET ALL USERS
  getUsers = utility.CatchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await userService.getAllUser();
      utility.SendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrive all users successful",
        data: result,
      });
    },
  );
}

export const userControllers = new UserControllers();
