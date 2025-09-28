import Koa from 'koa'
import router from '../router/index.js'

const app = new Koa()

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ ms }ms`)
})

app.use(router.routes()).use(router.allowedMethods())

// 必须导出 express 实例否则构建器不会将其识别为函数
export default app