import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleSubmit() {
    setPlayerName(playerName.current.value);
    playerName.current.value = ""; // !! imperative code 
    // leave manipulating the DOM generally to React
    // but this is a common pattern to clear the input field
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* rendered here the first time, 
        ref playerName doesn't exist before this in 1st render cycle */}
        <input
          ref={playerName}  // !!
          type="text"
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
