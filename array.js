'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index postion
const fruits = ['🍎', '🍓'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits[2]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let value of fruits) {
  console.log(value);
}

// c. forEach
fruits.forEach(function(fruit, index, arr) {
  console.log(fruits, index, arr);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍏','🍐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to gthe beginning
fruits.unshift('🍏','🍐');
console.log(fruits);

// shift: remove an item to gthe beginning
// fruits.shift();
// console.log(fruits);

// note! shift, unshift are too slower than pop, push
// splice: remove an item by index position
// fruits.splice(1);
// fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1,1,'🥭','🍍');
console.log(fruits);

// combine two arrays
const fruits2 = ['🫐','🍋'];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍋'));

// includes
console.log(fruits.includes('🍎'));
console.log(fruits.includes('🍋'));

// lastIndexOf
console.clear();
fruits.unshift('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

// Practice
console.clear();
const animals = ['🐵','🐶','🐺','🐱','🐰'];
console.log(animals.length);
// toString(): return representation of an array
console.log(animals.toString());

// toLocaleString(): convert to String
console.log(typeof animals.toLocaleString());

// pop(): removes the last element from an array and return it
const poped = animals.pop();
console.log(`length: ${animals.length}, poped: ${poped}`);

// push(): append new elements to the end of and array, and returns the new length of the array
const test1 = ['🐹','🐻‍❄️'];
const test2 = ['🐸'];
// const pushed = animals.push(test1);
// console.log(`animals: ${animals}, pushed: ${pushed}`);

const newAnimals = test1.concat(animals, test2);
console.log(newAnimals);

// join(): sparated by the specified separator string
const joined = newAnimals.join('');
console.log(joined);

// reverse(): reverses the elements in an array in place
console.log(newAnimals.reverse());

// shift(): removes the first element from an array and returns it
const shifted = newAnimals.shift();
console.log(shifted);

// slice(): Returns a copy of a section of an array
console.log(newAnimals);
const sliced = newAnimals.slice(-4);
console.log(sliced);

// sort(): sorts an array in place
const engArr = ['a','a','y','z'];
// const engArr = ['a','a','y','z','d','b','c','a'];
console.log(engArr.sort());

// splice(): removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log(newAnimals);
const spliced = newAnimals.splice(2,3,'🐯');
console.log(spliced);
console.log(newAnimals);

// unshift(): inserts new elements at the start of an array, and returns the new length of the array
console.log(newAnimals.unshift('🐭'));
console.log(newAnimals);

// indexOf, lastIndexOf
newAnimals[3] = '🐭';
newAnimals[5] = '🐭';
console.log(newAnimals);
console.log(newAnimals.indexOf('🐭'));
console.log(newAnimals.lastIndexOf('🐭'));

// every(): 모든 항목 검사
console.clear();
const result1 = [1,2,3].every((item) => item > 0);
console.log(`every(): ${result1}`);

// some(): 부분 항목 검사
const result2 = [3,2,1,-1].some((item) => item < 0);
console.log(`some(): ${result2}`);

// forEach()
animals.forEach((item) => console.log(item));

// map(): 연산
const result3 = [1,2,3,4].map((item) => item*2);
console.log(`map(): ${result3}`);

// filter(): 조건 찾기
const result4 = [1,2,3,4].filter((item) => item%2===0);
console.log(`filter(): ${result4}`);

// reduce(): 연산
const sum = [1,2,3].reduce((result, item) => result+item, 0);
console.log(`sum(): ${sum}`);

const best = ['t','s','e','b'].reduceRight((s, v) => s+v);
console.log(best);

// flat
const flatted = [[1,2,3],[4,5,6],[7,8,9]].flat(1);
console.log(flatted);

const flatted1 = [[1,2],[[[[[1]]]]]].flat(Infinity).reduce((s,v)=>s+v,0);
console.log(flatted1)

const stringArr = ['one','two','three'];
const numArr = [1,2,3];
const newArr = numArr.map((v, index) => [v, stringArr[index]]);
console.log(newArr);

// copyWithin
const cw = [0,1,2,3,4,5,6,7,8,9].copyWithin(-4, 1,3);
console.log(cw);

const cw1 = [0,1,2,3,4,5,6,7,8,9].copyWithin(2, 3,5);
console.log(cw1);