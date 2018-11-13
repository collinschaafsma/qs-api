import { BaseContext } from 'koa';

export default class RootController {

    public static async helloWorld(ctx: BaseContext) {
        ctx.body = { app: 'QS API' };
    }
}
