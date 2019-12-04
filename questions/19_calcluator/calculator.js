class Calculator {
  constructor() {
    super();
    this.value = 0;
  }
  add(num) {
    this.value += num;
  }
  subtract(num) {
    this.value -= num;
  }
  divide(num) {
    if (num === 0) {
      this.value += num;
    } else {
      this.value = this.value / num;
    }
  }
  multiply(num) {
    this.value = this.value * num;
  }
  clear() {
    this.value = 0;
  }
}

module.exports = { Calculator };
