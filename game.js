const Board = require("./board.js");
const HumanPlayer = require("./human_player.js");
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player2;
    this.board = new Board();
  }

  switchPlayers() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  takeTurn() {
    console.log(`It is your turn ${this.currentPlayer.name}`);
    console.log("The current board looks like this: ");
    this.board.displayBoard();
    this.getMove();
    console.clear();
  }

  getMove() {
    let makeMove = false;
    while (!makeMove) {
      let moveChoice = this.currentPlayer.getMove();
      if (this.board.isValidMove(moveChoice)) {
        this.board.placeMark(moveChoice, this.currentPlayer.sym);
        makeMove = true;
      } else {
        console.log("Invalid Move! Try again!");
      }
    }
  }

  gameOver() {
    console.log("GAME OVER. The winner was: ");
    this.currentPlayer.sym === this.board.winner
      ? console.log(this.currentPlayer.name)
      : console.log(this.board.winner);
  }

  play() {
    console.clear();
    console.log("Welcome To TIC TAC TOE!");
    while (!this.board.isGameOver()) {
      this.switchPlayers();
      this.takeTurn();
    }
    console.clear();
    this.board.displayBoard();
    this.gameOver();
  }
}

let game = new Game(
  new HumanPlayer("corey", "X"),
  new HumanPlayer("matt", "0")
);
game.play();
