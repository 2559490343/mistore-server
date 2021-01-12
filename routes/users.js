const router = require('koa-router')()
const User = require('../dbs/moduls/users')
router.prefix('/users')

router.get('/login', async (ctx, next) => {
  ctx.body = { a: 111 }
})

module.exports = router
