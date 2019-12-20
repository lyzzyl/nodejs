let cache = {}
module.exports = (key) => {
  return async (ctx, next) => {
    if(cache[key]) {
      console.log(`数据${key}已经缓存`)
    } else {
      cache[key] = true
      console.log(`数据${key}尚未被缓存`)
    }
    next()
  }
}

setInterval(function(){
  const hours = new Date().getHours()
  const min = new Date().getMinutes()
  const sec = new Date().getSeconds()
  if(hours=='0' && min=='0' && sec=='0'){
    cache = {}
  }
}, 1000)