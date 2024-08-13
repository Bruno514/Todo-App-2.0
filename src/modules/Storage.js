import TodoList from "./TodoList";

export function saveTasks(todoList) {
  localStorage.setItem("projects", JSON.stringify(todoList));
}

export function loadTasks() {
  const todoList = new TodoList();

  if (!localStorage.getItem("projects")) {
    todoList.addProject("Default");

    return todoList;
  }

  // Load projects JSON in LocalStorage
  const projectsInStorage = JSON.parse(localStorage.getItem("projects"));

  projectsInStorage.forEach((project) => {
    todoList.addProject(project.name);

    project.tasks.forEach((task) => {
      todoList
        .getProject(project.name)
        .addTask(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.project,
          task.completed
        );
    });
  });

  return todoList;
}
