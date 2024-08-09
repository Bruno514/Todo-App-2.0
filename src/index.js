import "./style.css";

import TodoList from "./modules/TodoList.js";
import getTaskComponent from "./components/TaskComponent.js";

const todoList = new TodoList();
let selectedProject = "Default";

todoList.addProject("Default");

const projectSelectElement = document.querySelector("#select-projects");

function updateProjects() {
  projectSelectElement.innerHTML = "";

  const optionElement = document.createElement("option");
  optionElement.value = "All";
  optionElement.textContent = "All";
  projectSelectElement.appendChild(optionElement);

  todoList.getAllProjects().forEach((element) => {
    const optionElement = document.createElement("option");
    optionElement.value = element.name;
    optionElement.textContent = element.name;
    projectSelectElement.appendChild(optionElement);
  });
}

updateProjects();

function renderTasks() {
  let project = undefined;
  let tasks = undefined;

  if (selectedProject === "All") {
    tasks = todoList.getAllTasks();
  } else {
    project = todoList.getProject(selectedProject);
    tasks = project.getAllTasks();
  }
  const containerCompleted = document.querySelector(
    "#complete.tasks-container"
  );
  const containerNotCompleted = document.querySelector(
    "#not-complete.tasks-container"
  );
  containerCompleted.textContent = "";
  containerNotCompleted.textContent = "";

  tasks.forEach((task) => {
    const taskElement = getTaskComponent(task);
    if (selectedProject === "All") {
      const projectElement = document.createElement("p");
      projectElement.textContent = task.project;
      taskElement.appendChild(projectElement);
      projectElement.classList.add("task-project");
    }

    // Info event
    taskElement.addEventListener("click", (event) => {
      if (event.target === taskElement) {
        const infoModal = document.querySelector(".modal.info-task");
        const overlay = document.querySelector(".overlay");
        infoModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        infoModal.querySelector(".info-task-title").textContent = task.title;
        infoModal.querySelector(".info-task-description").textContent =
          task.description;
        infoModal.querySelector(".info-task-duedate").textContent =
          task.dueDate;
        infoModal.querySelector(".info-task-priority").textContent =
          task.priority;
        infoModal.querySelector(".info-task-project").textContent =
          task.project;
      }
    });

    const completeButton = taskElement.querySelector(".complete");
    const editButton = taskElement.querySelector(".edit");
    const deleteButton = taskElement.querySelector(".delete");

    if (task.completed) {
      containerCompleted.appendChild(taskElement);
    } else {
      containerNotCompleted.appendChild(taskElement);
    }

    completeButton.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    editButton.addEventListener("click", () => {
      const editTaskModal = document.querySelector(".modal.edit-task");

      const overlay = document.querySelector(".overlay");
      overlay.classList.toggle("hidden");

      editTaskModal.classList.toggle("hidden");
      editTaskModal.querySelector("#title").value = task.title;
      editTaskModal.querySelector("#description").value = task.description;
      editTaskModal.querySelector("#due-date").value = task.dueDate;
      editTaskModal.querySelector("#priority").value = task.priority;

      const saveButton = editTaskModal.querySelector("input[type='submit']");
      saveButton.addEventListener("click", () => {
        task.title = editTaskModal.querySelector("#title").value;
        task.description = editTaskModal.querySelector("#description").value;
        task.dueDate = editTaskModal.querySelector("#due-date").value;
        task.priority = editTaskModal.querySelector("#priority").value;
        editTaskModal.classList.add("hidden");
        overlay.classList.add("hidden");
        renderTasks();
      });
    });

    deleteButton.addEventListener("click", () => {
      let taskIndex = tasks.indexOf(task);

      if (selectedProject === "All") {
        project = todoList.getProject(task.project);
        const projectTasks = project.getAllTasks();
        taskIndex = projectTasks.indexOf(task);
      }

      project.removeTask(taskIndex);
      renderTasks();
    });
  });

  if (containerCompleted.hasChildNodes()) {
    const header = document.createElement("h1");
    header.textContent = "Completed";
    containerCompleted.prepend(header);
  }
  if (containerNotCompleted.hasChildNodes()) {
    const header = document.createElement("h1");
    header.textContent = "Not Completed";
    containerNotCompleted.prepend(header);
  }
}

function addEventListeners() {
  const addProjectModalOpen = document.querySelector("button.add-project");
  addProjectModalOpen.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");

    projectModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  const addProjectModalClose = document.querySelector(
    ".modal.add-project .btn-close"
  );
  addProjectModalClose.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");

    projectModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const addProjectModalSubmit = document.querySelector(
    ".modal.add-project input[type='submit']"
  );
  addProjectModalSubmit.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");
    const projectTitle = projectModal.querySelector("#project-title").value;
    selectedProject = projectTitle;

    const projectSelectOption = document.createElement("option");
    projectSelectOption.value = projectTitle;
    projectSelectOption.textContent = projectTitle;
    projectSelectElement.append(projectSelectOption);

    todoList.addProject(projectTitle);
    updateProjects();

    projectSelectElement.selectedIndex =
      projectSelectElement.childNodes.length - 1;

    selectedProject = projectSelectElement.value;

    // Activate add task button 
    const addTaskButton = document.querySelector("button.btn-add-task");
    addTaskButton.classList.remove("hidden");

    renderTasks();

    projectModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const addProjectModalDelete = document.querySelector("button.delete-project");
  addProjectModalDelete.addEventListener("click", () => {
    todoList.removeProject(selectedProject);
    updateProjects();

    projectSelectElement.selectedIndex =
      projectSelectElement.childNodes.length - 1;

    selectedProject = projectSelectElement.value;
    renderTasks();
  });

  document
    .querySelector("button.delete-project")
    .addEventListener("click", () => {
      todoList.removeProject(selectedProject);
    });

  // Add task modal button open
  const taskButtonOpen = document.querySelector(".btn-open");
  taskButtonOpen.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonClose = document.querySelector(".modal.add-task .btn-close");
  taskButtonClose.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const editTaskButtonClose = document.querySelector(
    ".modal.edit-task .btn-close"
  );
  editTaskButtonClose.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.edit-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.add("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonAdd = document.querySelector(
    ".add-task input[type='submit']"
  );
  taskButtonAdd.addEventListener("click", () => {
    let project = undefined;

    if (selectedProject === "All") {
      project = todoList.getAllProjects()[0];
    } else {
      project = todoList.getProject(selectedProject);
    }

    const title = document.querySelector(".modal.add-task #title").value;
    const description = document.querySelector(
      ".modal.add-task #description"
    ).value;
    const dueDate = document.querySelector(".modal.add-task #due-date").value;
    const priority = document.querySelector(".modal.add-task #priority").value;

    project.addTask(title, description, dueDate, priority);
    renderTasks();

    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskInfoClose = document.querySelector(".modal.info-task .btn-close");
  taskInfoClose.addEventListener("click", () => {
    const infoModal = document.querySelector(".modal.info-task");
    const overlay = document.querySelector(".overlay");

    infoModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const projectSelectElement = document.querySelector("#select-projects");
  projectSelectElement.addEventListener("change", (event) => {
    selectedProject = event.target.value;

    const addTaskButton = document.querySelector("button.btn-add-task");
    addTaskButton.classList.remove("hidden");
    if (selectedProject === "All") {
      addTaskButton.classList.add("hidden");
    }

    renderTasks();
  });
}

addEventListeners();
