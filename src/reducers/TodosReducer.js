import {ADD_CARD} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function todosReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CARD:
      newState = objectAssign({}, state);
      action.cardData.todos = [action.cardData.todo];
      newState.todoCards.push(action.cardData);

      return newState;

    default:
      return state;
  }
}
