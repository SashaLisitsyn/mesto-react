import React from 'react';

import { PopupWithForm } from './PopupWithForm';

const PopupEdit = props => {
  
  return (
    <PopupWithForm 
      name="edit" 
      title="Редактировать профиль" 
      buttonText="Сохранить" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
    >
      <input 
        type="text" 
        id="edit-name" 
        name="name" 
        className="popup__input popup__input_edit_name" 
        placeholder="Имя" 
        minLength="2" 
        maxLength="40" 
        required 
      />
      <span 
        id="edit-name-error" 
        className="popup__span-error"
      ></span>
      <input 
        type="text" 
        id="edit-about" 
        name="about" 
        className="popup__input popup__input_edit_about" 
        placeholder="Вид деятельности" 
        minLength="2" 
        maxLength="200" 
        required 
      />
      <span 
        id="edit-about-error" 
        className="popup__span-error"
      ></span>
    </PopupWithForm>
  )
}

export { PopupEdit };