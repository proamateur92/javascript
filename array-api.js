// Quiz time about Arrays function
// Q1. make a string out of an array
console.clear();
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(','); 
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);  
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2)); // return copy of a section of an array
  array.splice(0,2); // remove source array
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
  new Student('F', 40, false, 90),
];

// Q5. find a student with the score 90
console.clear();
{
  // const finded = students.find(function (student, index, arr) {
  //   if(student.score === 90) return student;
  // });
  const finded = students.find((student, index, arr) => 
    student.score === 90
  );
  console.log(finded);
  const student90 = students.filter((v) => v.score === 90);
  console.log(student90);
}

// Q6. make an array of enrolled students
{
  const studentEnrolled = students.filter((student) => student.enrolled);
  console.log(studentEnrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log(students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.some((student) => student.score < 50));
}

// Q9. compute students' average score
{
  console.log((students.reduce((s, student) => s + student.score, 0))/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(students.map((student) => student.score).join());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.log(students.map((student) => student.score).sort((a, b) => a - b).join());
}