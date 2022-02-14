// async & await
// clear style of using promise

// 1. async
async function fetchUser() { // promise가 형태로 반환
  // do network request in 10 secs...
  return ('kkasu');
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getLemon() {
  await delay(1000);
  return '🍋';
}

// function getLemon() {
//   return delay(3000)
//   .then(() => '🍋');
// }

async function pickFruits() {
  const applePromise = getApple();
  const lemonPromise = getLemon();
  const apple = await applePromise;
  const lemon = await lemonPromise;
  return `${apple} + ${lemon}`;
}

// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getLemon()
//     .then(lemon => `${apple} + ${lemon}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Prmise APIs
function pickAllFruits() { // 병렬처리
  return Promise.all([getApple(), getLemon()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() { // 병렬처리하여 가장 빨리 처리되는 프로미스 함수 반환
  return Promise.race([getApple(), getLemon()]);
}

pickOnlyOne().then(console.log);

// HomeWork

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

  async getUserWithRole(id, pw) {
    const id_ = await this.loginUser(id, pw);
    const role = await this.getRoles(id_);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const pw = prompt('Enter your password');

userStorage.getUserWithRole(id, pw)
.then(console.log)
.catch(console.log);