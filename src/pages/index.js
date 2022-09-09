import "./index.css";
import {
  avatarContainer,
  settings,
  cardContainer,
  buttonOpenEditAvatarPopup,
  popupContainer,
  buttonOpenEditProfilePopup,
  profileNameInput,
  profileInfoInput,
  buttonOpenAddCardPopup,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-49/",
  headers: {
    authorization: "3bd429b0-18aa-4fd8-8b35-785c3cf83e41",
    "Content-Type": "application/json",
  },
});

const createCard = (data) => {
  const card = new Card(
    data,
    "#cardTemplate",
    () => {
      popupPreview.open(data.name, data.link);
    },
    (cardObject) => {
      popupDelete.open(cardObject, data._id);
    },
    (cardId, cardObject) => {
      api
        .putLike(cardId)
        .then((res) => {
          cardObject.updateLikes(res.likes);
        })
        .catch((err) => {
          console.log(`Ошибка; ${err}`);
        });
    },
    (cardId, cardObject) => {
      api
        .deleteLike(cardId)
        .then((res) => {
          cardObject.updateLikes(res.likes);
        })
        .catch((err) => {
          console.log(`Ошибка; ${err}`);
        });
    }
  );

  const newCard = card.generateCard();
  return newCard;
};

const defaultCardList = new Section(
  {
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  },
  ".cards"
);

const profileValidate = new FormValidator(settings, popupContainer);
const cardValidate = new FormValidator(settings, cardContainer);
const avatarValidate = new FormValidator(settings, avatarContainer);

profileValidate.enableValidation();
cardValidate.enableValidation();
avatarValidate.enableValidation();

export const popupPreview = new PopupWithImage(".popup_element");
popupPreview.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userAboutSelector: ".profile__subtitle",
  userAvatarSelector: ".profile__avatar",
});

Promise.all([api.getProfileData(), api.getInitialCards()])
  .then(([profile, cards]) => {
    userInfo.setUserInfo(profile);
    cards.forEach((card) => {
      card.canDelete = card.owner._id == profile._id;
      card.iLike = false;
      card.likes.forEach((like) => {
        if (like._id === profile._id) {
          card.iLike = true;
        }
      });
    });
    defaultCardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Ошибка; ${err}`);
  });

const profilePopup = new PopupWithForm(".popup_edit", (data, popupObj) => {
  popupObj.renderLoading(true);
  console.log(data);
  api
    .setProfileData(data)
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка; ${err}`);
    })
    .finally(() => {
      popupObj.renderLoading(false);
    });
});

profilePopup.setEventListeners();

buttonOpenEditProfilePopup.addEventListener("click", () => {
  const profileInfo = userInfo.getUserInfo();
  profileNameInput.value = profileInfo.name;
  profileInfoInput.value = profileInfo.about;
  profileValidate.resetValidation();
  profilePopup.open();
});

const imagePopup = new PopupWithForm(".popup_elements", (data, popupObj) => {
  popupObj.renderLoading(true);
  console.log(data);
  api
    .setCards(data)
    .then((item) => {
      item.canDelete = true;
      const newCard = createCard(item);
      defaultCardList.addItem(newCard);
      cardValidate.resetValidation();
      imagePopup.close();
    })
    .catch((err) => console.log(`Ошибка; ${err}`))
    .finally(() => {
      popupObj.renderLoading(false);
    });
});

imagePopup.setEventListeners();
buttonOpenAddCardPopup.addEventListener("click", () => {
  cardValidate.resetValidation();
  imagePopup.open();
});

const popupDelete = new PopupWithConfirmation(".popup_sure", (cardId, card) => {
  api
    .deleteCard(cardId, card)
    .then((res) => {
      console.log(res);
      card.delete();
      popupDelete.close();
    })
    .catch((err) => console.log(`Ошибка; ${err}`));
});
popupDelete.setEventListeners();

const avatarChange = new PopupWithForm(".popup_avatar", (data, popupObj) => {
  popupObj.renderLoading(true);
  api
    .changeAvatar(data)
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
      avatarChange.close();
    })
    .catch((err) => {
      console.log(`Ошибка; ${err}`);
    })
    .finally(() => {
      popupObj.renderLoading(false);
    });
});

avatarChange.setEventListeners();

buttonOpenEditAvatarPopup.addEventListener("click", () => {
  avatarValidate.resetValidation();
  avatarChange.open();
});
