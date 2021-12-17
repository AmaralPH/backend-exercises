import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/CardContainer.css'

const CardContainer = () => {
  const [cardData, setCardData] = useState([]);

  const fetchCardInfos = async () => {
    const data = await fetch('http://localhost:3000/products');
    const dataObject = await data.json();
    setCardData(dataObject);
  };

  useEffect(() => {
    fetchCardInfos();
  }, [])

  return (
    <div className={ `card-container` }>
      { cardData.map((data) => <Card key={data._id} props={data} />) }
    </div>
  );
}

export default CardContainer;