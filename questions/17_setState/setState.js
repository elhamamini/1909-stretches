// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.newState = [];
  }
  setState(arg) {
    const mystate = { ...this.state, ...arg };

    return mystate;
  }
  goBack() {
    this.newState.push(this.state);
  }
}

module.exports = { StatefulThing };
