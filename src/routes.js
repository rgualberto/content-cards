import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PlanalApp from './components/PlanalApp.jsx';
import ContentPage from './containers/ContentPage.jsx';
import AddCardPage from './containers/AddCardPage.jsx';
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
