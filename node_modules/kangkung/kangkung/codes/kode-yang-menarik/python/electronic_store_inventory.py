class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def __str__(self):
        return f"Product: {self.name}, Price: ${self.price}, Quantity: {self.quantity}"

class Inventory:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def remove_product(self, product_name):
        for product in self.products:
            if product.name == product_name:
                self.products.remove(product)
                print(f"Product '{product_name}' removed from inventory.")
                return
        print(f"Product '{product_name}' not found in inventory.")

    def update_product_quantity(self, product_name, new_quantity):
        for product in self.products:
            if product.name == product_name:
                product.quantity = new_quantity
                print(f"Quantity of product '{product_name}' updated to {new_quantity}.")
                return
        print(f"Product '{product_name}' not found in inventory.")

    def search_product(self, product_name):
        for product in self.products:
            if product.name == product_name:
                print("Product found in inventory:")
                print(product)
                return
        print(f"Product '{product_name}' not found in inventory.")

    def display_inventory(self):
        if not self.products:
            print("Inventory is empty.")
        else:
            print("Current inventory:")
            for product in self.products:
                print(product)

def main():
    inventory = Inventory()

    while True:
        print("\n===== Electronic Store Inventory Management =====")
        print("1. Add Product")
        print("2. Remove Product")
        print("3. Update Product Quantity")
        print("4. Search Product")
        print("5. Display Inventory")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter product name: ")
            price = float(input("Enter product price: "))
            quantity = int(input("Enter product quantity: "))
            product = Product(name, price, quantity)
            inventory.add_product(product)
            print("Product added to inventory.")

        elif choice == "2":
            product_name = input("Enter the name of the product you want to remove: ")
            inventory.remove_product(product_name)

        elif choice == "3":
            product_name = input("Enter the name of the product you want to update: ")
            new_quantity = int(input("Enter the new quantity: "))
            inventory.update_product_quantity(product_name, new_quantity)

        elif choice == "4":
            product_name = input("Enter the name of the product you want to search: ")
            inventory.search_product(product_name)

        elif choice == "5":
            inventory.display_inventory()

        elif choice == "6":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
