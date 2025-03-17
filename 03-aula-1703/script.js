document.addEventListener("DOMContentLoaded",()=>{
    loadTasks()
})

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa valida!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let item = document.createElement("li");
  item.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
  taskList.appendChild(item);
  saveTask();
  taskInput.value = "";
}

function toggleTask(element) {
  element.parentElement.classList.toggle("completed");
}

function deleteTask(element) {
  element.parentElement.remove();
  saveTask();
}

function saveTask() {
  let tasks = [];
  document.querySelectorAll("#taskList li span").forEach((element) => {
    tasks.push({
      task: element.innerText.trim(),
      status: element.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let taskList = document.getElementById("taskList");

  tasks.forEach((element) => {
    let item = document.createElement("li");
    item.innerHTML = `
          <span onclick="toggleTask(this)">${element.task}</span>
          <button class="delete-btn" onclick="deleteTask(this)">X</button>
          `;

    if (element.status) {
      item.classList.add("completed");
    }
    taskList.appendChild(item);
  });
}
