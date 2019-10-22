class Board extends Array {
  constructor() {
    super();
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.movesRemaining = 9;
    this.winner = null;
    this.MOVES = {
          1:[0, 0],
          2:[0, 1],
          3:[0, 2],
          4:[1, 0],
          5:[1, 1],
          6:[1, 2],
          7:[2, 0],
          8:[2, 1],
          9:[2, 2],
        };
  }

  isValidMove(moveNumber) {
    if (!this.MOVES[moveNumber]) return false;
    let [row, col] = this.MOVES[moveNumber];
    return typeof this.board[row][col] === "number";
  }

  isGameOver() {
    this.findWinner();

    if (!this.winner && this.movesRemaining > 0) {
      return false;
    }

    return true;
  }

  placeMark(move, sym) {
    let [row, col] = this.MOVES[move];
    this.movesRemaining--;
    this.board[row][col] = sym;
  }

  findWinner() {
    let h = this.isHorizontal();
    let v = this.isVertical();
    let d = this.isDiagnol();

    if (h) {
      this.winner = h;
    }

    if (v) {
      this.winner = v;
    }
    if (d) {
      this.winner = d;
    }

    if (this.movesRemaining === 0 && !this.winner) {
      this.winner = "tie";
    }
  }

  isHorizontal() {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every(el => el === this.board[i][0])) {
        return this.board[i][0];
      }
    }
    return false;
  }

  isVertical() {
    if (
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0]
    ) {
      return this.board[0][0];
    }

    if (
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1]
    ) {
      return this.board[0][1];
    }

    if (
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2]
    ) {
      return this.board[0][2];
    }

    return false;
  }

  isDiagnol() {
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      return this.board[0][0];
    }

    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      return this.board[0][2];
    }
    return false;
  }

  displayBoard() {
    this.printRow(0);
    this.printUnderlines();
    this.printRow(1);
    this.printUnderlines();
    this.printRow(2);
  }

  printRow(num) {
    console.log(this.board[num].join("|"));
  }

  printUnderlines() {
    console.log("-----");
  }
}

module.exports = Board;
