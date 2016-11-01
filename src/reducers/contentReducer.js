import _ from 'lodash';
import {
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_EDITOR
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {createEmptyValue} from 'react-rte';
import {generateUniqueId} from '../utils/idHelper';

export default function contentReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CARD:
      newState = objectAssign({}, state);
      action.cardData.id = generateUniqueId(state.contentCards);
      newState.contentCards.push(action.cardData);

      // reset editor value
      newState.editorValue = createEmptyValue();

      return newState;

    case REMOVE_CARD: {
      const newContentCards = _.reject(state.contentCards, card => card.id === action.cardId);

      return {
        ...state,
        contentCards: newContentCards
      };
    }

    case UPDATE_EDITOR:
      newState = objectAssign({}, state);
      newState.editorValue = action.value;

      return newState;

    default:
      return state;
  }
}
