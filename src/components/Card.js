import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.data.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? 'element__delete_show' : ''
  }`;

  const isLiked = props.data.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__like_active' : ''
  }`;

  function handleClick() {
    props.onCardClick(props.data);
  }

  function handleLikeClick() {
    props.onCardLike(props.data);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.data);
  }

  return (
    <article className="element" key={props.id}>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
        type="button"
      ></button>
      <img
        src={props.data.link}
        style={{ backgroundImage: `url(${props.data.link})` }}
        alt={props.data.name}
        className="element__photo"
        onClick={handleClick}
      />
      <div className="element__name-like">
        <h2 className="element__name">{props.data.name}</h2>
        <div className="element__likes">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="element__quantity-likes">{props.data.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
