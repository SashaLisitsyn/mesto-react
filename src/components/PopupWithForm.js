import React from 'react';

const PopupWithForm = props => {

  return(
    <div 
      className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} 
    >
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button 
          type="button" 
          className="popup__close popup__close_type" 
          onClick={props.onClose} 
        ></button>
        <h2 className="popup__edit">{props.title}</h2>
        <form 
          className={`popup__form popup__form_${props.name}`} 
          name="form" 
          noValidate
        >
          {props.children}
          <button 
            type="submit" 
            className="popup__save popup__save_edit"
          >{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export { PopupWithForm };