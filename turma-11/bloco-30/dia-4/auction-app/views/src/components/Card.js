import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../styles/Card.css';

let socket;
const CONNECTION_PORT = 'localhost:3000/';

const Card = ({ props }) => {
  const { _id, name, image, currentPrice, user } = props;

  const [finished, setFinished] = useState(false);
  const [price, setPrice] = useState(currentPrice);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('bidMaked', (newPrice) => {
      setPrice(newPrice);
    });
  }, [socket]);

  const makeBid = () => {
    socket.emit('makeBid', price)
  };

  return (
    <div className={ `Card ${_id}` }>
      <h1 className='product-name'>{ name }</h1>
      <img className='product-img' src={ image } alt='Product'></img>
      <h2 className='product-price'>R$ { price.toFixed(2) }</h2>
      <h5 className='buyer-name'>{ `Lance dado por: ${user}` }</h5>
      <button className='bid-btn' onClick={() => makeBid()} disabled={finished}>
        { finished ? 'Produto arrematado' : 'Dar um lance' }
      </button>
    </div>
  );
}

export default Card;