import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { setUser } from './actions/user';

import Home from './views/Home';
import MainTemplate from './templates/MainTemplate';
import Header from './components/organism/Header';
import { GET_USER_INFO } from './apollo/user';

const App = ({ setUserFn }) => {
  const { data } = useQuery(GET_USER_INFO);

  if (data) setUserFn(data.me);

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
};

const mapDispatchToProps = dispatch => ({
  setUserFn: type => dispatch(setUser(type))
});

//Slideable Navigation Drawer
// https://swiperjs.com/demos/
export default connect(null, mapDispatchToProps)(App);
