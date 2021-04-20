import React, {useState, useEffect} from 'react';
import Api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([Api.getOwnerInfo(), Api.getCards()])
    .then(([owner, cards]) => {
      setUserName(owner.name);
      setUserDescription(owner.about);
      setUserAvatar(owner.avatar);
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  return (
    <main className="content">
      <section className="profile"> 
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src={userAvatar}/>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}/>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}/>
      </section>
      
      <section className="elements">
        {
          cards && cards.map((card, index) => <Card card={card} key={index} onCardClick={props.onCardClick}/>)
        }
      </section>
    </main>
  );
}

export default Main;