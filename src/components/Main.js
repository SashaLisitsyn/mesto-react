import React, { useState, useEffect } from "react";

import { api } from '../utils/api';

import Card from "./Card";

export default function Main (props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Attention! ${err}`);
     })
  }, [])

  const [cards, setCards] = useState([]);

  
  useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar">
              <img 
                onClick={props.onEditAvatar} 
                style={{ backgroundImage: `url(${userAvatar})` }}  
                src={userAvatar}
                alt="Аватарка" 
                className="profile__avatar-img"
              />
          </div>
          <div className="profile__info">
            <div className="profile__name-button">
              <h1 className="profile__name">{userName}</h1>
              <button 
                onClick={props.onEditProfile} 
                className="profile__edit-button" 
                type="button"
              >
              </button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button 
          onClick={props.onAddPlace} 
          className="profile__add-buttom" 
          type="button"
        >
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card 
            data={card}
            key={card._id} 
            link={card.link} 
            name={card.name} 
            likes={card.likes.length} 
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}