import React from 'react';

function Card(props) {
  const card = props.card;

  function handleClick() {
    props.onCardClick(card);
  } 

  return (
    <article className="element">
      <button className="element__delete" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button className="element__like" name="like" type="button"></button>
          <p className="element__like-count">{card.likes ? card.likes.length : 0}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;