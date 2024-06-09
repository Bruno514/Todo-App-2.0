export default class Task {
  constructor(uid, title, description, dueDate, priority) {
    this.uid = uid;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
