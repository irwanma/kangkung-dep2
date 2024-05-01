class Task {
    constructor(name, dueDate, completed = false) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }

    toJSON() {
        return {
            name: this.name,
            dueDate: this.dueDate,
            completed: this.completed
        };
    }

    static fromJSON(json) {
        return new Task(json.name, json.dueDate, json.completed);
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
            this.tasks.forEach(task => console.log(task));
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('todoList', JSON.stringify(this.tasks.map(task => task.toJSON())));
        console.log('To-do list saved to local storage.');
    }

    loadFromLocalStorage() {
        const json = localStorage.getItem('todoList');
        if (json) {
            this.tasks = JSON.parse(json).map(taskJson => Task.fromJSON(taskJson));
            console.log('To-do list loaded from local storage.');
        } else {
            console.log('No saved to-do list found in local storage.');
        }
    }
}

function main() {
    const todoList = new ToDoList();

    // Load tasks from local storage
    todoList.loadFromLocalStorage();

    while (true) {
        console.log('\n===== To-Do List Menu =====');
        console.log('1. Add Task');
        console.log('2. Complete Task');
        console.log('3. View Tasks');
        console.log('4. Save to Local Storage');
        console.log('5. Exit');

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
                todoList.saveToLocalStorage();
                break;
            case '5':
                console.log('Exiting the program. Goodbye!');
                return;
            default:
                console.log('Invalid choice. Please enter a valid option.');
        }
    }
}

main();
