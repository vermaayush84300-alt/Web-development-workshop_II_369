// type converstion = change the datstype of value to another datatype(like string , number ., boolean)

let age = window.prompt("how old are you?");
age += 1;
console.log(age);
age = Number(age);
age += 1;
console.log(age);

let x = "pizza";
let z = "pizza";
let y = "pizza";
x = Number(x);
z = Boolean(z);
y = String(y);
console.log(x, typeof x);
console.log(z, typeof z);
console.log(y, typeof y);

