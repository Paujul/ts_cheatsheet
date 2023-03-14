//

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 456 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  sayHi2?(): string;
}

const thomas: Person = {
  id: 123,
  first: "Thomas",
  last: "Anderson",
  sayHi: () => "Hello",
};
thomas.first = "Neo";

// ===================

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Running Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    return (this.price = newPrice);
  },
};

console.log(shoes.applyDiscount(0.1));

// ===================
// Inheritance

interface Cat {
  name: string;
  age: number;
}
// Boleh bikin 2x.
interface Cat {
  breed: string;
  meow: () => string;
}

const anggoro: Cat = {
  name: "Anggoro",
  age: 2,
  breed: "Anggora",
  meow: () => "Meow",
};

interface Oyen extends Cat {
  job: "maling" | "pencuri" | "pemburu";
}

const panjul: Oyen = {
  name: "Panjul",
  age: 2,
  breed: "Anggora",
  meow() {
    return "Meow";
  },
  job: "pencuri",
};

// ===================
// Multiple Inheritance

interface Persone {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Persone, Employee {
  role: string;
  languages: string[];
}

const toby: Engineer = {
  id: 123,
  name: "Toby",
  email: "awe@gmail.com",
  role: "Frontend",
  languages: ["JavaScript", "TypeScript"],
};
