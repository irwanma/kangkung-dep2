class Book {
    constructor(isbn, title, author, price, quantity) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
}

class Bookstore {
    constructor() {
        this.books = [];
        this.sales = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    sellBook(isbn, quantity) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && book.quantity >= quantity) {
            book.quantity -= quantity;
            const totalPrice = book.price * quantity;
            this.sales.push({ timestamp: new Date(), title: book.title, quantity, totalPrice });
            console.log(`${quantity} copies of '${book.title}' sold successfully.`);
        } else {
            console.log("Book not found or insufficient quantity.");
        }
    }

    restockBook(isbn, quantity) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            book.quantity += quantity;
            console.log(`${quantity} copies of '${book.title}' restocked successfully.`);
        } else {
            console.log("Book not found.");
        }
    }

    showInventory() {
        console.log("Current Inventory:");
        this.books.forEach(book => console.log(book.toString()));
    }

    showSalesReport() {
        console.log("Sales Report:");
        let totalRevenue = 0;
        this.sales.forEach(sale => {
            console.log(`Date: ${sale.timestamp}, Title: ${sale.title}, Quantity: ${sale.quantity}, Total Price: $${sale.totalPrice}`);
            totalRevenue += sale.totalPrice;
        });
        console.log(`Total Revenue: $${totalRevenue}`);
    }
}

const bookstore = new Bookstore();

function main() {
    while (true) {
        console.log("\n===== Bookstore Management System =====");
        console.log("1. Add Book to Inventory");
        console.log("2. Sell Book");
        console.log("3. Restock Book");
        console.log("4. Show Inventory");
        console.log("5. Show Sales Report");
        console.log("6. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const isbn = prompt("Enter ISBN: ");
                const title = prompt("Enter title: ");
                const author = prompt("Enter author: ");
                const price = parseFloat(prompt("Enter price: "));
                const quantity = parseInt(prompt("Enter quantity: "));
                const book = new Book(isbn, title, author, price, quantity);
                bookstore.addBook(book);
                break;

            case '2':
                const sellIsbn = prompt("Enter ISBN of the book to sell: ");
                const sellQuantity = parseInt(prompt("Enter quantity to sell: "));
                bookstore.sellBook(sellIsbn, sellQuantity);
                break;

            case '3':
                const restockIsbn = prompt("Enter ISBN of the book to restock: ");
                const restockQuantity = parseInt(prompt("Enter quantity to restock: "));
                bookstore.restockBook(restockIsbn, restockQuantity);
                break;

            case '4':
                bookstore.showInventory();
                break;

            case '5':
                bookstore.showSalesReport();
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
