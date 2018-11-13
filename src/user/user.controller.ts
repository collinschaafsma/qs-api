import { Context } from 'koa';
import { IUser, User } from './user.model';
import { default as userService } from './user.service';

export default class UserController {

    public static async getUsers(ctx: Context) {
        const users: IUser[] = await User.find();
        ctx.status = 200;
        ctx.body = users;
    }

    public static async getUser(ctx: Context) {
        ctx.body = ctx.params.id;
    }

    public static async createUser(ctx: Context) {
        try {
            const user = await userService.create(ctx.request.body);
            ctx.status = 201;
            ctx.body = user;
        } catch (error) {
            ctx.status = 400;
            ctx.body = error;
        }
    }
}
