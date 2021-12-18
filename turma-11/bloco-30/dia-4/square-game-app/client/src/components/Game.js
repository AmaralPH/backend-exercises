import React, { useEffect } from 'react';
import io from 'socket.io-client'
import '../styles/Game.css';

const socket = io('http://localhost:3000/');

const Game = () => {
  const findAxis = (number) => Math.floor(Math.random() * number);

  const play = () => {
    const Y = findAxis(42)
    const X = findAxis(85)
    socket.emit('play', { Y, X });
    localStorage.setItem('currentPosition', JSON.stringify({Y, X}))
  }

  const setPosition = (Y, X) => {
    const gameBox = document.querySelector('#game-box');
    gameBox.style.marginTop = `${Y}%`;
    gameBox.style.marginLeft = `${X}%`;
  }

  useEffect(() => {
    socket.on('enterGame', () => {
      const { Y, X } = JSON.parse(localStorage.getItem('currentPosition'));
      setPosition(Y, X)
    })
    socket.on('boxPosition', ({ Y, X }) => {
      setPosition(Y, X);
    });
  }, [socket])

  return (
    <div className='game'>
      <div
        id='game-box'
        onClick={() => play()}
      ></div>
    </div>
  );
}

export default Game;
