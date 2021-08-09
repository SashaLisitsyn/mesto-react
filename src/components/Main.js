import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar">
            <img
              onClick={props.onEditAvatar}
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
              src={currentUser.avatar}
              alt="Аватарка"
              className="profile__avatar-img"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-button">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-buttom"
          type="button"
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            data={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
