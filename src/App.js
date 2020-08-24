import React from 'react';
import './App.css';
import Square from './components/Square.js';
import Board from './components/Board.js';
import Game from './components/Game.js';

function App() {
  return (

    <div className="App">
      <h1>Welcome to Tic-Tac-Toe Game!</h1>
      <Game />
      <h3>Developed by <a href="https://dhritisaha.netlify.app">Dhriti Saha</a></h3>
    </div>
  );
}

export default App;
