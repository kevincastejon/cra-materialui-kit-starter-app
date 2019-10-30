import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line
import './assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from './views/Components/Components';
import LandingPage from './views/LandingPage/LandingPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import LoginPage from './views/LoginPage/LoginPage';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
