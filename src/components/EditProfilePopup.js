import React, { useState, useContext, useEffect } from 'react';

import PopupWithForm from './PopupWithForm';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        value={name || ''}
        onChange={handleNameChange}
        type="text"
        id="edit-name"
        name="name"
        className="popup__input popup__input_edit_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="edit-name-error" className="popup__span-error"></span>
      <input
        value={description || ''}
        onChange={handleDescriptionChange}
        type="text"
        id="edit-about"
        name="about"
        className="popup__input popup__input_edit_about"
        placeholder="Вид деятельности"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="edit-about-error" className="popup__span-error"></span>
    </PopupWithForm>
  );
}
