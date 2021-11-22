import React from "react";
const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overLay">
      <div className="gameOverBox">
        <h1>Game Over </h1>
        <p>Score was : {props.score} </p>
        <button onClick={props.close}>X(CLOSE)</button>
      </div>
    </div>
  );
};

export default GameOver;
