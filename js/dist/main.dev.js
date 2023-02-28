"use strict";

var attGora = document.getElementById('att_gora');
var laggTill = document.getElementById('lagg_till_btn');
var fardiga = document.getElementById('fardiga');
var felNamn = document.getElementById('fel_namn');

function addTask() {
  var task = document.getElementById('syssla').value.trim();

  if (task === '') {
    felNamn.innerText = 'Fyll i en syssla först.';
  } else {
    felNamn.innerText = '';
    var taskItem = createTaskItem(task);
    attGora.appendChild(taskItem);
    document.getElementById('syssla').value = '';
  }
}

function createTaskItem(task) {
  var taskItem = document.createElement("li");
  taskItem.classList.add("flex", "items-center", "justify-between", "py-2", "px-4", "my-2", "bg-white", "rounded", "shadow", "hover:shadow-lg");
  taskItem.innerHTML = "\n<input class=\"w-full text-gray-700 rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2\nfocus:ring-purple-600 focus:border-transparent\" type=\"text\" value=\"".concat(task, "\" readonly>\n<button class=\"ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"\nonclick=\"markTaskAsDone(this)\">Klar</button>\n");
  return taskItem;
}

function markTaskAsDone(element) {
  var taskItem = element.parentNode;
  taskItem.remove();
  fardiga.appendChild(taskItem);
}

laggTill.addEventListener("click", addTask);