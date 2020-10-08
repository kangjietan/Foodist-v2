import React, { Component } from 'react';

import PropTypes from 'prop-types';

import GlobalStyle from './theme/GlobalStyle';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import List from './pages/list/List';
import Random from './pages/random/Random';
import Login from './pages/login/Login';

import NavBar from './NavBar';
import ScrollTop from './scroll/ScrollTop';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <NavBar />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/loading' component={() => <Redirect to='/search' />} />
              <Route exact path='/:user/list' component={List} />
              <Route exact path='/random' component={Random} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <ScrollTop />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
