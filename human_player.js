const readlineSync = require('readline-sync');

class HumanPlayer {
  constructor(name, sym) {
    this.name = name;
    this.sym = sym;
  }

  getMove() {
    return readlineSync.question("Where would like to move?")
  }
}

module.exports =  HumanPlayer;
