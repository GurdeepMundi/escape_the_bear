import logo from './forest_map.jpg';
import './App.css';
import player from './scared-guy.jpg'
import Game from './Game.js' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game logo={logo} player={player}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
