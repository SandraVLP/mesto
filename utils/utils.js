import { items, popupImage, } from './constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';



export const renderCard = (data) => {
    const card = new Card({data, 
      handleCardClick: () => {
        popupImage.open(data.name, data.link);
      } }, 
      "#cardTemplate")
      return card.generateCard();
  
  }
  
  export const defaultCardList = new Section({
    data: items,
    renderer: (item) => {
      const cardElement = renderCard(item);
      defaultCardList.addItem(cardElement);
    }
  },
  ".cards"); /* ???? */

