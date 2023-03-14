// class Player {
//   readonly first: string;
//   readonly last: string;
//   public score: number;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.score = 0;
//   }
// }

// new Player("Anggoro", "Dwi");

//

// Parameter Properties Shorthand
// Ini fungsinya gausah nulis param didalem constructor, ud langsung jadi. Gk kek diatas.

// private = Cm bs didalem Class Constructor
// protected = Bisa jg di child class

class Player {
  // private score: number;

  constructor(
    public first: string,
    public last: string,
    // private _score: number = 0
    protected _score: number = 0
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
    // Biar bs akses _score.
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}

const anggoro: Player = new Player("Anggoro", "Dwi");
anggoro.fullName;

//
// Pake Protectednya score
class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999;
  }
}

//

// Pake Interface

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const speda = new Bike("red");
const jaket = new Jacket("Garut", "Ijo");

//

// Abstract Class

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  // ^ ini harus ada didalem child class yg extends Employee.

  greet(): string {
    return `Halo bang nama gw ${this.first} ${this.last}`;
  }
}

class Fulltime extends Employee {
  constructor(first: string, last: string, private gaji: number) {
    super(first, last);
  }
  // Sub-class harus punya getPay krn abstract.
  getPay(): number {
    return this.gaji;
  }
}

class PartTime extends Employee {
  constructor(
    first: string,
    last: string,
    private upah: number,
    private jamKerja: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.upah * this.jamKerja;
  }
}

const edi = new Fulltime("Edi", "Bangor", 120000);
edi.getPay();

const bangor = new PartTime("Edi", "Bangor", 50000, 40);
bangor.getPay();
