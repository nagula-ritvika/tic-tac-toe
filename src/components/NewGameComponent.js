import React from "react";

function NewGameComponent(props) {
  return (
    <button className="new_game" onClick={props.handleNewGame}>
      New Game
    </button>
  );
}

export default NewGameComponent;
