'use strict'

// JavaScript is synchronous.
// Execute the code block in order afer hoisting.
// hoisting: var, function declaration 선언들이 자동으로 가장 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelday(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelday(() => console.log('async callback'),2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'kkasu' && password === 'dog') ||
        (id === 'coder' && password === 'code')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'kkasu') {
        onSuccess({ name: 'kkasu', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const pw = prompt('Enter your password');

userStorage.loginUser(
  id, 
  pw, 
  user => {
    userStorage.getRoles(
      userWithRole,
      alert(
        `name: ${userWithRole.name}, role: ${userWithRole.role}`
      ),
      error => {
        console.log(error);
      }
    )
  },
  error => {
    console.log(error);
  }
);