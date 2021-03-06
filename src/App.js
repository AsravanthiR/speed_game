import React, { Component } from "react";
import Circle from "./components/Circle";
import { circles } from "./circles";
import GameOver from "./components/GameOver";
import endSound from "./assets/sounds/gameOver.mp3";

let gameEndSound = new Audio(endSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false,
    pace: 1500,
    rounds: 0,
    gameStart: false,
  };

  timer = undefined;

  clickHandler = (id) => {
    console.log("You clicked: ", id);
    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
    console.log("active circle is ", this.state.current);
    console.log("Round number: ", this.state.rounds);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({
      gameStart: true,
    });
  };

  stopHandler = () => {
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      gameOver: true,
      current: 0,
      gameStart: false,
    });
  };

  closeHandler = () => {
    this.setState({
      gameOver: false,
      score: 0,
      pace: 1500,
      rounds: 0,
    });
  };

  render() {
    return (
      <div>
        {this.state.gameOver && (
          <GameOver score={this.state.score} close={this.closeHandler} />
        )}

        <h1>Speed Game</h1>
        <p>Your Score: {this.state.score}</p>

        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              click={() => this.clickHandler(c.id)}
              active={this.state.current === c.id}
              disabled={this.state.gameStart}
            />
          ))}
        </div>
        <div>
          <button disabled={this.state.gameStart} onClick={this.startHandler}>
            Start Game
          </button>
          <button onClick={this.stopHandler}> Stop Game </button>
        </div>
      </div>
    );
  }
}

export default App;
