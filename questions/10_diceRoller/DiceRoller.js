// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice) {
    if (!sides || !numDice) {
      throw new Error("Error,missing a parameter");
    }
    if (typeof sides !== "number" || typeof numDice !== "number") {
      throw new Error("");
    }
    if (sides < 1 || numdice) {
    }
    this.sides = sides;
    this.numDice = numDice;
    this.history = [];
  }
  roll() {
    let arr = {};
    for (let i = 0; i < this.numDice; i++) {
      let roll = Math.floor(Math.random() * this.numDice + 1);
      if (roll % 1 === 0 && roll > 0) {
        arr.push(roll);
      }
    }
    this.history.push(arr);
    return arr;
  }
}

module.exports = { DiceRoller };
