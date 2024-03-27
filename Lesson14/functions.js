// general function
function testFunction1() {}

// arrow function
const testFunction2 = () => {};

const testFunction3 = function () {};

const normalFunction = (gedibGoturubGelen) => {
  gedibGoturubGelen("salam");
};

// normalFunction((a) => { console.log("a: " + a); });

const xFunction = (data) => {
  console.log(data);
};

function test() {}

[1, 2, 3, 4, 5].map((i) => i * 2);

[1, 2, 3, 4, 5].map((i) => {
  return i * 2;
});

[1, 2, 3, 4, 5].map(function (i) {
  return i * 2;
});

const sum = (a, b) => {
  console.log(a + b);
};

sum(1, 2);

const dataGetiren = (sldkjfhksjdf) => {
  console.log("surname::::::", sldkjfhksjdf);
};

function getUserData(a) {
  const userData = {
    name: "John",
    surname: "Doe",
    age: 100,
  };

  a(userData.surname);
}

getUserData(dataGetiren);

const arr = [1, 2, 3, 4, 5];
const data = [];
for (let i = 0; i <= arr.length - 1; i++) {
  const number = arr[i];
  data.push(number * 2);
}
