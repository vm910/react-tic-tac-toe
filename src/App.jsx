import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange() {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === "X" ? "O" : "X";
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handlePlayerChange}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
