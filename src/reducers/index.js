import { combineReducers } from 'redux';
import allContent from './contentReducer';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

export const reducers = {
  allContent,
  routing: routerReducer,
  form: formReducer
};

export default combineReducers(reducers);
