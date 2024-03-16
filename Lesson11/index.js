var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var mixedNumber = [14, 3, 5, 12, 7, 1, 9, 19, 21];

// numbers.filter((number) => number % 2);
// var evenNumbers = numbers.filter((number) => !(number % 2));
// var dividableThree = numbers.filter((number) => !(number % 3));

// var sortedNumbers = mixedNumber.sort((a, b) => a - b);

// // console.log("tek ededler: ", oddNumbers);
// console.log("cut ededler: ", evenNumbers);
// console.log("3e bolunenler", dividableThree);
// console.log("sortedNumbers", sortedNumbers);

// numbers.splice(
//   silmekIstediyimizIndex,
//   neceEdedSilinsin,
//   elave_olunacaq_element1,
//   elave_olunacaq_element2,
//   elave_olunacaq_element_n
// );

numbers.indexOf(5); // 5 ededinin numbers listindeki indexini tapmaq ucun

// splice methodu arrayin ozunu mutate(update) edir (deyisdirir)
numbers.splice(numbers.indexOf(5), 1);

// slice methodu ise sadece hansisa bir hissesini goturmek ucundur
numbers.slice(0, 5); // 0ci indexden 5ci indexe qeder

[1, 2, 3, 4, 5].join(", "); // arrayi arqumentdeki deyerle birlesdirir ve stringe yazir

// Data Types: Primitive ve Non primitive

// Heap & Stack

// Primitive: string, number, boolean, null, undefined -> immutable -> ram-heap (sabit yer ayirir)
// Non primitive: array, object -> mutable -> ram-stack (deyisken ola bilecek(flexible) yer ayirir)

// = -> assignment (menimsetme)
var a = 5;
a = 4;

var list = [1, 2, 3, 4, 5]; // assign

list.push(6); // mutate
list.unshift(0); // mutate

var list = [0, 1, 2, 3, 4, 5, 6]; // reassign

name.repeat(5); // 5 defe tekrarliyacaq

name.replace("ka", "fa"); // hansisa hisseni deyismek ucun, 1ci indexdeki hisseni 2ci ile deyisir
name.match("tek"); // hansisa hissenin olub olmamasini yoxluyur - detalli
name.search("tek"); // hansisa hissenin olub olmamasini yoxluyur - sadece index
name.split(""); // arqument bosh olanda herflere, dolu olanda hemin arqumente esasen bolub array-e yigir
name.startsWith("A");
name.endsWith("Z");
name.slice(0, 3); // eyni arraydeki kimi
name.indexOf("e"); // e herfinin stringdeki indexini tapir
name.trim(); // evvel ve sondaki bosluqlari silir

var text = "salsdkjflaksdjflkasjdflaksdjflaskdjfalksdjfkl";

var showText = text.substr(0, 10);

showText = showText + " More..."; // stringe basqa metni birlesdirdik
showText += " More..."; // yuxardaki ile eyni

var result = 10;

result = result + 10;
result = result - 5;
result = result * 3;

result += 10;
result -= 5;
result *= 3;
