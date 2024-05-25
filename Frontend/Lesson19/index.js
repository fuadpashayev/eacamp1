class Car {
  // Properties
  #name = "";
  #model = "";
  #year = "";
  #color = "";

  //constructor (arqumentler ucun)
  constructor(name, model, year, color) {
    this.#name = name;
    this.#model = model;
    this.#year = year;
    this.#color = color;
  }

  #getName() {
    return `${this.#name} ${this.#model}`;
  }

  #getOtherAttributes() {
    return `${this.#year}-cu il, reng: ${this.#color}`;
  }

  // Methods
  getPublicName() {
    const name = this.#getName();
    const otherAttributes = this.#getOtherAttributes();

    return `${name} - ${otherAttributes}`;
  }

  isThisCarAvailableForTaxi() {
    return this.#year >= 2009;
  }
}

const prius = new Car("Toyota", "Prius", 2008, "green");
const mercedes = new Car("Mercedes", "CLS 63", 2024, "purple");

const carData = {
  prius: {
    publicName: prius.getPublicName(),
    isAvailableForTaxi: prius.isThisCarAvailableForTaxi(),
  },

  mercedes: {
    publicName: mercedes.getPublicName(),
    isAvailableForTaxi: mercedes.isThisCarAvailableForTaxi(),
  },
};

console.log(carData);
