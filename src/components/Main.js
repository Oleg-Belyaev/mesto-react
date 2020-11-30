import React from 'react';
import editAvatarPath from '../images/edit-avatar.svg';
import editButtonPath from '../images/edit-button.svg';
import addButtonPath from '../images/add-button.svg';
import api from '../utils/api.js';
import Card from '../components/Card.js';

function Main (props) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [editAvatar, setEditAvatar] = React.useState(false);

  function handleAvatarOver () {
    setEditAvatar(true);
  }

  function handleAvatarOut () {
    setEditAvatar(false);
  }

  React.useEffect(() => {
    Promise.all ([
      api.getUserInfo(),
      api.getInitialCards()
    ])
    .then(([data, items]) => {
      setUserName(`${data.name}`);
      setUserDescription(`${data.about}`);
      setUserAvatar(`${data.avatar}`);
      setCards(items);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <main className="content page__section">
      <section className="profile content__section">
        <div className="profile__data">
          <div className="profile__avatar" onClick={props.onEditAvatar} onMouseOver={handleAvatarOver} onMouseOut={handleAvatarOut}>
            <img src={userAvatar} alt="Фото" className="profile__foto" />
            <img src={editAvatarPath} alt="Карандаш" className={`profile__avatar-edit ${editAvatar && 'profile__avatar-edit_active'}`} />
          </div>
          <div className="profile__info">
            <div className="profile__names">
              <h1 className="profile__name">{userName}</h1>
              <button className="button profile__button-edit" type="button" onClick={props.onEditProfile}>
                <img src={editButtonPath} alt="Карандаш" className="button__edit" />
              </button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button className="button profile__button-add" type="button" onClick={props.onAddPlace}>
          <img src={addButtonPath} alt="Плюс" className="button__add" />
        </button>
      </section>
      <section className="elements content__section content__section_has_indent">
        {cards.map((card) => {
        return <Card {...card} key={card._id} onCardClick={props.onCardClick}/>
        }
        )}
      </section>
    </main>
  )
}

export default Main;