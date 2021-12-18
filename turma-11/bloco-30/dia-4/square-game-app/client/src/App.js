import React from 'react';

import './App.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Game from './components/Game.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Game />
    </div>
  );
}

export default App;
