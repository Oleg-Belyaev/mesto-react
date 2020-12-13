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
        <input type="text" className="popup__item" name="name" placeholder="Имя Фамилия" id="name-input" 
        value={name} onChange={handleNameChenge}/>
      </div>
      <div className="popup__field">
        <input type="text" className="popup__item" 
        name="about" placeholder="Профессия" id="about-input" 
        value={description} onChange={handleDescriptionChange}/>
      </div>
  <button type="submit" className="popup__submit" value="Сохранить">{onLoading ? 'Сохранить...' : 'Сохранить'}</button>        
    </PopupWithForm>
  )
}

export default EditProfilePopup;