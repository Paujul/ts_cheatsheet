// Function with return types

const addNums = (x: number, y: number): number => {
  return x + y;
};

function addNum(x: number, y: number): number {
  return x + y;
}

const square = (num: number): number => {
  return num * num;
};

square(23);

const colors = ["red", "green", "blue"]; // Colors:string[]
colors.map((color) => {
  return color.toUpperCase();
});
// Infers the return type of the function to be a string

// Not supposed to return anything:

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never

const neverStop = (): never => {
  while (true) {
    console.log("Hello World");
  }
};

// Throws an exception

const giveErr = (msg: string) => {
  throw new Error(msg);
};
