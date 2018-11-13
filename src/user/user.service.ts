import * as bcrypt from 'bcryptjs';
import { IUser, User } from './user.model';

export default class UserService {
    public static async create(user: any) {
        // TODO: Break out user from body
        const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        user.password = hash;
        user.save();
    }
}
