/*
.slice() // sadece goturur
.splice() // elave olaraq mutate edir
*/

var string = "salam";
var chars = string.split("");
var againString = chars.join(", ");

var age = 23;
var name = "Subhan";

var userData1 = { age, name };

// deyisenin array olub olmadigini yoxlayir
Array.isArray(chars); // true

// console.log({ userData1, age, name, againString, chars });

/*
var
let
const
*/

// Global deyisken
var a = 1; // yaratmaq & menimsetmek
var a = 2; // redefine & reassign
a = 5; // reassign

// Scope deyisken
let b = 1; // define & assign
// let b = 2; // redefine X olmaz
b = 3; // reassign olar

const c = 1; // define & assign -> immutable
// const c = 2; // X OLMAZ
// c = 3; // X OLMAZ
// Scope deyisken End

const userData = {
  age: 23,
  name: "Subhan",
  "47 nomreli mekteb": "ssdssd.sd.s.d.wsd.f.sd.f",

  // origin: 'Azerbaijan'
  // key: 'school'
  // value: '....'
};

userData.origin = "Azerbaijan";
userData.age = 25;

const schoolKey = "school";
const schoolValue = "47 nomreli mekteb";

userData[schoolKey] = userData["47 nomreli mekteb"];

delete userData.age; // objectden silmek ucun

const numbers = [1, 2, 3];

numbers.splice(1); // arrayden silmek ucun

// console.log(numbers);

// Funksiyalar

// Eger arqumentde = isaresi yaziriqsa default deyer veririk
function createUserData(name, surname, age, origin = "Azerbaijan") {
  const userData = {
    name,
    surname,
    age,
    origin,

    fullName: `${name} ${surname}`,
    getFullText: () => {
      console.log(this);
    },
  };

  return userData;
}

// const user1 = createUserData("Ali", "Valiyev", 25);
// const user2 = createUserData("Hemid", "Huseynov", 33, "Turkiye");
// const user3 = createUserData("Gulendam", "Hemidova", 44);

// console.log(user1, user2, user3);

// const calculator = (a, b, operator) => {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   }
// };

// const result = calculator(1, 2, "+");
// console.log(result);

const NUMBER = 56;

// const userInputNumber = prompt("Ededi daxil edin");

// if (userInputNumber === NUMBER) {
//   console.log("Tapdiz");
// } else if (userInputNumber < NUMBER) {
//   console.log("Kicikdir, daha boyuk eded yazin");
// } else {
//   console.log("Boyukdur, daha kicik eded yazin");
// }

// let userInputNumber = prompt("Ededi daxil edin");
// while (userInputNumber != NUMBER) {
//   if (userInputNumber < NUMBER) {
//     userInputNumber = prompt("Kicikdir, Ededi daxil edin");
//   } else if (userInputNumber > NUMBER) {
//     userInputNumber = prompt("Boyukdur, Ededi daxil edin");
//   }
// }

// let f = "Fuad";
// let i = 0;
// while (f != "Subhan") {
//   console.log("menim adim Subhan deyil");
//   if (i === 10) {
//     f = "Subhan";
//     console.log("Menim adim Subhandi, besdirin!!");
//   }
//   console.log(i);
//   i++;
// }
let i = 0;
while (true) {
  if (i === 10) {
    break;
  }
  console.log(i);
  i++;
}

// if (userInputNumber == NUMBER) {
//   alert("Congrats!!! Ededi tapdiniz");
// }

// let number = 1;
// while (number < 50) {
//   console.log({ number });
//   number += 1;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log({ i });
// }
