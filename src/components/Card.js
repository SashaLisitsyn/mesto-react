const Card = card => {

  const handleClick = () => {
    card.onCardClick(card.data);
  }  

  return (
    <article 
      className="element" 
      key={card.id}
    >
      <button 
        className="element__delete" 
        type="submit"
      ></button>
      <img 
        src={card.link}
        style={{ backgroundImage: `url(${card.link})` }}
        alt={card.name}
        className="element__photo"
        onClick={handleClick}
      />
      <div className="element__name-like">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__likes">
          <button 
            className="element__like" 
            type="button"
          ></button>
          <p className="element__quantity-likes">{card.likes}</p>
        </div>
      </div>
    </article>
  )
}

export { Card };