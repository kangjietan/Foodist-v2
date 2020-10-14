import React, { Component } from 'react';

import PropTypes from 'prop-types';

import ListBusiness from '../../businesses/ListBusiness';

class FavoritesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      currentPage: 1,
      currentPageBusinesses: [],
      businessByPage: {},
    };
  }

  componentDidMount() {
    const { list } = this.props;
    const keys = Object.keys(list);
    const businesses = keys.map((id) => list[id]);
    const pages = Math.floor(keys.length / 10) + 1;

    let businessByPage = {};

    for (let i = 0; i < pages; i++) {
      // store by 10s
      businessByPage[i] = businesses.slice(i * 10, ((i+1) * 10));
    }

    console.log(list);
    console.log(businessByPage);

    this.setState({ pages, businessByPage, });
  }

  render() {
    const { currentPageBusinesses, currentPage } = this.state;

    return (
      currentPageBusinesses.map((business) => <ListBusiness business={business} list='favorites' />)
    );
  }
}

FavoritesList.propTypes = {};

export default FavoritesList;
