import React, { useState } from 'react';
import io from 'socket.io-client';
import '../styles/Menu.css';

const socket = io('http://localhost:3000/');

const Menu = () => {
  const [startBtn, setStartBtn] = useState(false);
  const [inicialPoint, setInicialPoint] = useState();

  const findAxis = (number) => Math.floor(Math.random() * number);

  const play = () => {
    const Y = findAxis(42)
    const X = findAxis(85)
    setStartBtn(true)
    setInicialPoint({ Y, X });
    socket.emit('startGame', { Y, X });
    localStorage.setItem('currentPosition', JSON.stringify({Y, X}));
  }

  const replay = () => {
    setStartBtn(false);
    socket.emit('restartGame', inicialPoint);
    localStorage.setItem('currentPosition', JSON.stringify(inicialPoint));
  }

  return (
    <div className='menu'>
      <button
        className='start btn'
        disabled={startBtn}
        onClick={ () => play() }
      >
        Iniciar jogo
      </button>
      <button
        className='restart btn'
        disabled={!startBtn}
        onClick={ () => replay() }
      >
        Reiniciar jogo
      </button>
    </div>
  );
}

export default Menu;
