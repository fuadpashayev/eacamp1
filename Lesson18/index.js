// Arraydeki ededlerin toplanmasi

const numbers = [5, 6, 7];

// let result = 0;

// for (let i = 0; i < numbers.length; i++) {
//   result += numbers[i];
// }
// console.log(result);

const sum = numbers.reduce((sum, number) => {
  return (sum += number);
}, 0); // ikinci arqument(baslangic deyer) verilmeyende 0-ci index baslangic deyer olur

// console.log(sum);

// .every() // boolean
// .some() // boolean

const names = ["Bayram", "Emil", "Mahir"];

const allContainsM = names.every((name) => name.toLowerCase().includes("m"));

const startsWithN = names.some((name) => name.startsWith("B"));

// console.log(allContainsM, names);

// Object methods

// Object.keys
// Object.values
// Object.entries

const data = {
  name: "Subhan",
  age: 23,
  gender: "male",
  origin: "Azerbaijan",
};

// const onlyName = Object.keys(data).reduce((newObject, key) => {
//   if (key === "name") {
//     newObject[key] = data[key];
//   }
//   return newObject;
// }, {});

const remainingKeys = ["name", "age"];
const newObject = {};

Object.keys(data).forEach((key) => {
  if (remainingKeys.includes(key)) {
    newObject[key] = data[key];
  }
});

// console.log({ data, newObject });

const arr = [1, 2, 3];
// Prototype

Array.prototype.remove = function (item) {
  return this.splice(this.indexOf(item), 1);
};

const remove = () => {};

Array.prototype.onlyEvenNumbers = function () {
  return this.filter((num) => num % 2 === 0);
};

arr.onlyEvenNumbers();

// arrow function -> context yoxdur! (this = context) yoxdur
Array.prototype.subhan = () => {
  console.log("salamlar", this);
};

// general function -> context var! (this = context) var

Array.prototype.subhan1 = function () {
  console.log("salamlar2", this);
};

const userData = {
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
  name: "Subhan",
  age: 23,
  userName: "subhan123",
  password: "12345",
};

Object.prototype.only = function (onlyKeys) {
  const result = {};
  onlyKeys.forEach((key) => {
    result[key] = this[key];
  });

  return result;
};

const sensitiveInfo = userData.only(["userName", "password"]);
console.log(sensitiveInfo);

// arr.subhan1()
