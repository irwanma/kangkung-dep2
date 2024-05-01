class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    toString() {
        const status = this.completed ? 'Completed' : 'Not Completed';
        return `Task: ${this.name}, Due Date: ${this.dueDate}, Status: ${status}`;
    }
}

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    completeTask(taskName) {
        const task = this.tasks.find(task => task.name === taskName);
        if (task) {
            task.complete();
            console.log(`Task '${taskName}' marked as completed.`);
        } else {
            console.log(`Task '${taskName}' not found in the to-do list.`);
        }
    }

    viewTasks() {
        if (this.tasks.length === 0) {
            console.log('No tasks in the to-do list.');
        } else {
            console.log('Tasks in the to-do list:');
            this.tasks.forEach(task => console.log(task.toString()));
        }
    }
}

function main() {
    const todoList = new ToDoList();

    while (true) {
        console.log('\n===== To-Do List Menu =====');
        console.log('1. Add Task');
        console.log('2. Complete Task');
        console.log('3. View Tasks');
        console.log('4. Exit');

        const choice = prompt('Enter your choice: ');

        switch (choice) {
            case '1':
                const name = prompt('Enter task name: ');
                const dueDate = prompt('Enter due date: ');
                const task = new Task(name, dueDate);
                todoList.addTask(task);
                console.log('Task added to the to-do list.');
                break;
            case '2':
                const taskName = prompt('Enter the name of the task you want to mark as completed: ');
                todoList.completeTask(taskName);
                break;
            case '3':
                todoList.viewTasks();
                break;
            case '4':
                console.log('Exiting the program. Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please enter a valid option.');
        }
    }
}

main();
