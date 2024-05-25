// Constructor functions (classin baci qardasi)
// function Human(name, surname) {
//   this.getFullName = function () {
//     return `${name} ${surname}`;
//   };
// }

// const human = new Human("Subhan", "Muradli");

// const fullName = human.getFullName();
// console.log(fullName);

// class Human {
//   static maxHeight = 2.5;
//   name;
//   surname;
//   age;

//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }

//   getFullInfo() {
//     return `${this.name} ${this.surname} / age: ${this.age}`;
//   }

//   static calculateHeight(a, b) {
//     console.log({ a: this }, this.length);
//     return a + b;
//   }
// }

// const human1 = new Human("Subhan", "Muradli", 23);

// // console.log(Human.calculateHeight(1, 5));
// Human.calculateHeight(1, 5);

// // console.log(human1.calculateHeight());

// const arr = new Array();

// Array.isArray();

// Class Inheritance

class Animal {
  name;
  weight;
  color;

  constructor(name, weight, color) {
    this.name = name;
    this.weight = weight;
    this.color = color;
  }
}

class Cat extends Animal {
  constructor(...args) {
    super(...args);
    this.canRun = true;
    this.canFly = false;
  }
}

class Bird extends Animal {
  constructor(...data) {
    super(...data);
    this.canFly = true;
    this.canRun = false;
  }
}

const animal1 = new Bird("Qartal", 10, "gray");
const animal2 = new Cat("Pisik", 3, "sari");
const animal3 = new Bird("Tutu qushu", 5, "green");

// console.log(animal1, animal2, animal3);

// const testFunction = function (...data) {
//   console.log({ arguments, data });
// };

// testFunction(1, 2, 3, true, [], {});

class NewsApi {
  news;

  public_key;
  private_key;
  api_url;
  connection;

  constructor(public_key, private_key, api_url) {
    this.public_key = public_key;
    this.private_key = private_key;
    this.api_url = api_url;

    this.setConnection();
  }

  setConnection() {
    this.connection = () => {
      fetch(this.api_url, {});
    };
  }

  getNews() {
    const news = this.connection.get();

    this.news = news;
  }

  getNewsCount() {
    return this.news.length;
  }
}

class Aztv extends NewsApi {
  public_key = "a1b2";
  private_key = "asdgf76asfga7sf";
  api_url = "https://aztv.az/api/news/v1";

  constructor() {
    super();
    // super(this.public_key, this.private_key, this.api_url);
  }
}

class SpaceTv extends NewsApi {
  public_key = "a1b2";
  private_key = "asdgf76asfga7sf";
  api_url = "https://spacetv.az/api/news/v1";

  constructor() {
    super();
    // super(this.public_key, this.private_key, this.api_url);
  }
}

const spacetv = new NewsApi();

// console.log(spacetv);

// Recursive functions
// 5
const findFactorial = (num) => {
  if (num === 0 || num === 1) return 1;
  if (num > 1) {
    return num * findFactorial(num - 1);
  }
};

const fibonacciOrder = (result = [0, 1]) => {
  if (result.length <= 1000) {
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibonacciOrder(result);
  } else {
    return result;
  }
};

// .call() //
// .apply() //

// .bind() //

function Person(number1, istrue, isFalse, number2) {
  this.name = name;
  this.surname = surname;
}

const person1 = new Person("Subhan", "Muradli");

const newTestContext = {
  age: 25,
  gender: "male",
};

const getPersonCall = Person.call(newTestContext, 1, true, false, 0); // cagirir

const getPersonApply = Person.apply(newTestContext, [1, true, false, 0]); // cagirir

const getPersonBind = Person.bind([1, true, false, 0]); // yeni funksiya yaradir

new Person();

console.log(person1, getPerson);
