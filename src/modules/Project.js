import Task from "../modules/Task.js";

export default class Project {
  #tasks;

  constructor(name) {
    this.name = name;
    this.#tasks = [];
  }

  addTask(
    title,
    description,
    dueDate,
    priority,
    project = undefined,
    completed = false
  ) {
    const task = new Task(title, description, dueDate, priority, project);
    task.project = this.name;
    this.#tasks.push(task);
  }

  removeTask(index) {
    return this.#tasks.splice(index, 1);
  }

  getAllTasks() {
    return [...this.#tasks];
  }

  setTaskCompleted(index) {
    this.#tasks[index].completed = true;
  }
}
