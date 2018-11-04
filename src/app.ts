import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';

const app = new Koa();

import { router } from './routes';

app.use(helmet());
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
