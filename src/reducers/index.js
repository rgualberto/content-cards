// Set up your root reducer here...
import { combineReducers } from 'redux';
import allContent from './contentReducer';
import {reducer as formReducer} from 'redux-form';

//CHECK WHAT THIS GUY IS DOING
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    allContent,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;