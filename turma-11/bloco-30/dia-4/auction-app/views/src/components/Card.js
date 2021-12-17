import React from 'react';
// import io from 'socket.io-client';
import '../styles/Card.css';

const Card = ({ props }) => {
  const { _id, name, image, currentPrice, user } = props;
  // const socket = io();

  // const lanceButton = document.querySelector('#button');
  // lanceButton.addEventListener('click', () => {
  //   socket.emit('lanceOnProduct', { _id, currentPrice })
  // })

  return (
    <div className={ `Card ${_id}` }>
      <h1 className='product-name'>{ name }</h1>
      <img className='product-img' src={ image } alt='Product'></img>
      <h2 className='product-price'>R$ { currentPrice.toFixed(2) }</h2>
      <h5 className='buyer-name'>{ `Lance dado por: ${user}` }</h5>
      <button className='button'>Dar um lance</button>
    </div>
  );
}

export default Card;