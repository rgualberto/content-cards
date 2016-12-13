import reducer from './contentReducer';
import {initialState} from './initialState';
import {saveContent} from '../utils/contentHelper';
import {createEmptyValue} from 'react-rte';
import {
  LOAD_CONTENT,
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_EDITOR,
  CLEAR_CONTENT,
  RESET_CONTENT
} from '../constants/actionTypes';

describe('Content Reducer', () => {
  it('defaults to initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it('handles LOAD_CONTENT', () => {
    const action = {
      type: LOAD_CONTENT
    };

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('handles LOAD_CONTENT with saved content', () => {
    const action = {
            type: LOAD_CONTENT
          },
          extraCard = {
            id: 123,
            title: 'Extra Card',
            content: 'Previously saved card',
            image: 'stock-1'
          },
          expectedState = {
            ...initialState,
            contentCards: [
              ...initialState.contentCards,
              extraCard
            ]
          };

    saveContent(expectedState);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles CLEAR_CONTENT', () => {
    const action = {
            type: CLEAR_CONTENT
          },
          expectedState = {
            ...initialState,
            contentCards: []
          };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles RESET_CONTENT', () => {
    const action = {
            type: RESET_CONTENT
          },
          appState = {
            ...initialState,
            contentCards: []
          };

    expect(reducer(appState, action)).toEqual(initialState);
  });

  it('handles ADD_CARD', () => {
    const newCard = {
            title: 'New Card',
            content: 'Brand new card',
            image: 'stock-1'
          },
          action = {
            type: ADD_CARD,
            cardData: newCard
          },
          newState = reducer(initialState, action);

    expect(newState.contentCards).toContainEqual(newCard);
  });

  it('handles REMOVE_CARD', () => {
    const cardId = 123,
          action = {
            type: REMOVE_CARD,
            cardId
          },
          existingCard = {
            title: 'Existing Card',
            content: 'existing content',
            image: 'stock-1'
          },
          appState = {
            ...initialState,
            contentCards: [
              ...initialState.contentCards,
              {
                id: cardId,
                ...existingCard
              }
            ]
          };

    expect(reducer(appState, action).contentCards).not.toContainEqual(existingCard);
  });

  it('handles UPDATE_EDITOR', () => {
    const editorValue = createEmptyValue(),
          newValue = '<p>Hello World</p>';

    editorValue.value = newValue;

    const action = {
            type: UPDATE_EDITOR,
            value: editorValue
          };

    expect(reducer(initialState, action).editorValue).toEqual(editorValue);
  });
});
