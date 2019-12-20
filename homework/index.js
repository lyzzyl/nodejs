const KKB = require('./kkb')
const cache = require('./cache')
const app = new KKB()

// 需要打开localhost:3000才能开始请求数据（不知道为啥）
// 会打印两遍数据(不知道为啥)
for(let i = 0; i < 15; i++) {
  let value = Math.floor(Math.random() * 10 + 1)
  // console.log('value: ' + value)
  app.use(cache(`api/data/${value}`))
}
app.listen(3000, () => {
  console.log("监听窗口3000")
})