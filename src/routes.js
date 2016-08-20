import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlanalApp from './components/PlanalApp';
import TodoPage from './containers/TodoPage';
import AddCardPage from './containers/AddCardPage.js';
// import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={PlanalApp}>
    <IndexRoute component={TodoPage}/>
    <Route path="add-card" component={AddCardPage}/>
    {/*
    <Route path="*" component={NotFoundPage}/>
    */}
  </Route>
);
