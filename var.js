let count = 6;
console.log(count);
let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

const PI = 3.14;
const birthYear = 1990;
const companyName = "tech solutions";
console.log(PI);
console.log(birthYear);
console.log(companyName);
const Max_users = 1000;
console.log(Max_users);

// global scope of variables


let globalVar = "i am global";
function myFunction() {
    console.log(globalVar);
}
myFunction();
console.log(globalVar);

// scope example

let a = 1;  // Global scope
function outer() {
    let b = 2;  // Function scope (outer)
    console.log(a);  // Can access global
    console.log(b);  // Can access own scope

    function inner() {
        let c = 3;  // Function scope (inner)
        console.log(a);  // Can access global
        console.log(b);  // Can access parent scope
        console.log(c);  // Can access own scope
    }

    inner();
    // console.log(c);  // Error! Cannot access child scope
}
outer();

