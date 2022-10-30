import logo from './forest_map.jpg';
import './App.css';
import player from './scared-guy.jpg'
import Game from './Game.js'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game logo={logo} player={player}/>
      </header>
    </div>
  );
}

export default App;
