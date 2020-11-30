function Card(card, i) {

  function handleClick () {
    card.onCardClick(card);
  }

  return (
    <div className="element" id={card.id} key={i}>
      <img src={card.link} alt={card.name} className="element__image" onClick={handleClick}/>
      <div className="element__caption">
        <p className="element__name">{card.name}</p>
        <div className="element__like">
          <button className="button element__button-like" type="button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="button element__button-remove" type="button"></button>
    </div>
  )
}

export default Card;