// const oddNumbers = [1, 3, 5];
// const evenNumbers = [2, 4];

// const numbers = [...oddNumbers, ...evenNumbers];
// const numbers1 = [1, 3, 5, 2, 4];

// console.log({ numbers, numbers1 });

// const privateData = { gender: `male`, origin: "AZ" };
// const publicData = { name: "Subhan", surname: "Muradli" };
// const userData = { ...privateData, ...publicData };

// console.log({ userData });

// function testFunction(a, b, c, d, e) {
//   console.log({ a, b, c, d, e });
// }

// const arguments = [1, 2, "a", false, "test"];

// testFunction(...arguments);

const data = [1, 2, 3, 4, 5];

// non mutator - yeni array qaytarir
const even = data.filter((item, index) => {
  return item % 2 === 0;
});

// void -> hecne return elemeyen method

const evenNums = [];
const oddNums = [];

const numsGreaterThan3 = [];

// arrayi donguye salmaq ucun , yeni array yaratmir, void(return yoxdur)
data.forEach((item, index) => {
  if (item % 2 === 0) {
    evenNums.push(item);
  } else {
    oddNums.push(item);
  }

  if (item > 3) {
    numsGreaterThan3.push(item);
  }
});

const apiResponseData = [
  {
    first_name: "Subhan",
    last_name: "Muradli",
    yasi: 23,
    universiteti: "LDU",
    middleName: "Subu",
  },
  {
    first_name: "Subhan",
    last_name: "Muradli",
    yasi: 23,
    universiteti: "LDU",
    middleName: "Subu",
  },
  {
    first_name: "Subhan",
    last_name: "Muradli",
    yasi: 23,
    universiteti: "LDU",
    middleName: "Subu",
  },
];

// arrayden istediyimiz cur yeni array yaratmaq
const ourData = apiResponseData.map((item, index) => {
  return {
    name: `${item.first_name} ${item.last_name}`,
    age: item.yasi,
    5: "test",
  };

  return [
    item.first_name,
    item.last_name,
    item.yasi,
    item.universiteti,
    item.middleName,
  ];

  return {
    firstName: item.first_name,
    lastName: item.last_name,
    age: item.yasi,
    university: item.universiteti,
    middleName: item.middleName,
  };
});

console.log(ourData);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log({ doubledNumbers });

// if(){

// }else if(){

// }else if(){

// }else if(){

// }else if(){

// }else if(){

// }else if(){

// }else if(){

// }else{

// }

const number = 4;

switch (number) {
  case 2:
    break;

  case 3:
    console.log("reqem 3dur");
    break;

  case 4:
    console.log("reqem 4dur");
    break;

  default:
    console.log("reqem 2, 3, 4 deyil");
    break;
}

console.log("-----------");

const nums = ["a", "b", "c"];

// for...in -> keyleri qaytarir (array ve object istifade elemek olar)
for (let i in nums) {
  // console.log(i);
}

// for...of -> valuelari qaytarir (sadece array istifade elemek olar)
for (let value of nums) {
  //   console.log(value);
}

const userData = {
  age: 15,
  name: "Subhan",
  surName: "Muradli",
};

for (let key in userData) {
  const value = userData[key];
  if (key === "age") {
    userData.isAgeAllowed = value >= 18;
  }
  console.log(value);
}

console.log("---------------");

// iife -> immediately invoked function expression (ozu ozunu derhal cagiran funksiyalar)
(() => {
  console.log("men ozumu cagiran funksiyayam");
})();

console.log("---------------");

// Math methods

const number1 = 1.598349834;
const number1_1 = number1.toFixed(2);
const number1_floor = Math.floor(number1); // asagi yuvarlaqlasdirir
const number1_round = Math.round(number1); // ortaya yuvarlaqlasdirir
const number1_ceil = Math.ceil(number1); // yuxariya

const number1_parseInt = parseInt(number1); // tam hissesini goturur
const number1_parseFloat = parseFloat(number1); // kesr hissesi ile birlikde goturur

const numss = [1, 5, 9, 10];

const maxNumber = Math.max(...numss);
const minNumber = Math.min(...numss);

const randomNumber = parseInt(Math.random() * 10 ** 6);
console.log(randomNumber);

console.log({
  number1_1,
  number1_floor,
  number1_round,
  number1_ceil,
  maxNumber,
  minNumber,
  randomNumber,
});
