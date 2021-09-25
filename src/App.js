import "./App.css";
import { useState, useEffect } from "react";
import SquareComponent from "./Component/SquareComponent";
import { checkWinner } from "./checkWinner";

function App() {
  const [gameState, setGameState] = useState([]);
  const [isXChance, setIsXChance] = useState(true);

  const onSquareClick = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    setIsXChance(!isXChance);
    setGameState(strings);
  };

  const clearGame = () => {
    setGameState([]);
    setIsXChance(true);
  };

  useEffect(() => {
    let winner = checkWinner(gameState);
    if (winner) {
      alert(`Ta da ! ${winner} won the Game !`);
      clearGame();
    }
  });

  return (
    <>
      <div className="App">
        <div className="header">Tic Tac Toe</div>
        <div className="squareBoxes">
          <div>
            <SquareComponent
              state={gameState[0]}
              onClick={() => onSquareClick(0)}
            />
            <SquareComponent
              state={gameState[1]}
              onClick={() => onSquareClick(1)}
            />
            <SquareComponent
              state={gameState[2]}
              onClick={() => onSquareClick(2)}
            />
          </div>

          <div>
            <SquareComponent
              state={gameState[3]}
              onClick={() => onSquareClick(3)}
            />
            <SquareComponent
              state={gameState[4]}
              onClick={() => onSquareClick(4)}
            />
            <SquareComponent
              state={gameState[5]}
              onClick={() => onSquareClick(5)}
            />
          </div>

          <div>
            <SquareComponent
              state={gameState[6]}
              onClick={() => onSquareClick(6)}
            />
            <SquareComponent
              state={gameState[7]}
              onClick={() => onSquareClick(7)}
            />
            <SquareComponent
              state={gameState[8]}
              onClick={() => onSquareClick(8)}
            />
          </div>
        </div>

        <button className="clearbtn" onClick={clearGame}>
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
