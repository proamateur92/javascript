// JSON:  JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const me = {
  name: 'kkasu',
  height: 168,
  weight: null,
  birthDate: new Date(),
  run: () => {
    console.log(`${this.name} run fast!`);
  },
};

json = JSON.stringify(me);
console.log(json);

json = JSON.stringify(me, ['name', 'height']);
console.log(json);

json = JSON.stringify(me, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'leebok' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(me);
let obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
me.run();
// obj.run(); -> Object를 JSON 타입으로 변환할 때 함수가 포함되지 않았으므로 
//              당연히 parsing할 때, 함수가 포함되어 있지 않다.

console.log(me.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // parsing된 birthData값은 string형태이다.
