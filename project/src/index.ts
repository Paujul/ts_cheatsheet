const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.getElementById("todoform") as HTMLFormElement;
const list = document.getElementById("todolist") as HTMLUListElement;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // console.log(input.value);
//   console.log("SUBMITTED!");
// });

function handleSubmit(e: SubmitEvent) {
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
