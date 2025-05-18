// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  //   activePlayer = "X",
  onSelectTile,
  gameTurns = [],
}) {
/*     const [currentGameBoard, setCurrentGameBoard] = useState(initialGameBoard);

    function handleCellClick(currentRowIndex, currentColIndex) {
      setCurrentGameBoard((prevGameBoard) => {
        // Create a deep copy of the game board for immutability when updating the state
        const updatedBoard = [...prevGameBoard.map((row) => [...row])];
        updatedBoard[currentRowIndex][currentColIndex] = activePlayer;
        return updatedBoard;
      });

      onSelectTile(); // switch the active player
    } */

  // Use the least amount of state possible, derive the state from props instead
  let currentGameBoard = [...initialGameBoard.map((row) => [...row])]; // Create a deep copy of the game board

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    currentGameBoard[row][col] = player;
  });

  return (
    <ol id="game-board">
      {currentGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectTile(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
