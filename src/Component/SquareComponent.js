import React from "react";

const SquareComponent = (props) => {
  return (
    <span className="squareBox" onClick={props.onClick}>
      {props.state}
    </span>
  );
};

export default SquareComponent;
