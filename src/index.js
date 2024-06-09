import "./style.css";

import Task from "./modules/Task.js";
import TodoList from "./modules/TodoList.js";

function addEventListeners() {
  // Add task modal button open
  const taskButtonOpen = document.querySelector(".btn-open");
  taskButtonOpen.addEventListener("click", (event) => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonClose = document.querySelector(".btn-close");
  console.log(taskButtonClose)
  taskButtonClose.addEventListener("click", (event) => {
    console.log(1)
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
}

addEventListeners();
