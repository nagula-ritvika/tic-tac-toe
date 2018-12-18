import React from "react";

function SquareComponent(props) {
  return (
    <button className="square" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}

export default SquareComponent;
