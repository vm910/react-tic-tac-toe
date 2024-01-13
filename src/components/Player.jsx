import { useState } from "react";

export default function Player(props) {
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((wasEditing) => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {!editMode ? (
          <span className="player-name">{props.playerName}</span>
        ) : (
          <input type="text" value={props.playerName} />
        )}
        <span className="player-symbol">{props.playerSymbol}</span>
      </span>
      <button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
    </li>
  );
}
