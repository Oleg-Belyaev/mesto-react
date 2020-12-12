import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar, onLoading}) {
  
  const refAvatar = React.useRef('');

  function handleSubmit (e) {
    e.preventDefault();

    const avatar = refAvatar.current.value;
    
    onUpdateAvatar({
      avatar
    })
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__field">
        <input type="url" className="popup__item" name="link" required placeholder="Ссылка на аватар" id="link-input" ref={refAvatar} />
        <span className="popup__item-error" id="link-input-error"></span>
      </div>
      <button type="submit" className="popup__submit" value="Сохранить">{onLoading ? 'Сохранить...' : 'Сохранить'}</button>       
    </PopupWithForm>
  )
}

export default EditAvatarPopup;