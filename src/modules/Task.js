export default class Task {
  constructor(title, description, dueDate, priority, project = undefined, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.project = project;
  }
}
