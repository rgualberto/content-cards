import {
  loadContent,
  clearContent,
  resetContent,
  saveNewCard,
  removeCard,
  updateEditor
} from './ContentActions.js';
import {
  LOAD_CONTENT,
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_EDITOR,
  CLEAR_CONTENT,
  RESET_CONTENT
} from '../constants/actionTypes';

describe('Content Actions', () => {
  it('dispatches loadContent', () => {
    const action = {
      type: LOAD_CONTENT
    };

    expect(loadContent()).toEqual(action);
  });

  it('dispatches clearContent', () => {
    const action = {
      type: CLEAR_CONTENT
    };

    expect(clearContent()).toEqual(action);
  });

  it('dispatches resetContent', () => {
    const action = {
      type: RESET_CONTENT
    };

    expect(resetContent()).toEqual(action);
  });

  it('dispatches saveNewCard', () => {
    const cardData = {
      name: 'testCard'
    };
    const action = {
      type: ADD_CARD,
      cardData
    };

    expect(saveNewCard(cardData)).toEqual(action);
  });

  it('dispatches removeCard', () => {
    const cardId = '123';
    const action = {
      type: REMOVE_CARD,
      cardId
    };

    expect(removeCard(cardId)).toEqual(action);
  });

  it('dispatches updateEditor', () => {
    const value = {
      editorVal: 'asd'
    };
    const action = {
      type: UPDATE_EDITOR,
      value
    };

    expect(updateEditor(value)).toEqual(action);
  });
});
