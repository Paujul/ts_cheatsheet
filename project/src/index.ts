const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput") as HTMLInputElement;
console.log(btn);

btn.addEventListener("click", () => {
  console.log(input.value);
});

//  const mystery: unknown = "Hello World"

//  const numChars = (mystery as string).length
