class Calculator {
  #result = 0;

  #yaddas = 0;

  constructor(baslangicEded) {
    this.#result = baslangicEded;
  }

  topla(number) {
    this.#result += number || 0;
    return number ? this : this.#result;
  }

  cix(number) {
    this.#result -= number;
    return this;
  }

  vur(number) {
    this.#result *= number;
    return this;
  }

  ustu(number) {
    this.#result **= number;
    return this;
  }

  mPlus() {
    this.#yaddas += this.#result;
    this.#result = 0;
    return this;
  }

  mMinus() {
    this.#yaddas -= this.#result;
    this.#result = 0;
    return this;
  }

  netice() {
    return this.#yaddas + this.#result;
  }
}

const calculator = new Calculator(25);

const netice = calculator
  .mPlus()
  .topla(5)
  .vur(2)
  .mPlus()
  .topla(2)
  .vur(5)
  .cix(2)
  .mPlus()
  .topla(500)
  .cix(100)
  .ustu(2)
  .netice();

console.log(netice);
