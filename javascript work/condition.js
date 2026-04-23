let age = 18;
if (age <= 18) {
    console.log("You are a not elegible to vote");
}
else {
    console.log("You are elegible to vote");
}       
 

let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log("num1 is greater than num2");
}
else if (num1 < num2) {
    console.log("num1 is less than num2");
}
else {
    console.log("num1 is equal to num2");
}

let num3 = 30;
if (num3 > 0) {
    console.log("num3 is a positive number");   

}
else if (num3 < 0) {
    console.log("num3 is a negative number");
}
else {
    console.log("num3 is zero");
}


let light = "red";
if (light === "red") {
    console.log("Stop");
}
else if (light === "yellow") {
    console.log("Get ready");
}
else if (light === "green") {
    console.log("Go");
}
else {
    console.log("Invalid traffic light color");
}


let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid day");
}