import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combs";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  gameTurns.forEach((turn) => {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  });

  let winner;

  if (gameTurns.length === 9) {
    winner = "draw";
  }

  for (const comb of WINNING_COMBINATIONS) {
    const [a, b, c] = comb;

    if (
      gameBoard[a.row][a.column] &&
      gameBoard[a.row][a.column] === gameBoard[b.row][b.column] &&
      gameBoard[a.row][a.column] === gameBoard[c.row][c.column]
    ) {
      winner = players[gameBoard[a.row][a.column]];
    }
  }

  function handlePlayerChange(row, col) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);

      const updatedTurns = [
        { square: { row, col }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedTurns;
    });
  }

  function resetGame() {
    setGameTurns([]);
  }

  function handleNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
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
            onChangeName={handleNameChange}
          />
          <Player
            playerName="2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleNameChange}
          />
        </ol>
        {winner && <GameOver winner={winner} onReset={resetGame} />}
        <GameBoard
          onSelectSquare={handlePlayerChange}
          activePlayerSymbol={activePlayer}
          gameBoard={gameBoard}
        />
      </div>
      <Log gameState={gameTurns} />
    </main>
  );
}

export default App;
