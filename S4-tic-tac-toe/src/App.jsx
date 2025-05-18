import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import GameOver from "./components/GameOver";
import { determineWinner } from "./determineWinner";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  // derive the activePlayer state from gameTurns
  function deriveActivePlayer(gameTurns) {
    return gameTurns.length > 0 && gameTurns[0]?.player === "X" ? "O" : "X";
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  // WINNING CONDITION
  let winner = determineWinner(gameTurns);
  // draw condition: if all squares are filled and no winner, it's a draw
  const draw = gameTurns.length === 9 && !winner;

  function handleSelectTile(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handlePlayAgain() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner || draw ? <GameOver winner={winner} onPlayAgain={handlePlayAgain} /> : null}
        <GameBoard
          activePlayer={activePlayer}
          onSelectTile={handleSelectTile}
          gameTurns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
