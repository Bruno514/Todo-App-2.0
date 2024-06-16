export default function getTaskComponent(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
    <p class="task-title">${task.title}</p>
    <p class="task-due-date">${task.dueDate}</p>
    <div class="container">
      <button class="edit">
        <span class="iconify" data-icon="cil:pencil"></span>
      </button>
      <button class="delete">
        <span class="iconify" data-icon="cil:delete"></span>
      </button>
    </div>
  `;

  return taskElement;
}
