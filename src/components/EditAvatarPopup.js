import React from 'react';
import PopupWithForm from './PopupWithForm';
import {useForm} from 'react-hook-form';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar, onLoading}) {
  const {register, errors} = useForm({mode: "all"});
  const refAvatar = React.useRef('');

  function handleSubmit (e) {
    e.preventDefault();

    const avatar = refAvatar.current.value;
    
    onUpdateAvatar({
      avatar
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="url" className={`popup__item ${errors.link && 'popup__item_type_error'}`} name="link" placeholder="Ссылка на аватар" 
        id="link-input" ref={(e) => {register(e, { required: true, pattern: {value: /http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?/, message: "Введите корректную ссылку"}}); refAvatar.current = e}}/>
        {errors.link && <span className="popup__item-error popup__item-error_active" id="name-input-error">{errors.link.message}</span>}
      </div>
      <button type="submit" className={`popup__submit ${errors.link && 'popup__submit_inactive'}`} value="Сохранить">{onLoading ? 'Сохранить...' : 'Сохранить'}</button>       
    </PopupWithForm>
  )
}

export default EditAvatarPopup;