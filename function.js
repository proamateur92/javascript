// Function
// - fundametal building block in the program
// - subprogram can be used multipe times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}
log('Hello @');
log(1234);

// 2. Prameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const kkasu = { name: 'kkasu'};
changeName(kkasu);
console.log(kkasu);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters(added in ES6)
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('draw', 'coding', 'bok');

let globalMessage = 'global variable'; // global variable
function printMessage(){
  let message = 'local variable'; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let chileMessage = 'hello child';
  }
//  console.log(chileMessage); // error 
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upfradeUser(user) {
  if(user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// function are treadted likt any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a funciton expression is created when the execution reaches it.
const print = function() { // anoymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  // print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
  console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!!');
const add = (a, b) => a + b;
console.log(add(1, 3));
const simpleMultiply = (a,b) => {
  //do something more
  return a * b;
}
console.log(simpleMultiply(2, 3));

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time!
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// const calculate = function (command, a, b) {
//   switch(command) {
//     case 'add': 
//       return a+b;
//     case 'substract':
//       return a-b;
//     case 'divide':
//       return a/b;
//     case 'multiply':
//       return a*b;
//     case 'remainder':
//       return a%b;
//     default:
//       return('check your input');
//   }
// }

const calculate = function (command, a, b) {
  switch(command) {
    case 'add': 
      return a+b;
    case 'substract':
      return a-b;
    case 'divide':
      return a/b;
    case 'multiply':
      return a*b;
    case 'remainder':
      return a%b;
    default:
      return('check your input');
  }
}

console.log(calculate('add', 1, 3));