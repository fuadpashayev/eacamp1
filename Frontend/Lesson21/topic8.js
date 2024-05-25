// "use strict";

// x = 3.14;

// const data = {
//   aa: 1,
//   b: 2,
// };

// const { aa, b } = data;

// console.log(a, b);

const winners = ["A", "B", "C", "D", "E"];

const [firstPlace, secondPlace, thirdPlace, ...rest] = winners;

// console.log(firstPlace, secondPlace, thirdPlace, rest);

const data = {
  user: {
    name: "Subhan",
    surname: "Muradli",
    age: 23,
  },
  company: {
    name: "X MMC",
    position: "Developer",
  },
  settings: {
    colorMode: "dark",
    token: "abc123",
  },
  getName: () => {},
};

const {
  user: { name: userName, age, surname },
  company: { position, name: companyName },
  settings: { colorMode },
} = data;

console.log({ userName, age, surname, position, companyName, colorMode });

const a = 1;

// test();

// const promise1 = new Promise();
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/*
Promise states:

- pending
- fulfilled
- rejected

 */

class A {
  name = "Subhan";
  surname = "Muradli";
  copyFullName = "Royal Babayev";

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(newFullName) {
    this.copyFullName = newFullName;
  }
}

const instance = new A();

console.log({ fn1: instance.fullName, cfn: instance.copyFullName, instance });
instance.fullName = "Bayram Behbudov";
console.log({ fn2: instance.fullName, cfn: instance.copyFullName, instance });
