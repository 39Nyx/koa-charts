import Router from '@koa/router';
import helloRouter from '../router/hello.js'

const router = new Router();

router.use('/hello', helloRouter.routes(), helloRouter.allowedMethods())

export default router;