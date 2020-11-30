import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="text" className="popup__item" name="name" placeholder="Имя Фамилия" id="name-input" required minLength="2" maxLength="40" />
            <span className="popup__item-error" id="name-input-error"></span>
        </div>
        <div className="popup__field">
          <input type="text" className="popup__item" name="about" placeholder="Профессия" id="about-input" required minLength="2" maxLength="200" />
          <span className="popup__item-error" id="about-input-error"></span>
        </div>
        <button type="submit" className="popup__submit" value="Сохранить">Сохранить</button>        
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="url" className="popup__item" name="link" required placeholder="Ссылка на аватар" id="link-input" />
          <span className="popup__item-error" id="link-input-error"></span>
        </div>
        <button type="submit" className="popup__submit" value="Сохранить">Сохранить</button>       
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__field">
          <input type="text" className="popup__item" name="name" required placeholder="Название" id="name-input" minLength="2" maxLength="30" />
          <span className="popup__item-error" id="name-input-error"></span>
        </div>
        <div className="popup__field">
          <input type="url" className="popup__item" name="link" required placeholder="Ссылка на картинку" id="link-input" />
          <span className="popup__item-error" id="link-input-error"></span>
        </div>
        <button type="submit" className="popup__submit" value="Создать">Создать</button>        
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?">
        <button type="submit" className="popup__submit popup__submit_delete" value="Да">Да</button>    
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
