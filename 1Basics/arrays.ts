// Array = <type>[] = []

const activeUsers: string[] = ["zain", "mick", "jagger"];
const activeUser: Array<string> = ["zain", "mick", "jagger"];

activeUsers[1] = "asd";
// activeUsers[1] = 1; // Error

//

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 12, y: 32 });
coords.push({ x: 23, y: 3 });
coords.push({ x: 32, y: 2 });
// // coords[
//     { x: 12, y: 32 },
//     { x: 23, y: 3 },
//     { x: 32, y: 2 }
// ]

// 2-Dimensional Array

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
