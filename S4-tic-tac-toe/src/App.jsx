import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  // derive the activePlayer state from gameTurns
  function deriveActivePlayer(gameTurns) {
    return gameTurns.length > 0 && gameTurns[0]?.player === "X" ? "O" : "X";
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  // WINNING CONDITIONS
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstTurn = gameTurns.find(
      (turn) => turn.square.row === first.row && turn.square.col === first.col
    );
    const secondTurn = gameTurns.find(
      (turn) => turn.square.row === second.row && turn.square.col === second.col
    );
    const thirdTurn = gameTurns.find(
      (turn) => turn.square.row === third.row && turn.square.col === third.col
    );

    if (
      firstTurn?.player &&
      firstTurn.player === secondTurn?.player &&
      firstTurn.player === thirdTurn?.player
    ) {
      winner = firstTurn.player;
      break;
    }
  }
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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner || draw ? <GameOver winner={winner} /> : null}
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
