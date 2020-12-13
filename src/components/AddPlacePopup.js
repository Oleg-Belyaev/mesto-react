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
        <input type="text" className="popup__item" name="name" 
        placeholder="Название" id="name-input" value={name} onChange={handleNameChege}/>
      </div>
      <div className="popup__field">
        <input type="url" className="popup__item" name="link" 
        placeholder="Ссылка на картинку" id="link-input" value={link} onChange={handleLinkChenge}/>
      </div>
      <button type="submit" className="popup__submit" value="Создать">{onLoading ? 'Создать...' : 'Создать'}</button>        
    </PopupWithForm>
  )
}

export default AddPlacePopup;