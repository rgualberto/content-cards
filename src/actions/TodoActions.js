import * as types from '../constants/actionTypes';

export function saveNewCard(cardData) {
  return {type: types.ADD_CARD, cardData};
}
