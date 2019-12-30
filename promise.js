// demo 1
const p = new Promise((resolve, reject) => {
  console.log('promise')
  resolve(1)
})
p.then(undefined, () => {

}).then((value) => {
  console.log('promise 1', value)
})
p.then((value) => {
  console.log('promise 2', value);
}, (e) => {
  console.log(e);
})

// demo2

// const p = new Promise((resolve, reject) => {
//   resolve(1)
// })
// global.name = '123'
// function foo(value) {
//   console.log(this.name, value);
// }
// p.then(foo)

// then方法返回
// const p = new Promise((resolve, reject) => {
//   resolve(1)
// })
// const p1 = new Promise((resolve, reject) => {
//   resolve('p1')
// })
// p.then((val) => {
//   console.log('promise 1', val);
//   return p1
// }).then((value) => {
//   console.log('resolve', value)
// }, (e) => {
//   console.log('error', e)
// })

// promise.all promise.race
//const promises = [ Promise.reject(2), 3, 5, 7, Promise.reject(11), 13];

// Promise.all(promises).then(function (posts) {
//   console.log(posts);
// }).catch(function(reason){
//   console.log(reason)
// });

// Promise.race(promises).then(function (posts) {
//   console.log('success', posts);
// }).catch(function(reason){
//   console.log('error', reason)
// });

// error
// let p = new Promise((resolve, reject) => {
//   foo();
//   resolve(42)
// })
// p.then(() => {
//   foo();
// }, (err) => {
//   console.log('err')
// })
// p.then((value) => console.log(value))

// Promise.resolve({
//   then: function(resolve, reject) {
//     resolve(41)
//   }
// }).then((value) => {
//   console.log(value)
// })