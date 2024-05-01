import random
from datetime import datetime

class Book:
    def __init__(self, isbn, title, author, price, quantity):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.price = price
        self.quantity = quantity

    def __str__(self):
        return f"ISBN: {self.isbn}, Title: {self.title}, Author: {self.author}, Price: ${self.price}, Quantity: {self.quantity}"

class Bookstore:
    def __init__(self):
        self.books = []
        self.sales = []

    def add_book(self, book):
        self.books.append(book)

    def sell_book(self, isbn, quantity):
        book = next((book for book in self.books if book.isbn == isbn), None)
        if book and book.quantity >= quantity:
            book.quantity -= quantity
            self.sales.append((datetime.now(), book.title, quantity, book.price * quantity))
            print(f"{quantity} copies of '{book.title}' sold successfully.")
        else:
            print("Book not found or insufficient quantity.")

    def restock_book(self, isbn, quantity):
        book = next((book for book in self.books if book.isbn == isbn), None)
        if book:
            book.quantity += quantity
            print(f"{quantity} copies of '{book.title}' restocked successfully.")
        else:
            print("Book not found.")

    def show_inventory(self):
        print("Current Inventory:")
        for book in self.books:
            print(book)

    def show_sales_report(self):
        print("Sales Report:")
        total_revenue = 0
        for sale in self.sales:
            print(f"Date: {sale[0]}, Title: {sale[1]}, Quantity: {sale[2]}, Total Price: ${sale[3]}")
            total_revenue += sale[3]
        print(f"Total Revenue: ${total_revenue}")

def main():
    bookstore = Bookstore()

    while True:
        print("\n===== Bookstore Management System =====")
        print("1. Add Book to Inventory")
        print("2. Sell Book")
        print("3. Restock Book")
        print("4. Show Inventory")
        print("5. Show Sales Report")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            isbn = input("Enter ISBN: ")
            title = input("Enter title: ")
            author = input("Enter author: ")
            price = float(input("Enter price: "))
            quantity = int(input("Enter quantity: "))
            book = Book(isbn, title, author, price, quantity)
            bookstore.add_book(book)

        elif choice == "2":
            isbn = input("Enter ISBN of the book to sell: ")
            quantity = int(input("Enter quantity to sell: "))
            bookstore.sell_book(isbn, quantity)

        elif choice == "3":
            isbn = input("Enter ISBN of the book to restock: ")
            quantity = int(input("Enter quantity to restock: "))
            bookstore.restock_book(isbn, quantity)

        elif choice == "4":
            bookstore.show_inventory()

        elif choice == "5":
            bookstore.show_sales_report()

        elif choice == "6":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
