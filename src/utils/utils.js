import { popupPreview,  } from './constants.js';

import Card from '../components/Card.js';




export const renderCard = (data) => {
    const card = new Card(data, "#cardTemplate", () => {
        popupPreview.open(data.name, data.link)
    });
    return card.generateCard();
  }
  
 

