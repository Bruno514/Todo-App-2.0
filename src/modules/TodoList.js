import Project from "./Project";

export default class TodoList {
  #projects;

  constructor() {
    this.#projects = [];
  }

  addProject(name) {
    const project = new Project(name);
    this.#projects.push(project);
  }

  removeProject(name) {
    for (const index in this.#projects) {
      if (this.#projects[index].name === "name") {
        this.#projects.splice(index, 1);
      }
    }
  }

  getProject(name) {
    for (const index in this.#projects) {
      if (name === this.#projects[index].name) {
        return this.#projects[index];
      }
    }

    throw new Error("Project not found.");
  }

  getAllProjects() {
    return [...this.#projects];
  }

  getAllTasks() {
    let tasks = [];
    this.#projects.forEach((element) => {
      const projectTasks = element.getAllTasks();
      tasks = [...tasks, ...projectTasks];
    });

    return tasks;
  }
}
