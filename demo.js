console.log('start');
const p = new Promise((resolve, reject) => {
  resolve()
})
setTimeout(() => {
  console.log('timer')
}, 0);
p.then(() => {
  console.log('promise 1')
  setTimeout(() => {
    console.log('timer 2')
  }, 0)
  return new Promise((resolve) => {
    resolve()
  })
}).then(() => {
  console.log('promise 2')
})
console.log('end');