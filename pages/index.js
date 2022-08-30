import { cardValidate, popupPreview, profileValidate, defaultCardList } from '../utils/constants.js';


profileValidate.enableValidation();

cardValidate.enableValidation();


defaultCardList.renderItems();


popupPreview.setEventListeners();
