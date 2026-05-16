// array = a variable like structure that can store more than one value 

let fruits = ["apple", "banana", "grapes", "mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
fruits.push("orange"); // add element at the end of the array
fruits.pop("banana");
fruits.unshift("orange"); // add element at the beginning of the array
fruits.shift("grapes"); // remove element from the beginning of the array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);