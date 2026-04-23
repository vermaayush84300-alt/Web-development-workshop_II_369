// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// console.log(typeof person);


// // array
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr);
// console.log(arr[0]);
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// let mixedArray = [1, "two", true, { name: "John" }, [1, 2, 3]];
// console.log(mixedArray);
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// console.log(typeof mixedArray);
// console.log(Array.isArray(mixedArray));
// console.log(mixedArray.length);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 10));


// let divide = function (a, b) {
//     return a / b;
// }
// console.log(divide(10, 2));

// // arrow function

// let multiply = (a, b) => a * b;
// console.log(multiply(5, 10));

// const greetUser = (name) => {
//     return `Hello, ${name}!`;
// }
// console.log(greetUser("Alice"));


// // map on array
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * 5);
// console.log(squaredNumbers);

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// reduce on array

let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((acc, num) => acc + num, 0);
console.log(total);

let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 78 }
];
let totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

let marks = students.map(student => student.score);
console.log(marks);

let names = students.map(student => student.name);
console.log(names);

let topstudent = students.reduce((top, student) => top.score > student.score ? top : student);
console.log(topstudent);

let totalMarks = students.reduce((acc, student) => acc + student.score, 0);
let averageMarks = totalMarks / students.length;
console.log(averageMarks);

// filter on array

let highScorers = students.filter(student => student.score >= 80);
console.log(highScorers);