"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
const todosJSON = localStorage.getItem("todos");
JSON.parse(todosJSON);
localStorage.getItem("todos") && console.log(JSON.parse(todosJSON));
console.log(todosJSON);
//
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
    // return todosJSON ? JSON.parse(todosJSON) : [];
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    console.log("Submitted");
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = !todo.completed;
        saveTodos();
    });
    newLi.append(checkbox, todo.text);
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
