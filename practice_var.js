const productName = "Laptop";
const brand = "TechBrand";
let price = 999.99;
let inStock = true;
let quantity = 50;
console.log("Product: ", +productName);
console.log("Brand: " + brand);
console.log("Price: $" + price);
console.log("In Stock: " + inStock);
console.log("Quantity: " + quantity);
price = price - 100;
console.log("Sale Price: $" + price);
quantity = quantity - 5;
console.log("Remaining: " + quantity);


let score = 100;
console.log("Initial score: " + score);
score = 150;
console.log("Updated score: " + score);
const MAX_SCORE = 200;
console.log("Max score: " + MAX_SCORE);



const studentName = "Emma Davis";
const studentID = "STU12345";
let currentGrade = "A";
let attendancePercentage = 95;
const schoolName = "Tech Academy";
console.log("=== Student Information ===");
console.log("Name: " + studentName);
console.log("ID: " + studentID);
console.log("School: " + schoolName);
console.log("Current Grade: " + currentGrade);
console.log("Attendance: " + attendancePercentage + "%");
// Update after exam
console.log("\\n=== After Final Exam ===");
currentGrade = "A+";  // Grade improved
attendancePercentage = 98;  // Attendance improved
console.log("New Grade: " + currentGrade);
console.log("New Attendance: " + attendancePercentage + "%");