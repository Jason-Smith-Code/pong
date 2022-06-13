import "./App.css";
import { Game } from "../game/Game";
import { Score } from "../score/Score";

function App() {
  return (
    <div id="App">
      <Score />
      <Game />
    </div>
  );
}

export default App;
