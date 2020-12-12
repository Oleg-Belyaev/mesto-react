import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({isOpen, onClose, onAddPlace, onLoading}) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChege(e) {
    setName(e.target.value);
  }

  function handleLinkChenge(e) {
    setLink(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    })
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm name="card" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="text" className="popup__item" name="name" required 
        placeholder="Название" id="name-input" minLength="2" maxLength="30" 
        value={name} onChange={handleNameChege}/>
        <span className="popup__item-error" id="name-input-error"></span>
      </div>
      <div className="popup__field">
        <input type="url" className="popup__item" name="link" required 
        placeholder="Ссылка на картинку" id="link-input" 
        value={link} onChange={handleLinkChenge}/>
        <span className="popup__item-error" id="link-input-error"></span>
      </div>
      <button type="submit" className="popup__submit" value="Создать">{onLoading ? 'Создать...' : 'Создать'}</button>        
    </PopupWithForm>
  )
}

export default AddPlacePopup;