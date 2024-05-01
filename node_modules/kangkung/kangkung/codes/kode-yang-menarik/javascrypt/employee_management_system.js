class Employee {
    constructor(id, name, position, department, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Position: ${this.position}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}

class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(employeeId) {
        const index = this.employees.findIndex(employee => employee.id === employeeId);
        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log(`Employee with ID ${employeeId} removed from the system.`);
        } else {
            console.log(`Employee with ID ${employeeId} not found in the system.`);
        }
    }

    updateEmployeeInfo(employeeId, newInfo) {
        const employee = this.employees.find(employee => employee.id === employeeId);
        if (employee) {
            Object.assign(employee, newInfo);
            console.log(`Information of employee with ID ${employeeId} updated.`);
        } else {
            console.log(`Employee with ID ${employeeId} not found in the system.`);
        }
    }

    searchEmployee(employeeId) {
        const employee = this.employees.find(employee => employee.id === employeeId);
        if (employee) {
            console.log("Employee found:");
            console.log(employee.toString());
        } else {
            console.log(`Employee with ID ${employeeId} not found in the system.`);
        }
    }

    displayEmployees() {
        if (this.employees.length === 0) {
            console.log("No employees in the system.");
        } else {
            console.log("Employees in the system:");
            this.employees.forEach(employee => console.log(employee.toString()));
        }
    }
}

function main() {
    const empSystem = new EmployeeManagementSystem();

    while (true) {
        console.log("\n===== Employee Management System =====");
        console.log("1. Add Employee");
        console.log("2. Remove Employee");
        console.log("3. Update Employee Info");
        console.log("4. Search Employee");
        console.log("5. Display Employees");
        console.log("6. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const id = prompt("Enter employee ID: ");
                const name = prompt("Enter employee name: ");
                const position = prompt("Enter employee position: ");
                const department = prompt("Enter employee department: ");
                const salary = parseFloat(prompt("Enter employee salary: "));
                const employee = new Employee(id, name, position, department, salary);
                empSystem.addEmployee(employee);
                console.log("Employee added to the system.");
                break;
            case '2':
                const removeId = prompt("Enter the ID of the employee you want to remove: ");
                empSystem.removeEmployee(removeId);
                break;
            case '3':
                const updateId = prompt("Enter the ID of the employee you want to update: ");
                const newInfo = {};
                newInfo.name = prompt("Enter new name: ");
                newInfo.position = prompt("Enter new position: ");
                newInfo.department = prompt("Enter new department: ");
                newInfo.salary = parseFloat(prompt("Enter new salary: "));
                empSystem.updateEmployeeInfo(updateId, newInfo);
                break;
            case '4':
                const searchId = prompt("Enter the ID of the employee you want to search: ");
                empSystem.searchEmployee(searchId);
                break;
            case '5':
                empSystem.displayEmployees();
                break;
            case '6':
                console.log("Exiting the program. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    }
}

main();
