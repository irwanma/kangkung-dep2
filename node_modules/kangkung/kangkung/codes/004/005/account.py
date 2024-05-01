import random
import datetime

class Account:
    def __init__(self, account_number, holder_name, balance=0):
        self.account_number = account_number
        self.holder_name = holder_name
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append((datetime.datetime.now(), "Deposit", amount))
            print(f"Deposit of ${amount} successful. New balance: ${self.balance}")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.transactions.append((datetime.datetime.now(), "Withdrawal", -amount))
            print(f"Withdrawal of ${amount} successful. New balance: ${self.balance}")
        else:
            print("Insufficient funds.")

    def transfer(self, recipient, amount):
        if recipient.account_number != self.account_number and amount > 0 and amount <= self.balance:
            self.balance -= amount
            recipient.balance += amount
            self.transactions.append((datetime.datetime.now(), f"Transfer to {recipient.holder_name} ({recipient.account_number})", -amount))
            recipient.transactions.append((datetime.datetime.now(), f"Transfer from {self.holder_name} ({self.account_number})", amount))
            print(f"Transfer of ${amount} to {recipient.holder_name} successful. New balance: ${self.balance}")
        else:
            print("Invalid transfer.")

    def print_transactions(self):
        print(f"Transaction history for account {self.account_number} (Holder: {self.holder_name}):")
        for transaction in self.transactions:
            print(f" - Date: {transaction[0]}, Type: {transaction[1]}, Amount: ${transaction[2]}")

class Bank:
    def __init__(self):
        self.accounts = {}

    def create_account(self, holder_name, initial_balance=0):
        account_number = random.randint(10000000, 99999999)
        while account_number in self.accounts:
            account_number = random.randint(10000000, 99999999)
        account = Account(account_number, holder_name, initial_balance)
        self.accounts[account_number] = account
        print(f"Account created successfully. Account number: {account_number}")

    def get_account(self, account_number):
        return self.accounts.get(account_number)

    def print_accounts(self):
        print("List of all accounts:")
        for account_number, account in self.accounts.items():
            print(f"Account Number: {account_number}, Holder: {account.holder_name}, Balance: ${account.balance}")

def main():
    bank = Bank()

    while True:
        print("\n===== Bank Management System =====")
        print("1. Create Account")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Transfer")
        print("5. View Transaction History")
        print("6. View All Accounts")
        print("7. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            holder_name = input("Enter account holder name: ")
            initial_balance = float(input("Enter initial balance (optional): "))
            bank.create_account(holder_name, initial_balance)

        elif choice == "2":
            account_number = int(input("Enter account number: "))
            account = bank.get_account(account_number)
            if account:
                amount = float(input("Enter deposit amount: "))
                account.deposit(amount)
            else:
                print("Account not found.")

        elif choice == "3":
            account_number = int(input("Enter account number: "))
            account = bank.get_account(account_number)
            if account:
                amount = float(input("Enter withdrawal amount: "))
                account.withdraw(amount)
            else:
                print("Account not found.")

        elif choice == "4":
            sender_number = int(input("Enter sender account number: "))
            recipient_number = int(input("Enter recipient account number: "))
            sender = bank.get_account(sender_number)
            recipient = bank.get_account(recipient_number)
            if sender and recipient:
                amount = float(input("Enter transfer amount: "))
                sender.transfer(recipient, amount)
            else:
                print("One or both accounts not found.")

        elif choice == "5":
            account_number = int(input("Enter account number: "))
            account = bank.get_account(account_number)
            if account:
                account.print_transactions()
            else:
                print("Account not found.")

        elif choice == "6":
            bank.print_accounts()

        elif choice == "7":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
