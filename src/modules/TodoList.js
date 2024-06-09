export default class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(project);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getTodo(index) {
    const todos = this.todos[index];
    if (todos === undefined) {
      throw new Error("Project not found.");
    }

    return project;
  }
}
