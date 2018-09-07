const readlineSync = require('readline-sync');

class HumanPlayer {
  constructor(name, sym) {
    this.name = name;
    this.sym = sym;
    // this.rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    //
    // });
  }

  getMove() {
    // this.rl.question("Where would you like to move?", answer => {
    //   this.rl.close()
    //   return answer;

    // });
    return readlineSync.question("Where would like to move?")
  }
}

module.exports =  HumanPlayer ;
