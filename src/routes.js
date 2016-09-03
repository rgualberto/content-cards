import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlanalApp from './components/PlanalApp';
import ContentPage from './containers/ContentPage';
import AddCardPage from './containers/AddCardPage';
// import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={PlanalApp}>
    <IndexRoute component={ContentPage}/>
    <Route path="add-card" component={AddCardPage}/>
    {/*
    <Route path="*" component={NotFoundPage}/>
    */}
  </Route>
);
