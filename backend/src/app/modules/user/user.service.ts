import { IAuthProvider, IUser } from "./user.interface";
import { UserModel } from "./user.model";

class UserService {
  // CREATE USER
  async create(payload: Partial<IUser>) {
    const authProvider: IAuthProvider = {
      provider: "credentials",
      providerId: payload.email as string,
    };

    payload.picture =
      payload.picture || "https://avatar.iran.liara.run/public/41";

    const user = await UserModel.create({ ...payload, auths: [authProvider] });

    return user;
  }

  // READ ALL USER

  async getAllUser() {
    const user = await UserModel.find();
    return user;
  }
}

export const userService = new UserService();
