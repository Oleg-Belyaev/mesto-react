import React from 'react';
import PopupWithForm from './PopupWithForm';
import {useForm} from 'react-hook-form';

function AddPlacePopup ({isOpen, onClose, onAddPlace, onLoading}) {
  const {register, errors} = useForm({mode: "all"})
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
        <input type="text" className={`popup__item ${errors.name && 'popup__item_type_error'}`} name="name" 
        placeholder="Название" id="name-input" value={name} onChange={handleNameChege}
        ref={register({ required: true, minLength: {value: 2, message: "Введите корректное имя. Длина больше 2 символов"}, 
        maxLength: {value: 40, message: "Введите корректное имя. Длина меньше 30 символов"}})}/>
        {errors.name && <span className="popup__item-error popup__item-error_active" id="name-input-error">{errors.name.message}</span>}
      </div>
      <div className="popup__field">
        <input type="url" className={`popup__item ${errors.link && 'popup__item_type_error'}`} name="link" 
        placeholder="Ссылка на картинку" id="link-input" 
        value={link} onChange={handleLinkChenge}
        ref={register({required: true, pattern: {value: /http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?/, message: "Введите корректную ссылку"}})}/>
        {errors.link && <span className="popup__item-error popup__item-error_active" id="name-input-error">{errors.link.message}</span>}
      </div>
      <button type="submit" className={`popup__submit ${(errors.name || errors.link) && 'popup__submit_inactive'}`} value="Создать">{onLoading ? 'Создать...' : 'Создать'}</button>        
    </PopupWithForm>
  )
}

export default AddPlacePopup;