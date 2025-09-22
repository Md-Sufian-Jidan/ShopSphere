import { IAuthProvider, IUser } from "./user.interface";
import { UserModel } from "./user.model";

class UserService {
  async create(payload: Partial<IUser>) {
    
    const authProvider: IAuthProvider = {
        provider: 'credentials',
        providerId: payload.email as string
    }


    const user = await UserModel.create({...payload, auths: [authProvider]});

    return user;
  }
}

export const userService = new UserService();
