import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectCell(row, col) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map((row) => [...row])];
      newGameBoard[row][col] = props.activePlayerSymbol;
      return newGameBoard;
    });

    props.onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() =>
                    handleSelectCell(rowIndex, colIndex, playerSymbol)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
