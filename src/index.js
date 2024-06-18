import "./style.css";

import TodoList from "./modules/TodoList.js";
import getTaskComponent from "./components/TaskComponent.js";

const todoList = new TodoList();
const selectedProject = 0;

todoList.addProject("Default");

function renderTasks() {
  const selectedProject = todoList.getProject(0);
  const tasks = selectedProject.getAllTasks();
  const tasksContainer = document.querySelector("#tasks-container");
  tasksContainer.textContent = "";

  tasks.forEach((task) => {
    const taskElement = getTaskComponent(task);
    const editButton = taskElement.querySelector(".edit");
    const deleteButton = taskElement.querySelector(".delete");

    tasksContainer.appendChild(taskElement);

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
      const taskIndex = tasks.indexOf(task);
      selectedProject.removeTask(taskIndex);
      renderTasks();
    });
  });
}

function addEventListeners() {
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
    const selectedProject = todoList.getProject(0);

    const title = document.querySelector(".modal.add-task #title").value;
    const description = document.querySelector(
      ".modal.add-task #description"
    ).value;
    const dueDate = document.querySelector(".modal.add-task #due-date").value;
    const priority = document.querySelector(".modal.add-task #priority").value;

    selectedProject.addTask(title, description, dueDate, priority);
    renderTasks();

    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

    // Debugging
    const tasks = selectedProject.getAllTasks();
    console.log(tasks);
  });
}

addEventListeners();
