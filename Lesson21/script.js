// function Person() {
//   console.log(this.name);
// }

// // Context yaratmaq
// new Person();

// // derhal cagirir
// Person.call({}, 1, 2, 3);
// Person.apply({}, [1, 2, 3]);

// // daha sonra cagirmaq ucun deyiskende saxlanilir
// Person.bind({}, 1, 2, 3);

const fn = (data) => {
  const { name, gender, ...rest } = data;
  console.log({ name, gender, rest });
};

const data = {
  name: "Subhan",
  age: 23,
  gender: "male",
  origin: "AZ",
};

// fn(data);

// const { name, origin } = data; // destrcuture

// const name = data.name;
// const age = data.age;
// const gender = data.gender;
// const origin = data.origin;

// const { name, ...other } = data;

// // console.log({
// //   otherData,
// // });

const user1Data = {
  name: "Subhan",
  age: 23,
  isAgeUnder18: () => {},
};

function Person() {
  console.log(this.name, this);
}

// Context yaratmaq
// const person = new Person();

// derhal cagirir
// Person.call({}, 1, 2, 3);
// Person.apply({}, [1, 2, 3]);

// daha sonra cagirmaq ucun funksiya qaytarir ve deyiskende saxlanilir
// Person.bind({}, 1, 2, 3);

// Person.call(user1Data, 1, 2, 3);
// Person.apply(user1Data, [1, 2, 3]);

const createPerson = Person.bind(user1Data);

// createPerson();

class A {
  name;

  getName() {}
}

class B extends A {}

function A(name) {
  this.name = name;

  this.getName = () => {
    console.log(this.name);
  };
}

function B() {
  this.getName();
  console.log("another", this.name);
}

const aInstance = new A("Subhan");

B.call(aInstance);
