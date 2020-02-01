import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

import Home from './views/Home';
import MainTemplate from './templates/MainTemplate';
import Header from './components/organism/Header';

function App() {
  return (
    <Router>
      <MainTemplate>
        <Header />
        <Switch>
          <Route path={routes.home} component={Home} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
