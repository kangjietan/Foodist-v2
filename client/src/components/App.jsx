import React, { Component } from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';

import GlobalStyle from './theme/GlobalStyle';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import List from './pages/list/List';
import Random from './pages/random/Random';
import Login from './pages/login/Login';

import { connect } from 'react-redux';
import { setUserIsLoggedIn, getUserFavoritesList, clearFavoritesList } from '../actions/userActions';

import NavBar from './NavBar';
import ScrollTop from './scroll/ScrollTop';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateUserFavoritesList = this.updateUserFavoritesList.bind(this);
    this.updateUserFavoritesListsIfLoggedIn = this.updateUserFavoritesListsIfLoggedIn.bind(this);
    this.checkIfUserLoggedInAndGetFavoritesList = this.checkIfUserLoggedInAndGetFavoritesList.bind(this);
  }

  componentDidMount() {
    this.checkIfUserLoggedInAndGetFavoritesList();

    // Update list if user closes/refreshes browser
    window.addEventListener('beforeunload', this.updateUserFavoritesListsIfLoggedIn);
  }

  componentWillUnmount() {
    this.updateUserFavoritesListsIfLoggedIn();
    window.removeEventListener('beforeunload', this.updateUserFavoritesListsIfLoggedIn);
  }

  componentDidUpdate(prevProps) {
    // Update list if user logouts
    if (this.props.userLoggedIn === false && prevProps.userLoggedIn === true) {
      this.updateUserFavoritesList();
    }

    // Get list if user logs in
    if (this.props.userLoggedIn === true && prevProps.userLoggedIn === false) {
      this.checkIfUserLoggedInAndGetFavoritesList();
    }
  }

  updateUserFavoritesList() {
    const { favoritesList, userLoggedIn, clearFavoritesList } = this.props;
    let businessIds = Object.keys(favoritesList);

    axios.post('/user/favoriteslist/update', JSON.stringify(businessIds))
      .then((response) => {
        if (!userLoggedIn) {
          clearFavoritesList();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUserFavoritesListsIfLoggedIn() {
    if (this.props.userLoggedIn) {
      this.updateUserFavoritesList();
    }
  }

  checkIfUserLoggedInAndGetFavoritesList() {
    const { setUserIsLoggedIn, getUserFavoritesList } = this.props;
    // If user reloads page, check session
    axios.get('/user/authenticated')
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setUserIsLoggedIn(true);
          getUserFavoritesList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
              <Route exact path='/list' component={List} />
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

App.propTypes = {};

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.userLoggedIn,
  favoritesList: state.user.favoritesList,
});

const mapDispatchToProps = { setUserIsLoggedIn, getUserFavoritesList, clearFavoritesList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
