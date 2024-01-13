import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="1" playerSymbol="X" />
          <Player playerName="2" playerSymbol="O" />
        </ol>
        BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
