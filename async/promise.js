'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('kkasu');
    // reject(new Error('no network'));
  }, 2000);   
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) 
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num-1), 1000);
  })
})
.then(num => console.log(num));

// 4. Errir Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('đ'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => 
      reject(new Error(`error! ${hen} => đĽ`)),1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => đł`),1000);
  });

  getHen()      // íę°ě§ ę˛°ęłź ę°ě ë°ěě¤ęł  ě ëŹíë ę˛˝ě°,
  .then(getEgg) // hen => getEgg(hen)ě ěë ííě˛ëź ěëľ ę°ëĽ
  .catch(error => {
    return 'đ­';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);