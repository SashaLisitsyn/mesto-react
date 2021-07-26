import React from 'react';

import { PopupWithForm } from './PopupWithForm';

const PopupAvatar = props => {

  return(
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      buttonText="Сохранить" 
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input 
        type="url" 
        id="avatar-link" 
        name="avatar" 
        className="popup__input popup__input_avatar_link" 
        placeholder="Ссылка на картинку" 
        required 
      />
      <span 
        id="avatar-link-error" 
        className="popup__span-error"
      ></span>
    </PopupWithForm>
  )
}

export { PopupAvatar };