const greet = (name: { first: string; last: string }): void => {
  console.log(`Hello, ${name.first} ${name.last}`);
  // return `Hello, ${name.first} ${name.last}`; KHUSUS ANY
};

greet({ first: "Elton", last: "John" });

//

let coordinate: { x: number; y: number } = { x: 10, y: 20 };
//  variable: type = value;

const randomCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() };
};

//

// Excess Property Checks
// greet({first: 'Mick', last: 'Jagger', age: 50})
const singer = { first: "Mick", last: "Jagger", age: 50 };
greet(singer);
// Kl mau bs di greet(), first last hrs ada.

//

// Type Alias

type Person = {
  name: string;
  age: number;
  z?: number; // optional
};

const zPerson: Person = {
  name: "Zain",
  age: 20,
  z: 10,
};

const sayHbd = (person: Person) => {
  console.log(
    `Happy birthday, ${person.name}! Congrats on turning ${person.age}`
  );
};

// Nested Type Object Alias

type Song = {
  title: string;
  artist: string;
  streams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const mySong: Song = {
  title: "The Way I Am",
  artist: "Ingrid Michaelson",
  streams: 1000000,
  credits: {
    producer: "Jack Antonoff",
    writer: "Ingrid Michaelson",
  },
};

// Using function
function calculatePayout(song: Song): number {
  return song.streams * 0.0033;
}

const earnings = calculatePayout(mySong);
console.log(earnings);
