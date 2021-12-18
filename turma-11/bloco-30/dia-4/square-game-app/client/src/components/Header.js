import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1024px-Video-Game-Controller-Icon-IDV-green.svg.png'
        alt='game logo'
        className='game-logo'
      />
      <h1>Saia do seu quadrado</h1>
    </div>
  );
}

export default Header;
