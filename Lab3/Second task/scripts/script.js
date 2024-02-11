"use strict";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value;
  input.value = "";
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  const taskText = document.createElement("span");
  taskText.textContent = text;
  li.appendChild(taskText);

  list.appendChild(li);

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/images/delete.png";
  deleteIcon.alt = "Delete";
  deleteIcon.width = 20;
  li.appendChild(deleteIcon);
});

list.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
      listItem.classList.add("checked");
    } else {
      listItem.classList.remove("checked");
    }
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
  }
});
