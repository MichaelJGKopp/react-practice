export default function Log({gameTurns = []}) {
    
    return (
            <ol id="log">
                {gameTurns.map(turn => {
                    const { square, player } = turn;
                    const { row, col } = square;
                    return (
                        <li key={`${row}${col}`}>	
                            {player} selected {`(${row}, ${col})`}
                        </li>
                    );
                })}
            </ol>
    );
}