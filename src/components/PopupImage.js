import React from 'react';

export default function PopupImage (card) {

  return(
    <div 
      className={`popup popup_type_image ${card.isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__content-image">
        <button 
          type="button" 
          className="popup__close popup__close_image"
          onClick={card.onClose}
        ></button>
        <img 
          src={card.data.link} 
          style={{ backgroundImage: `url(${card.data.link})` }}
          alt={card.data.name}
          className="popup__image" 
        />
        <h2 className="popup__caption">{card.data.name}</h2>
      </div>
    </div>
  )
}