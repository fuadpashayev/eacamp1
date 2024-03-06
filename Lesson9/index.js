"";
"";
var name = "Fuad's book";
var name = 'Qurumun adi: "Daxili ishler nazirliyi" - 200';

// var 0name = ''; // yanlish X
// var name0 = ''; // dogru

var a = "test@gmail.com";

// camel case
// snake case
// kebab case

// string
var userEmail = "test@gmail.com";
var user_email = "";
var kebabCase = "test-user-data";

var email = "test@gmail.com";

var olkeSayiMetni = "Dunyadaki olke sayi: 192";

// number
var olkeSayi = 192;

// console.log(olkeSayiMetni, olkeSayi);

// var age = prompt("Yasinizi daxil edin");
// var type = typeof age;

// console.log(typeof type);

// console.log("Sizin yasiniz: ", age);

// var isExiting = confirm("Sehifeden cixmaginiza eminsiniz?");

// console.log(isExiting);

// alert("This is an alert!!!");

// boolean
// true
// false

var age = prompt("Yasinisi daxil edin");

/*
= -> deyiskenin deyerini teyin elemek ucun

Netice olaraq boolean (true, false) qaytarir
== -> 2 deyerin sadece deyerlerinin beraber oldugunu yoxlamaq ucun
=== -> 2 deyerin hem deyerlerinin hem de tiplerinin eyni olmasini yoxlamaq ucun
> -> boyukdur
< -> kicikdir
>= -> boyukdur ve ya beraberdir
<= -> kicikdir ve ya beraberdir

&& - ve -> bu isarenin her iki terefi true oldugu zaman netice true olur
|| - ve ya -> bu isarenin tereflerinnen biri dogru oldugu halda netice true olur

*/

// if (age < 18) {
//   console.log("Sizin bu contenti gormeye yasiniz catmir");
// } else {
//   console.log("Bu da content....");
// }

if (age < 5) {
  console.log("bebe");
} else if (age > 5 && age <= 12) {
  console.log("usag");
} else if (age > 12 && age <= 18) {
  console.log("yeni yetme");
} else if (age > 18 && age <= 35) {
  console.log("genc");
} else if (age > 35 && age <= 55) {
  console.log("yetkin");
} else if (age > 55 && age < 105) {
  console.log("qoca");
} else {
  console.log("tahtali koyun vetendasi");
}

var name = "Faiq";
var isFaiq = name === "Faiq";

if (name === "Faiq" || (name === "Subhan" && name === "Fuad")) {
  var name = "Subhan";
  console.log();

  if (name === "Faiq" || (name === "Subhan" && name === "Fuad")) {
  } else {
  }
} else {
  var name = "Subhan";
  console.log();

  if (name === "Faiq" || (name === "Subhan" && name === "Fuad")) {
  } else {
  }
  var name = "Subhan";
  console.log();

  if (name === "Faiq" || (name === "Subhan" && name === "Fuad")) {
  } else {
  }
  var name = "Subhan";
  console.log();

  if (name === "Faiq" || (name === "Subhan" && name === "Fuad")) {
  } else {
  }

  console.log("Salam Subhan!");
}
