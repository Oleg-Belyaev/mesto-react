function Card(props) {

  function handleClick () {
    props.onCardClick(props);
  }

  return (
    <div className="element">
      <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
      <div className="element__caption">
        <p className="element__name">{props.name}</p>
        <div className="element__like">
          <button className="button element__button-like" type="button"></button>
          <p className="element__like-counter">{props.likes.length}</p>
        </div>
      </div>
      <button className="button element__button-remove" type="button"></button>
    </div>
  )
}

export default Card;