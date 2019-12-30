// 返回值和错误处理
async function f() {
  try {
    const a = new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject(123)
      }, 2000)
      
    }).then(() => {})
  } catch (e) {
    console.log('err')
  }
  
  // console.log(a);
}

f()
// .then(v => console.log(v))
// .catch(e => console.log(e))