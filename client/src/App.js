import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

import Home from './views/Home';
import User from './views/User';
import MainTemplate from './templates/MainTemplate';
import Header from './components/organism/Header';

function App() {
  return (
    <Router>
      <MainTemplate>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.user} component={User} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

//Slideable Navigation Drawer
// https://swiperjs.com/demos/
export default App;
