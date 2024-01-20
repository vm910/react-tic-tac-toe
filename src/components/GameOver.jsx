export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{props.winner === "draw" ? "It's a draw!" : `${props.winner} won!`}</p>
      <button onClick={props.onReset}>Play Again</button>
    </div>
  );
}
