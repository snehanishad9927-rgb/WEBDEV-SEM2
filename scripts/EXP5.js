let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("ID").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("department").value;

    if (!name || !id || !salary || !dept) {
        alert("Fill all fields");
        return;
    }

    let emp = { name, id, salary, dept };
    employees.push(emp);
    alert("Employee Added!");
}
// Display All
function displayEmployee() {
    console.clear();
    console.log("All Employees:");
    employees.forEach(e => console.log(e));
}
// Salary > 50000
function filtersalary() {
    let result = employees.filter(e => e.salary > 50000);
    console.clear();
    console.log("Salary > 50000:");
    console.log(result);
}

// Total Salary
function totalsalary() {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    alert("Total Salary: " + total);
}

// Average Salary
function averagesalary() {
    if (employees.length === 0) return;

    let avg = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
    alert("Average Salary: " + avg);
}

// Sort by Department
function sortByDepartment() {
    employees.sort((a, b) => a.dept.localeCompare(b.dept));
    console.clear();
    console.log("Sorted by Department:");
    console.log(employees);
}