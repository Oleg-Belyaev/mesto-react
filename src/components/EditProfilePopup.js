import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup ({isOpen, onClose, onUpdateUser, onLoading}) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChenge(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    })
  }

  React.useEffect(() => {
    setName(currentUser ? currentUser.name : '');
    setDescription(currentUser ? currentUser.about : '');
  },[currentUser]);

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="text" className="popup__item" name="name" placeholder="Имя Фамилия" id="name-input" required minLength="2" maxLength="40" value={name} onChange={handleNameChenge}/>
          <span className="popup__item-error" id="name-input-error"></span>
      </div>
      <div className="popup__field">
        <input type="text" className="popup__item" name="about" placeholder="Профессия" id="about-input" required minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange}/>
        <span className="popup__item-error" id="about-input-error"></span>
      </div>
  <button type="submit" className="popup__submit" value="Сохранить">{onLoading ? 'Сохранить...' : 'Сохранить'}</button>        
    </PopupWithForm>
  )
}

export default EditProfilePopup;