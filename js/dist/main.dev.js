"use strict";

var attGora = document.getElementById("att_gora");
var laggTill = document.getElementById("lagg_till_btn");
var fardiga = document.getElementById("fardiga");
var felNamn = document.getElementById("fel_namn");

function addTask() {
  var task = document.getElementById("syssla").value.trim();

  if (task === "") {
    felNamn.innerText = "Fill your task first";
  } else {
    felNamn.innerText = "";
    var taskItem = createTaskItem(task);
    attGora.appendChild(taskItem);
    document.getElementById("syssla").value = "";
  }
}

function createTaskItem(task) {
  var taskItem = document.createElement("li");
  taskItem.classList.add("flex", "items-center", "justify-between", "py-2", "px-4", "my-2", "bg-white", "rounded", "shadow", "hover:shadow-lg");
  taskItem.innerHTML = "\n    <input class=\"w-full text-gray-700 rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2\n    focus:ring-purple-600 focus:border-transparent\" type=\"text\" value=\"".concat(task, "\" readonly>\n    <button class=\"ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"\n    onclick=\"markTaskAsDone(this)\">Done</button>\n    <button class=\"ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"\n    onclick=\"editTask(this)\">Edit</button>\n     <button class=\"ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"\n    onclick=\"deleteTask(this)\">Delete</button>\n  ");
  return taskItem;
}

function markTaskAsDone(element) {
  var taskItem = element.parentNode;
  taskItem.remove();
  fardiga.appendChild(taskItem);
}

function deleteTask(element) {
  var taskItem = element.parentNode;
  taskItem.remove();
}

function editTask(element) {
  var taskItem = element.parentNode;
  var taskInput = taskItem.querySelector("input");
  var taskText = taskInput.value;
  taskInput.removeAttribute("readonly");
  taskInput.focus();
  element.innerText = "Save";
  element.classList.remove("bg-green-500");
  element.classList.add("bg-blue-500");

  element.onclick = function () {
    saveTask(taskInput, taskText, element);
  };
}

function saveTask(taskInput, taskText, saveBtn) {
  var newTaskText = taskInput.value.trim();

  if (newTaskText === "") {
    felNamn.innerText = "The task cannot be empty.";
    taskInput.value = taskText;
  } else {
    felNamn.innerText = "";
    taskInput.setAttribute("readonly", "");
    taskInput.blur();
    taskInput.value = newTaskText;
    saveBtn.innerText = "Edit";
    saveBtn.classList.remove("bg-blue-500");
    saveBtn.classList.add("bg-green-500");

    saveBtn.onclick = function () {
      editTask(saveBtn);
    };
  }
}

laggTill.addEventListener("click", addTask);