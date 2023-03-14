import axios from "axios";
import _ from "lodash"; // Install @types/lodash dulu biar jalan.
// Jgn lupa cari di typescriptlang.org di Types.

_.sample([1, 2, 3, 4, 5]);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then(({ data }) => {
//     // console.log(data.company);
//     printUser(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users/")
  .then(({ data }) => {
    // console.log(data.company);
    // printUser(data);
    data.forEach(printUser);
  })
  .catch((err) => {
    console.log(err);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
