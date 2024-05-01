class Book {
    constructor(isbn, title, author, price, quantity, category) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }

    toString() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Price: $${this.price}, Quantity: ${this.quantity}, Category: ${this.category}`;
    }
}

class Bookstore {
    constructor() {
        this.books = [];
        this.sales = [];
        this.categories = new Set();
    }

    addBook(book) {
        this.books.push(book);
        this.categories.add(book.category);
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

    showCategories() {
        console.log("Available Categories:");
        this.categories.forEach(category => console.log(category));
    }

    filterBooksByCategory(category) {
        const filteredBooks = this.books.filter(book => book.category === category);
        if (filteredBooks.length > 0) {
            console.log(`Books in Category "${category}":`);
            filteredBooks.forEach(book => console.log(book.toString()));
        } else {
            console.log(`No books found in Category "${category}".`);
        }
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
        console.log("6. Show Available Categories");
        console.log("7. Filter Books by Category");
        console.log("8. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const isbn = prompt("Enter ISBN: ");
                const title = prompt("Enter title: ");
                const author = prompt("Enter author: ");
                const price = parseFloat(prompt("Enter price: "));
                const quantity = parseInt(prompt("Enter quantity: "));
                const category = prompt("Enter category: ");
                const book = new Book(isbn, title, author, price, quantity, category);
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
                bookstore.showCategories();
                break;

            case '7':
                const categoryFilter = prompt("Enter category to filter books: ");
                bookstore.filterBooksByCategory(categoryFilter);
                break;

            case '8':
                console.log("Exiting the program. Goodbye!");
                return;

            default:
                console.log("Invalid choice. Please enter a valid option.");
        }
    }
}

main();
