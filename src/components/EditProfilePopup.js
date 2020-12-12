import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {useForm} from 'react-hook-form';

function EditProfilePopup ({isOpen, onClose, onUpdateUser, onLoading}) {
  const {register, errors} = useForm({mode: "all"});
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
        <input type="text" className={`popup__item ${errors.name && 'popup__item_type_error'}`} 
        name="name" placeholder="Имя Фамилия" id="name-input" 
        ref={register({ required: true, minLength: {value: 2, message: "Введите корректное имя. Длина больше 2 символов"}, 
        maxLength: {value: 40, message: "Введите корректное имя. Длина меньше 40 символов"}})} 
        value={name} onChange={handleNameChenge}/>
        {errors.name && <span className="popup__item-error popup__item-error_active" id="name-input-error">{errors.name.message}</span>}
      </div>
      <div className="popup__field">
        <input type="text" className={`popup__item ${errors.about && 'popup__item_type_error'}`} 
        name="about" placeholder="Профессия" id="about-input" 
        ref={register({ required: true, minLength: {value: 2, message: "Введите корректное имя. Длина больше 2 символов"}, 
        maxLength:{value: 200, message: "Введите корректное имя. Длина меньше 200 символов"}})} 
        value={description} onChange={handleDescriptionChange}/>
        {errors.about && <span className="popup__item-error popup__item-error_active" id="name-input-error">{errors.about.message}</span>}
      </div>
  <button type="submit" className={`popup__submit ${(errors.name || errors.about) && 'popup__submit_inactive'}`} value="Сохранить">{onLoading ? 'Сохранить...' : 'Сохранить'}</button>        
    </PopupWithForm>
  )
}

export default EditProfilePopup;