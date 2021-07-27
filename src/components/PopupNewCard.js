import React from 'react';

import PopupWithForm from './PopupWithForm';

export default function PopupNewCard (props) {
  
  return(
    <PopupWithForm 
      name="new-card" 
      title="Новое место" 
      buttonText="Создать" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
    >
      <input 
        type="text" 
        id="new-card-name" 
        name="name" 
        className="popup__input popup__input_new-card_name" 
        placeholder="Название" 
        minLength="2" 
        maxLength="30" 
        required 
      />
      <span 
        id="new-card-name-error" 
        className="popup__span-error"
      ></span>
      <input 
        type="url" 
        id="new-card-link" 
        name="link" 
        className="popup__input popup__input_new-card_link" 
        placeholder="Ссылка на картинку" 
        required 
      />
      <span 
        id="new-card-link-error" 
        className="popup__span-error"
      ></span>
    </PopupWithForm>
  )
}