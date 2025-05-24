export default function GameOver({ winner, onPlayAgain, players }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner ? `${players[winner]} wins!` : "It's a draw!"}</p>
            <button onClick={onPlayAgain}>Play Again</button>
        </div>
    );
}