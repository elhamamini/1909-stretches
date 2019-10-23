// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice) {
    this.sides = sides;
    this.numDice = numDice;
    this.history = [];
  }
  roll() {
    let arr = {};
    for (let i = 0; i < this.numDice; i++) {
      let roll = Math.random() * this.numDice;
      if (roll % 1 === 0 && roll > 0) {
        arr.push(roll);
      }
    }
    return arr;
  }
}

module.exports = { DiceRoller };
