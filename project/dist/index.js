"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const list = document.getElementById("todolist");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // console.log(input.value);
//   console.log("SUBMITTED!");
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const newLi = document.createElement("li");
    newLi.append(newTodo);
    list.append(newLi);
    console.log("SUBMITTED!");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", () => {
//   console.log(input.value);
// });
//  const mystery: unknown = "Hello World"
//  const numChars = (mystery as string).length
