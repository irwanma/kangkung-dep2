class Customer {
    constructor(id, name, email, phoneNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone Number: ${this.phoneNumber}`;
    }
}

class CustomerManagementSystem {
    constructor() {
        this.customers = [];
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    removeCustomer(customerId) {
        const index = this.customers.findIndex(customer => customer.id === customerId);
        if (index !== -1) {
            this.customers.splice(index, 1);
            console.log(`Customer with ID ${customerId} removed from the system.`);
        } else {
            console.log(`Customer with ID ${customerId} not found in the system.`);
        }
    }

    updateCustomerInfo(customerId, newInfo) {
        const customer = this.customers.find(customer => customer.id === customerId);
        if (customer) {
            Object.assign(customer, newInfo);
            console.log(`Information of customer with ID ${customerId} updated.`);
        } else {
            console.log(`Customer with ID ${customerId} not found in the system.`);
        }
    }

    searchCustomer(customerId) {
        const customer = this.customers.find(customer => customer.id === customerId);
        if (customer) {
            console.log("Customer found:");
            console.log(customer.toString());
        } else {
            console.log(`Customer with ID ${customerId} not found in the system.`);
        }
    }

    displayCustomers() {
        if (this.customers.length === 0) {
            console.log("No customers in the system.");
        } else {
            console.log("Customers in the system:");
            this.customers.forEach(customer => console.log(customer.toString()));
        }
    }
}

function main() {
    const cms = new CustomerManagementSystem();

    while (true) {
        console.log("\n===== Customer Management System =====");
        console.log("1. Add Customer");
        console.log("2. Remove Customer");
        console.log("3. Update Customer Info");
        console.log("4. Search Customer");
        console.log("5. Display Customers");
        console.log("6. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const id = prompt("Enter customer ID: ");
                const name = prompt("Enter customer name: ");
                const email = prompt("Enter customer email: ");
                const phoneNumber = prompt("Enter customer phone number: ");
                const customer = new Customer(id, name, email, phoneNumber);
                cms.addCustomer(customer);
                console.log("Customer added to the system.");
                break;
            case '2':
                const removeId = prompt("Enter the ID of the customer you want to remove: ");
                cms.removeCustomer(removeId);
                break;
            case '3':
                const updateId = prompt("Enter the ID of the customer you want to update: ");
                const newInfo = {};
                newInfo.name = prompt("Enter new name: ");
                newInfo.email = prompt("Enter new email: ");
                newInfo.phoneNumber = prompt("Enter new phone number: ");
                cms.updateCustomerInfo(updateId, newInfo);
                break;
            case '4':
                const searchId = prompt("Enter the ID of the customer you want to search: ");
                cms.searchCustomer(searchId);
                break;
            case '5':
                cms.displayCustomers();
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
