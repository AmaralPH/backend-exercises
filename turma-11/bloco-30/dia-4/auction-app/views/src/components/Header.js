import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className='auction-name'>
        <div className="logo"></div>
        <h3>Leilão de centavos</h3>
      </div>
      <div className='input-name'>
        <input type='text' placeholder='Qual seu nick'></input>
        <button>Salvar</button>
      </div>
    </header>
  );
}

export default Header;