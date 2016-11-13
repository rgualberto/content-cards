import * as types from '../constants/actionTypes';

export function loadContent() {
  return {type: types.LOAD_CONTENT};
}

export function clearContent() {
  return {type: types.CLEAR_CONTENT};
}

export function resetContent() {
  return {type: types.RESET_CONTENT};
}

export function saveNewCard(cardData) {
  return {type: types.ADD_CARD, cardData};
}

export function removeCard(cardId) {
  return {type: types.REMOVE_CARD, cardId};
}

export function updateEditor(value) {
  return {type: types.UPDATE_EDITOR, value};
}
