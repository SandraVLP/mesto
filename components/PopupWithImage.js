import Popup from "./Popup.js";
import { popupImage, popupImageTitle } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor({ popupSelector, }) {
        super(popupSelector);
    };

    open(name, link){
        popupImage.src = link;
        popupImage.alt = name;
        popupImageTitle.textContent = name;
        super.open();
        
    };
}