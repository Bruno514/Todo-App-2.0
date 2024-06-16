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

  removeProject(index) {
    this.#projects.splice(index, 1);
  }

  getProject(index) {
    const project = this.#projects[index];
    if (project === undefined) {
      throw new Error("Project not found.");
    }

    return project;
  }

  getAllProjects() {
    return [...this.#projects];
  }
}
