class Student:
    def __init__(self, student_id, name, age, department):
        self.student_id = student_id
        self.name = name
        self.age = age
        self.department = department

    def __str__(self):
        return f"ID: {self.student_id}, Name: {self.name}, Age: {self.age}, Department: {self.department}"

class StudentManagementSystem:
    def __init__(self):
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def remove_student(self, student_id):
        for student in self.students:
            if student.student_id == student_id:
                self.students.remove(student)
                print(f"Student with ID {student_id} removed from the system.")
                return
        print(f"Student with ID {student_id} not found in the system.")

    def update_student_info(self, student_id, new_info):
        for student in self.students:
            if student.student_id == student_id:
                student.name = new_info.get('name', student.name)
                student.age = new_info.get('age', student.age)
                student.department = new_info.get('department', student.department)
                print(f"Information of student with ID {student_id} updated.")
                return
        print(f"Student with ID {student_id} not found in the system.")

    def search_student(self, student_id):
        for student in self.students:
            if student.student_id == student_id:
                print("Student found:")
                print(student)
                return
        print(f"Student with ID {student_id} not found in the system.")

    def display_students(self):
        if not self.students:
            print("No students in the system.")
        else:
            print("Students in the system:")
            for student in self.students:
                print(student)

def main():
    sms = StudentManagementSystem()

    while True:
        print("\n===== Student Management System =====")
        print("1. Add Student")
        print("2. Remove Student")
        print("3. Update Student Info")
        print("4. Search Student")
        print("5. Display Students")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            student_id = input("Enter student ID: ")
            name = input("Enter student name: ")
            age = int(input("Enter student age: "))
            department = input("Enter student department: ")
            student = Student(student_id, name, age, department)
            sms.add_student(student)
            print("Student added to the system.")

        elif choice == "2":
            student_id = input("Enter the ID of the student you want to remove: ")
            sms.remove_student(student_id)

        elif choice == "3":
            student_id = input("Enter the ID of the student you want to update: ")
            new_info = {}
            new_info['name'] = input("Enter new name (leave empty to keep current): ").strip()
            new_info['age'] = int(input("Enter new age (leave empty to keep current): ").strip() or -1)
            new_info['department'] = input("Enter new department (leave empty to keep current): ").strip()
            sms.update_student_info(student_id, new_info)

        elif choice == "4":
            student_id = input("Enter the ID of the student you want to search: ")
            sms.search_student(student_id)

        elif choice == "5":
            sms.display_students()

        elif choice == "6":
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

if __name__ == "__main__":
    main()
