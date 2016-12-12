import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from '../history';

const middleware = [
  routerMiddleware(hashHistory)
];

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
