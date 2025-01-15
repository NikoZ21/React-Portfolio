import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState();

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleNameChanged(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let playerNameHTML = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameHTML = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChanged}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameHTML}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
