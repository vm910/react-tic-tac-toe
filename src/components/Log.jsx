export default function Log(props) {
  return (
    <ol id="log">
      {props.gameState.map((turn) => {
        return (
          <li key={turn.player + turn.square.row + turn.square.col}>
            {turn.player} selected ({turn.square.row}, {turn.square.col})
          </li>
        );
      })}
    </ol>
  );
}
