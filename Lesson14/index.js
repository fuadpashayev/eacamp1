// var const let

// scope-lar
const a = {};

if (true) {
}

function fn() {}

for (let i = 0; i <= 10; i++) {}

{
}

// scope-lar son

const b = "5";

switch (b) {
  case "5":
    break;

  case 4:
    break;
}

if (b == 5) {
} else if (b == 4) {
}

const isNumber = (number) => !isNaN(number);

// is not a number
isNaN(5); // false
isNaN("");

Array.isArray([]); // array olub olmadigini yoxlayir

Math.random(); // random eded qaytarir

[].splice(0, 1, 2); // arrayden item silmek ucun
[].slice(); // arrayden hansisa hisseni(item(lar)i) goturmek
[].push(); // sonuna elave edir
[].pop(); // sondan silir
[].unshift(); // evvele elave edir
[].shift(); // evvelden silir
[].map(() => {}); // formalasdirir ve yeni array qaytarir
[].filter(); // arrayi filterlemek ucun
[].find(() => {}); // arrayden itemi tapmaq ucun
[].sort((a, b) => {}); // arraydeki item-lari istediyimiz formada siraliyir
[].forEach(() => {}); // arrayi donguye salmaq ucun
[].includes(); // item-in arrayin icinde olmasini yoxlamaq ucun
[].concat(); // arrayleri birlesdirmek ucun
[].join(); // stringe cevirir arqumentde yazilan stringle birlesdirerek
[].reverse(); // arrayi tersine cevirir
[].indexOf(); // item-in indexini tapmaq ucun
[].flat(derinlik); // arrayi eyni level-a(seviyeye) getirmek ucun
[].flat(Infinity); // multi level -> one level

"asdfbsdf".split('sdf') -> ['a', 'b', 'c']
"abc".split('') -> ['a', 'b', 'c']
"abc".length(); // uzunlugu
"abc".match(); // detalli melumati axtarib tapir
"abc".search(); // sadece index
"abc".charAt(2); // c
"abc".trim(); // bosluqlari silir
"abc".includes("a"); // icinde olub olmasini yoxluyur
"".toLowerCase();
"".toUpperCase();
"".substr();
"".substring();
"".slice();

const str = "salam";
str.slice(0,2) + str.charAt(2).toUpperCase() + str.slice(3)