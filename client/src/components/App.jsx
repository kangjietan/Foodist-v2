import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import List from './pages/list/List';
import Random from './pages/random/Random';
import Login from './pages/login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/:user/list" component={List} />
            <Route exact path="/random" component={Random} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
