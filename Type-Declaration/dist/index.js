"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then(({ data }) => {
//     // console.log(data.company);
//     printUser(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/")
    .then(({ data }) => {
    // console.log(data.company);
    // printUser(data);
    data.forEach(printUser);
})
    .catch((err) => {
    console.log(err);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
