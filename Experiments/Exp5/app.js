let employee = [];

function addemployee() {
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    }
    employee.push(emp);
    alert("employee added successfully");
}

// function displayemployee() {
//     let table = document.getElementById("employeeTable");
//     table.innerHTML = "<tr><th>Name</th><th>ID</th><th>Salary</th><th>Department</th></tr>";
//     for (let i = 0; i < employee.length; i++) {
//         table.innerHTML += "<tr><td>" + employee[i].name + "</td><td>" + employee[i].id + "</td><td>" + employee[i].salary + "</td><td>" + employee[i].dept + "</td></tr>";
//     }
// }
