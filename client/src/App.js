import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { setUser } from './data/actions/user';
import { GET_USER_INFO } from './data/apollo/user';

import Indicator from './components/atoms/Indicator';
import MainTemplate from './templates/MainTemplate';
import Header from './components/organism/Header';

import Home from './views/Home';
import FavouritesPage from './views/FavouritesPage';

const App = ({ setUserFn }) => {
  //check is login
  const { loading } = useQuery(GET_USER_INFO, {
    onCompleted: data => setUserFn(data.me),
  });

  if (loading) return <Indicator />;

  return (
    <Router>
      <MainTemplate>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.favourites} component={FavouritesPage} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  setUserFn: type => dispatch(setUser(type)),
});

//Slideable Navigation Drawer
// https://swiperjs.com/demos/
export default connect(null, mapDispatchToProps)(App);
