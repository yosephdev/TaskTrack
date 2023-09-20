const attGora = document.getElementById("att_gora");
const laggTill = document.getElementById("lagg_till_btn");
const fardiga = document.getElementById("fardiga");
const felNamn = document.getElementById("fel_namn");

function addTask() {
  const task = document.getElementById("syssla").value.trim();
  if (!task) {
    felNamn.innerText = "Please enter a task.";
    return;
  }

  const taskItem = createTaskItem(task);
  attGora.appendChild(taskItem);
  document.getElementById("syssla").value = "";
}

function createTaskItem(task) {
  const taskItem = document.createElement("li");
  taskItem.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "py-2",
    "px-4",
    "my-2",
    "bg-white",
    "rounded",
    "shadow",
    "hover:shadow-lg"
  );
  taskItem.innerHTML = `
    <input class="w-full text-gray-700 rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" value="${task}" readonly>
    <button class="ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="markTaskAsDone(this)">Done</button>
    <button class="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="editTask(this)">Edit</button>
    <button class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="deleteTask(this)">Delete</button>
  `;
  return taskItem;
}

function markTaskAsDone(element) {
  const taskItem = element.parentNode;
  taskItem.remove();
  fardiga.appendChild(taskItem);
}

function deleteTask(element) {
  const taskItem = element.parentNode;
  taskItem.remove();
}

function editTask(element) {
  const taskItem = element.parentNode;
  const taskInput = taskItem.querySelector("input");
  const taskText = taskInput.value;

  taskInput.removeAttribute("readonly");
  taskInput.focus();
  element.innerText = "Save";
  element.classList.remove("bg-green-500");
  element.classList.add("bg-blue-500");
  element.onclick = function() {
    saveTask(taskInput, taskText, element);
  };
}

function saveTask(taskInput, taskText, saveBtn) {
  const newTaskText = taskInput.value.trim();
  if (!newTaskText) {
    felNamn.innerText = "The task cannot be empty.";
    taskInput.value = taskText;
    return;
  }

  taskInput.setAttribute("readonly", "");
  taskInput.blur();
  taskInput.value = newTaskText;
  saveBtn.innerText = "Edit";
  saveBtn.classList.remove("bg-blue-500");
  saveBtn.classList.add("bg-green-500");
  saveBtn.onclick = function() {
    editTask(saveBtn);
  };
}

laggTill.addEventListener("click", addTask);
