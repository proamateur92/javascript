// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'kkasu' && password === 'dog') ||
          (id === 'coder' && password === 'code')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'kkasu') {
          resolve({ name: 'kkasu', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const pw = prompt('Enter your password');

userStorage.loginUser(id, pw)
.then(userStorage.getRoles) // = (user => userStorage.getRoles(user))
.then(user => alert(`Hello! ${user.name}, you have a ${user.role} role`))
.catch(console.log);