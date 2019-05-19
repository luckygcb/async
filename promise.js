// demo 1
const p = new Promise((resolve, reject) => {
  // reject('error')
  setTimeout(() => {
    resolve(1)
  }, 0)
})
p.then((value) => {
  console.log(value);
}, (e) => {
  console.log(e);
})
p.then((value) => {
  console.log(value);
}, (e) => {
  console.log(e);
})

// demo2
// 'use strict'
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
//   resolve(1)
// })
// p.then(() => {
//   return {
//     error: 'error',
//     then: function(resolveP, rejectP) {
//       rejectP(this.error);
//     }
//   }
// }).then((value) => {
//   console.log(value)
// }, (e) => {
//   console.log(e)
// })

// promise.all promise.race
// const promises = [2, 3, 5, 7, 11, 13];

// Promise.all(promises).then(function (posts) {
//   console.log(posts);
// }).catch(function(reason){
//   console.log(reason)
// });

// Promise.race(promises).then(function (posts) {
//   console.log(posts);
// }).catch(function(reason){
//   console.log(reason)
// });

// error
// let p = new Promise((resolve, reject) => {
//   foo();
//   resolve(42)
// })
// p.then(() => {
//   foo();
// }, () => {
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