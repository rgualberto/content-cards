import {ADD_CARD, UPDATE_EDITOR} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import {createEmptyValue} from 'react-rte';

export default function contentReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CARD:
      newState = objectAssign({}, state);
      newState.contentCards.push(action.cardData);

      // reset editor value
      newState.editorValue = createEmptyValue();

      return newState;

    case UPDATE_EDITOR:
      newState = objectAssign({}, state);
      newState.editorValue = action.value;

      return newState;

    default:
      return state;
  }
}