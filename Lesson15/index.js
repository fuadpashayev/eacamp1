const anaFunksiya = (a, b, callback) => {
  callback(a * b);
  return a * b;
};

const cavab = anaFunksiya(5, 3, (res) => {
  console.log(res);
});

// console.log(cavab);

let data = [5, true, "sdfsdf", "sdfsdf"];

console.log("datanin evvelki hali", data);

// ana funksiya
data = data.map((item, index) => {
  if (index === 0) {
    return "salam";
  } else if (index === 1) {
    return {};
  } else if (index === 2) {
    return 5;
  } else {
    return "Subhan";
  }
});

console.log("datanin sondaki hali", data);

const numbers = fetch();
numbers.map((i) => i * 2);
