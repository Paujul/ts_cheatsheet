function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identitys(item: any): any {
//   return item;
// }

function identity<T>(item: T): T {
  return item;
}

identity<string>("Hello World");
identity<number>(123);
const idenb: boolean = identity(true);

// Inferred Generic Type

function getRandomElement<T>(list: T[]): T {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<boolean>([true, false, true]);
getRandomElement([1, 2, 3, "a"]);

// Multiple Generic Types

function merge<T, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "Anggoro" }, { icikiwir: ["awe", "awe"] });

// Generic Type Constraints

function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj2 = merge2({ name: "Anggoro" }, { icikiwir: ["awe", "awe"] });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(item: T) {
  return item.length * 2;
}

printDoubleLength("Hello World");
// printDoubleLength(123);

// Default Type Parameter

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const strings = makeEmptyArray();
// T = number ini defaultnya.

// Generic Class

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];

  add(e: T) {
    this.queue.push();
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

videos.add({ title: "a", creator: "b", resolution: "c" });

// Generic Class || BUKAN BAGIAN DARI COURSE

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
