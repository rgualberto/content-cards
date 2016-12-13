import _ from 'lodash';
import {
  LOAD_CONTENT,
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_EDITOR,
  CLEAR_CONTENT,
  RESET_CONTENT
} from '../constants/actionTypes';
import {initialState} from './initialState';
import {createEmptyValue} from 'react-rte';
import {generateUniqueId} from '../utils/idHelper';
import {saveContent, getContent} from '../utils/contentHelper';

export default function contentReducer(state = initialState, action = {}) {

  switch (action.type) {
    case LOAD_CONTENT:
      return {
        ...getContent(state),
        isLoaded: true
      };

    case CLEAR_CONTENT: {
      const newState = {
        ...state,
        contentCards: []
      };

      // save newState
      saveContent(newState);

      return newState;
    }

    case RESET_CONTENT: {
      const newState = {
        ...state,
        contentCards: initialState.contentCards
      };

      // save newState
      saveContent(newState);

      return newState;
    }

    case ADD_CARD: {
      const newCard = {
        ...action.cardData,
        id: generateUniqueId(state.contentCards)
      };

      const newState = {
        ...state,
        contentCards: [
          ...state.contentCards,
          newCard
        ],
        editorValue: createEmptyValue() // reset editor value
      };

      // save newState
      saveContent(newState);

      return newState;
    }

    case REMOVE_CARD: {
      const newContentCards = _.reject(state.contentCards, card => card.id === action.cardId),
            newState = {
              ...state,
              contentCards: newContentCards
            };

      // save newState
      saveContent(newState);

      return newState;
    }

    case UPDATE_EDITOR: {
      return {
        ...state,
        editorValue: action.value
      };
    }

    default:
      return state;
  }
}
