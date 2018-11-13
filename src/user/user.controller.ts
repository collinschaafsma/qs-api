import { Context } from 'koa';
import { IUser, User } from './user.model';

export default class UserController {

    public static async getUsers(ctx: Context) {
        const users: IUser[] = await User.find();
        ctx.status = 200;
        ctx.body = users;
    }

    public static async getUser(ctx: Context) {
        ctx.body = ctx.params.id;
    }
}
