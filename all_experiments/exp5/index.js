// let employee = [];

// function addEmployee() {
//     let emp = {
//         name: document.getElementById("name").value,
//         id: document.getElementById("id").value,
//         salary: Number(document.getElementById("salary").value),
//         dept: document.getElementById("dept").value
//     }
//     employee.push(emp);
//     alert("employee added successfully");
// }

let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(emp);
    alert("Employee Added!");
}

// Display All Employees
function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    for (let emp of employees) {
        output += `<p>${emp.name} | ${emp.id} | ₹${emp.salary} | ${emp.department}</p>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Filter Salary > 50000
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > ₹50,000</h3>";

    for (let emp of filtered) {
        output += `<p>${emp.name} | ₹${emp.salary}</p>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        `<h3>Total Salary: ₹${total}</h3>`;
}

// Average Salary
function averageSalary() {
    if (employees.length === 0) return;

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

// Count by Department
function countDepartments() {
    let dept = prompt("Enter department name:");

    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `<h3>Employees in ${dept}: ${count}</h3>`;
}