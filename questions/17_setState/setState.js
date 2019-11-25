// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.newState = [];
  }
  setState(arg) {
    this.newState.push(this.state);
    this.state = { ...this.state, ...arg };

    return this.state;
  }
  goBack() {
    this.state = this.newState.pop();
  }
}

module.exports = { StatefulThing };
