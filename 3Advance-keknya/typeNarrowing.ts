// Biasanya dipake buat klo ada union trs mana yg mau dipilih.

function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guard

const el = document.querySelector(".idk");

if (el) {
  el; // Element
} else {
  el; // null
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else console.log("No word provided", word);
};

// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y;
  } else {
    x;
    y;
  }
}

// Type Narrowing with in Operator

interface Movie {
  title: string;
  duration: number;
}
interface TVShow {
  title: string;
  episodes: number;
  episodeDuration: number;
}

function getDuration(show: Movie | TVShow) {
  if ("episodes" in show) {
    show;
    return show.episodes * show.episodeDuration;
  }
  show.duration;
}

getDuration({ title: "Amadeus", episodes: 10, episodeDuration: 60 });
getDuration({ title: "Amadeus", duration: 60 });

// instanceof Operator

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    date;
    console.log(date.toISOString());
  } else {
    date;
    console.log(new Date(date).toISOString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity.username;
  } else entity.name;
}

// Tyoe Predicates (<type> is <type>)

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal.numLives;
    return "Meow";
  } else {
    animal;
    return "Woof";
  }
}

// Discriminated Unions

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}
interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "rooster":
      animal;
      return "kokok";
    case "cow":
      animal;
      return "moooo";
    case "pig":
      animal;
      return "ngok";
    default: // Gaboleh sampe sini kl bs, ini kl ada interface yg gk msk ke case. (Sheep)
      const _exhaustive: never = animal;
      return _exhaustive;
    // Exhaustiveness Checking
  }
}

const stevie: Rooster = {
  name: "Stevie",
  weight: 10,
  age: 2,
  kind: "rooster",
};
