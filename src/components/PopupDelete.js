import React from 'react';

import { PopupWithForm } from './PopupWithForm';

const PopupDelete = () => {
  
  return (
    <PopupWithForm 
      name="delete" 
      title="Вы уверены?" 
      buttonText="Да" 
    />
  )
}

export { PopupDelete };