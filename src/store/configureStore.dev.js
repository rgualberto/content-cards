import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from '../history';

const middleware = [
  routerMiddleware(hashHistory)
];

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
