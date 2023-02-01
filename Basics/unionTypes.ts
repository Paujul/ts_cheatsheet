// Union Types : type | type

type UserData = {
  id: number;
  username: string | number;
};

let lat: number | string = 23.5;
lat = "23.5";

type Points = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Points | Loc = {
  x: 23,
  y: 32,
};

coordinates = { lat: 23, long: 32 };

// Type Narrowing w/ Union Types, Union Types with Functions.

const printAge = (age: number | string): void => {
  console.log(`Your age is ${age}`);
};
printAge(23);
printAge("23");

//

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    // price.replace("$", "");
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

//

// Narrowing the Type

const isTeenager = (age: number | string) => {
  if (typeof age === "string") {
    // if age is string
    console.log(age.charAt(0) === 1);
  }
  if (typeof age === "number") {
    // if age is number
    console.log(age > 12 && age > 20);
  }
};
