import * as bcrypt from 'bcryptjs';
import { IUser, User } from './user.model';

export default class UserService {
  public static async createUser(user: any) {
    const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    const newUser: IUser = new User({
      email: user.email,
      name: user.name,
      password: hash,
    });

    return await newUser.save();
  }

  public static async getUser(id: string) {
    return await User.findById(id);
  }

  public static async getUsers() {
    return await User.find();
  }
}
