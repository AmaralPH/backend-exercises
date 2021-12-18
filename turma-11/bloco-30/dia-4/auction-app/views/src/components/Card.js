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
    socket.on('bidMaked', ({ newPrice, _id }) => {  
      const priceElement = document.getElementById(_id);
      priceElement.innerHTML = `R$ ${newPrice.toFixed(2)}`;
    });
  }, [socket]);

  useEffect(() => {
    if (price >= 100) {
      socket.emit('makeBid', { price: 100, _id });
      setFinished(true);
    } else {
      socket.emit('makeBid', { price, _id });
    }
  }, [price]);

  const makeBid = () => {
    const priceValue = Number(document.getElementById(_id).innerHTML.split(' ')[1]);
    setPrice(priceValue + 5);
  };

  return (
    <div className={ `Card ${_id}` }>
      <h1 className='product-name'>{ name }</h1>
      <img className='product-img' src={ image } alt='Product'></img>
      <h2 className='product-price' id={ _id }>R$ { currentPrice.toFixed(2) }</h2>
      <h5 className='buyer-name'>{ `Lance dado por: ${user}` }</h5>
      <button className='bid-btn' id={ `${_id}-btn` } onClick={() => makeBid()} disabled={finished}>
        { finished ? 'Produto arrematado' : 'Dar um lance' }
      </button>
    </div>
  );
}

export default Card;