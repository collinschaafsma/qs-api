import { Context } from 'koa';

export default class UserController {

    public static async getUsers(ctx: Context) {
        ctx.body = 'User index';
    }

    public static async getUser(ctx: Context) {
        ctx.body = ctx.params.id;
    }
}
