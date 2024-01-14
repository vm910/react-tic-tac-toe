import { useState } from "react";

export default function Player(props) {
  const [playerName, setPlayerName] = useState(props.playerName);
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((wasEditing) => !wasEditing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={props.isActive ? "active" : ""}>
      <span className="player">
        {!editMode ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onChange={handleChange} />
        )}
        <span className="player-symbol">{props.playerSymbol}</span>
      </span>
      <button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
    </li>
  );
}
