import React from 'react';

import PopupWithForm from './PopupWithForm';

export default function PopupDelete() {
  return <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />;
}
