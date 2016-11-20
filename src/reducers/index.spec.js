import {reducers} from './index';
import allContent from './contentReducer';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

describe('Reducers', () => {
  it('contains required reducers', () => {
    const requiredReducers = {
      allContent,
      routing: routerReducer,
      form: formReducer
    };

    Object.keys(requiredReducers).forEach(key => {
      expect(Object.keys(reducers)).toContain(key);
    });
  });
});
