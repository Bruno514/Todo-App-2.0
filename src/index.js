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
      const taskTitle = taskElement;
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

  const taskButtonClose = document.querySelector(".btn-close");
  taskButtonClose.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonAdd = document.querySelector(
    ".add-task input[type='submit']"
  );
  taskButtonAdd.addEventListener("click", () => {
    const selectedProject = todoList.getProject(0);

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#priority").value;

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
