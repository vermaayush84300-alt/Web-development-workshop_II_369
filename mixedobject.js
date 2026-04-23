let mixedObject = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "newyork",
        country: "USA"
    },
    greet: function () {
        console.log("hello");
        //    arroww function
        let greetArrow = () => {
            console.log("hello from arrow function");
        }
    },
    "address.greet": function () {
        console.log("hello from address");
    }
};
console.log(mixedObject);
console.log(mixedObject.name);
console.log(mixedObject.age);
console.log(mixedObject.hobbies);
console.log(mixedObject.address);
console.log(mixedObject.address.street);
console.log(mixedObject.address.city);
console.log(mixedObject.address.country);
console.log(typeof mixedObject);
console.log(Array.isArray(mixedObject));
mixedObject.greet();
mixedObject["address.greet"]();

// array inside object

let people = [
    { name: "john", age: 30 },
    { name: "alice", age: 25 },
    { name: "bob", age: 35 }
];
console.log(people);
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[0].name);
console.log(people[1].age);
console.log(people[2].name);
console.log(people[2].age);

let company = {
    name: "Tech Solutions",
    employees: [
        { name: "John", position: "Software Engineer" },
    ]

}
console.log(company);
console.log(company.name);
console.log(company.employees);