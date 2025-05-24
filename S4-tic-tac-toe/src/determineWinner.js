import { WINNING_COMBINATIONS } from "./winning-combinations";

export function determineWinner(gameTurns) {
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
  return winner;
}