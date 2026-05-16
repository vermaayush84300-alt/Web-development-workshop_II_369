// function is a section of reusable code that decleared code once but use when ever you want
// function is a block of code that performs a specific task and can be called multiple times in a program

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
// function with return value

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8