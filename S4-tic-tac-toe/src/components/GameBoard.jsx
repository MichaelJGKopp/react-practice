import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  activePlayer = "X",
  onSelectTile,
}) {
  const [currentGameBoard, setCurrentGameBoard] = useState(initialGameBoard);

  function handleCellClick(currentRowIndex, currentColIndex) {
    setCurrentGameBoard((prevGameBoard) => {
      // Create a deep copy of the game board for immutability when updating the state
      const updatedBoard = [...prevGameBoard.map((row) => [...row])];
      updatedBoard[currentRowIndex][currentColIndex] = activePlayer;
      return updatedBoard;
    });

    onSelectTile(); // switch the active player
  }
  return (
    <ol id="game-board">
      {currentGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleCellClick(rowIndex, colIndex)}>
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
