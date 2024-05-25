const names = [
  "Rauf",
  "Bayram",
  "Emil",
  "Royal",
  "Pakize",
  "Faiq",
  "Semender",
  "Namiq",
  "Elvin",
];

// const data = names.map((name) => ({ name }));
// const dataArr = names.map((name) => [name]);

// console.log(data, dataArr);

let nameObjj = {};
let namesObj = {};

for (let index = 0; index < names.length; index++) {
  const item = names[index];
  nameObjj[`name${index}`] = item;
}

const nameReducerFunction = (startsFromZero = true) => {
  return (data, item, index) => {
    const startIndex = startsFromZero ? index : index + 1;
    data["name" + startIndex] = item;
    return data;
  };
};

const nameObj = names.reduce(nameReducerFunction(true), {});

const a = names.reduce(nameReducerFunction(false), {});

console.log({ nameObj, a });

const originalData = [
  {
    hour: "01",
    minute: "00",
    value: 1,
    name: "Testing...",
  },
  {
    hour: "01",
    minute: "30",
    value: 2,
    name: "Testing 2...",
  },
  {
    hour: "02",
    minute: "00",
    value: 3,
    name: "Testing 3...",
  },
];

const options = originalData.map((item) => ({
  label: `${item.hour}:${item.minute}`,
  value: item.value,
}));

console.log(options);

// const options = [
//     { label: "01:00", value: "1" },
//     { label: "01:30", value: "1.5" },
//     { label: "02:00", value: "2" }
//   ];
