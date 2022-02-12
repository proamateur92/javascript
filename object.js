// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all object in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const kkasu = { name: 'kkasu', age: 4}; // decide runtime
print(kkasu);

kkasu.hasJob = true;
console.log(kkasu.hasJob);

delete kkasu.hasJob;
console.log(kkasu.hasJob);

// 2. Computed properties
// key should be always string
console.log(kkasu.name);
console.log(kkasu['name']); // get value of key dinamically
kkasu['hasJob'] = true;
console.log(kkasu.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(kkasu, 'name');
printValue(kkasu, 'age');

// 3. Property value shortand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steave', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('kkasu',31);
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
  // this{}
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in kkasu);
console.log('age' in kkasu);
console.log('random' in kkasu);
console.log(kkasu.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in kkasu) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'kkasu', age: '13'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user3);
// const user4 = {};
// Object.assign(user4, user3);
console.log(user4);

const fruit1 = { color: 'blue', size: 'big'};
const fruit2 = { color: 'red'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
