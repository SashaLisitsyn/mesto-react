import React, { useState } from 'react';

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

import { PopupEdit } from "./PopupEdit";
import { PopupNewCard } from "./PopupNewCard";
import { PopupAvatar } from "./PopupAvatar";
import { PopupDelete } from "./PopupDelete";
import { PopupImage } from "./PopupImage";

const App = () => {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (data) => {
    setIsImagePopupOpen(true);
    setSelectedCard(data);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupEdit 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupNewCard 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} 
        />
        <PopupAvatar 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupDelete />
        <PopupImage 
          data={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  )
}

export { App };