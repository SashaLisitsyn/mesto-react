import { useRef } from 'react';

import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <input
        ref={avatarRef}
        type="url"
        id="avatar-link"
        name="avatar"
        className="popup__input popup__input_avatar_link"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="avatar-link-error" className="popup__span-error"></span>
    </PopupWithForm>
  );
}
