import { NextFunction, Request, Response } from "express";
import { utility } from "../../utils/utility";
import { userService } from "./user.service";

// const Check

class UserControllers {
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
}

export const userControllers = new UserControllers();
