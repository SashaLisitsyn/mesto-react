import React, { useState } from 'react';

import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleAddPlaceSubmit(event) {
    event.preventDefault();

    props.onAddCard({
      name: title,
      link: link,
    });
    setTitle('');
    setLink('');
  }

  return (
    <PopupWithForm
      onSubmit={handleAddPlaceSubmit}
      name="new-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        value={title}
        onChange={handleTitleChange}
        type="text"
        id="new-card-name"
        name="name"
        className="popup__input popup__input_new-card_name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="new-card-name-error" className="popup__span-error"></span>
      <input
        value={link}
        onChange={handleLinkChange}
        type="url"
        id="new-card-link"
        name="link"
        className="popup__input popup__input_new-card_link"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="new-card-link-error" className="popup__span-error"></span>
    </PopupWithForm>
  );
}
