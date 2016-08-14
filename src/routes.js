import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlanalApp from './components/PlanalApp';
import TodoPage from './containers/TodoPage';
// import AddTodoPage from './components/AddTodoPage.js';
// import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={PlanalApp}>
    <IndexRoute component={TodoPage}/>
    {/*
    <Route path="add-todo" component={AddTodoPage}/>
    <Route path="*" component={NotFoundPage}/>
    */}
  </Route>
);
