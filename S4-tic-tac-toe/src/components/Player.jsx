import { useState } from "react";

export default function Player({ name, symbol , isActive = false, onSave}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    if (isEditing) {
        onSave(symbol, playerName);
    }
    // toggle the editing state
    setIsEditing((prev) => !prev);  // best practice to user a function to update state
  };

  function handleChange(event) {    // by default the handleChange event provides the event object
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
