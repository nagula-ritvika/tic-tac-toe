import React, { Component } from "react";
import BoardComponent from "./BoardComponent";
import "../App.css";

class GameComponent extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <BoardComponent />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default GameComponent;
