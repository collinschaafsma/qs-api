import { BaseContext } from 'koa';

export default class MainController {

    public static async helloWorld(ctx: BaseContext) {
        ctx.body = { app: 'QS API' };
    }
}
