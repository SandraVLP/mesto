import { cardValidate, popupImage, profileValidate } from '../utils/constants.js';
import { defaultCardList} from '../utils/utils.js';

profileValidate.enableValidation();

cardValidate.enableValidation();


defaultCardList.renderItems() ;

/*
popupImage.setEventListeners(); */
