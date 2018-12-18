import React, { Component } from "react";
import BoardComponent from "./BoardComponent";
import "../App.css";

class GameComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 3
      // squares: Array(9).fill(null),
      // xNext: true
    };
  }

  render() {
    return (
      <div className="game">
        <div className="change_game">
          <button className="new_game">New Game</button>
          <input
            type="text"
            value={this.state.n}
            onChange={this.updateGridSize}
          />
          <button onClick={this.changeGridSize}>Change Grid Size</button>
        </div>
        <div className="game-board">
          <BoardComponent n={this.state.n} />
        </div>
        {/* <div className="game-info">
          <div>status</div>
          <ol>TODO</ol>
        </div> */}
      </div>
    );
  }
}

export default GameComponent;
