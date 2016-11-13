import _ from 'lodash';
import {
  LOAD_CONTENT,
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_EDITOR,
  CLEAR_CONTENT,
  RESET_CONTENT
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {createEmptyValue} from 'react-rte';
import {generateUniqueId} from '../utils/idHelper';
import {saveContent, getContent} from '../utils/contentHelper';

export default function contentReducer(state = initialState, action = {}) {
  let newState;

  switch (action.type) {
    case LOAD_CONTENT:
      return {
        isLoaded: true,
        ...getContent(state)
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

    case ADD_CARD:
      newState = objectAssign({}, state);
      action.cardData.id = generateUniqueId(state.contentCards);
      newState.contentCards.push(action.cardData);

      // reset editor value
      newState.editorValue = createEmptyValue();

      // save newState
      saveContent(newState);

      return newState;

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

    case UPDATE_EDITOR:
      newState = objectAssign({}, state);
      newState.editorValue = action.value;

      return newState;

    default:
      return state;
  }
}
