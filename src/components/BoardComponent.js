import React, { Component } from "react";
import SquareComponent from "./SquareComponent";
import NewGameComponent from "./NewGameComponent";
// import find_winner from "../find_winner";

class BoardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xNext: true
    };

    this.updateSquare = this.updateSquare.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xNext: true
    });
  };

  updateSquare = i => {
    let curSquares = this.state.squares.slice();
    curSquares[i] = this.state.xNext ? "X" : "O";

    this.setState({
      squares: curSquares,
      xNext: !this.state.xNext
    });
  };

  renderSquare(i) {
    return (
      <SquareComponent
        value={this.state.squares[i]}
        handleClick={() => this.updateSquare(i)}
      />
    );
  }

  checkWinner = squares => {
    const validWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < validWins.length; i++) {
      const [a, b, c] = validWins[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  render() {
    const winner = this.checkWinner(this.state.squares);
    const status = winner
      ? "Winner is " + winner
      : "Next player: " + (this.state.xNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div class="change_game">
          <NewGameComponent handleNewGame={this.resetGame} />
        </div>
      </div>
    );
  }
}

export default BoardComponent;
