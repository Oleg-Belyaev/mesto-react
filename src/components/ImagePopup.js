function ImagePopup (props) {
  return (
    <section className={`popup ${Object.keys(props.card).length !== 0 && 'popup_opened'}`}>
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__imagecontainer">
        <button className="popup__close popup__close_image" type="button" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ImagePopup;