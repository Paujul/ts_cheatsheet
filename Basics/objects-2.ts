// Read only properties

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 2,
  username: "zain",
};

console.log(user.id);
// user.id = 123; // Error

// Intersection Types

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  color: "Red",
  radius: 10,
};

//
type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const anggoro: CatDog = {
  numLives: 9,
  breed: "Anggora",
  age: 2,
};
//
