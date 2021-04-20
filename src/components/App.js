import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>

      <PopupWithForm isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name="profile" children={
        <>
          <label className="popup__field">
            <input className="popup__input popup__input_type_name" name="name" type="text" id="name-input" minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="name-input-error popup__input-error popup__input-error_type_name"></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_about" name="about" type="text" id="about-input" minLength="2" maxLength="200" placeholder="Описание" required/>
            <span className="about-input-error popup__input-error popup__input-error_type_about"></span>
          </label>
        </>
      }/>

      <PopupWithForm isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="element" buttonText="Создать" children={
        <>
          <label className="popup__field">
            <input className="popup__input popup__input_type_title" name="name" type="text" placeholder="Название" id="title-input" minLength="2" maxLength="30" required/>
            <span className="title-input-error popup__input-error popup__input-error_type_title">Вы пропустили это поле</span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_image-link" name="link" type="url" placeholder="Ссылка на картинку" id="link-input" required/>
            <span className="link-input-error popup__input-error popup__input-error_type_image-link">Введите адрес сайта</span>
          </label>
        </>
      }/>

      <PopupWithForm isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="avatar" children={
        <>
          <label className="popup__field">
            <input className="popup__input popup__input_type_avatar" name="avatar" type="url" placeholder="Ссылка на аватар" id="avatar-input" required/>
            <span className="avatar-input-error popup__input-error popup__input-error_type_avatar">Введите ссылку на аватар</span>
          </label>
        </>
      }/>

      <PopupWithForm title="Вы уверены?" name="delete" buttonText="Да" />

      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

      <Footer />
    </div>
  );
}

export default App;
