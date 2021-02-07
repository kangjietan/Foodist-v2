import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getBusinessInfoAndUpdate } from '../../../actions/userActions';
import { updateFavoritesListTotalPages } from '../../../actions/favoritesListActions';

import ListBusiness from '../../businesses/ListBusiness';

class FavoritesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      currentPageBusinesses: [],
      businessByPage: {},
      showList: false,
    };
  }

  componentDidMount() {
    this.formatBusinessesByPages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favoritesListCurrentPage !== this.props.favoritesListCurrentPage) {
      this.setCurrentPageBusiness();
    }
  }

  formatBusinessesByPages() {
    const { list, updateFavoritesListTotalPages, favoritesListCurrentPage } = this.props;
    const keys = Object.keys(list);
    const businesses = keys.map((id) => list[id]);
    const pages = Math.floor(keys.length / 10) + 1;

    let businessByPage = {};

    // Slice businesses by 10s
    for (let i = 0; i < pages; i++) {
      businessByPage[i + 1] = businesses.slice(i * 10, ((i + 1) * 10));
    }

    updateFavoritesListTotalPages(pages);
    this.setState({ pages, businessByPage, currentPageBusinesses: businessByPage[favoritesListCurrentPage] }, this.getBusinessesDetails);
  }

  getBusinessesDetails() {
    const { currentPageBusinesses, businessByPage } = this.state;
    const { getBusinessInfoAndUpdate, favoritesListCurrentPage } = this.props;

    let updatedWithInfo = currentPageBusinesses.map((business, idx) => {
      // if only id exists, send request for info
      if (Object.keys(business).length === 1) {
        console.log(`Making request ${idx}`);
        return getBusinessInfoAndUpdate(business)
          .then((response) => { updatedWithInfo[idx] = response })
          .catch((error) => {
            console.log("Failed to get details", error);
            updatedWithInfo[idx] = business;
          });
      } else {
        return business;
      }
    });

    // Upon all completed requests, set the current page list and then show list
    Promise.all(updatedWithInfo).then(() => {
      let newBusinessByPage = Object.assign({}, businessByPage, { [favoritesListCurrentPage]: updatedWithInfo });

      this.setState({ currentPageBusinesses: updatedWithInfo, businessByPage: newBusinessByPage }, () => this.setState({ showList: true }));
    });
  }

  setCurrentPageBusiness() {
    const { favoritesListCurrentPage } = this.props;
    const { businessByPage } = this.state;

    this.setState({ currentPageBusinesses: businessByPage[favoritesListCurrentPage] }, this.getBusinessesDetails);
  }

  render() {
    const { currentPageBusinesses, showList } = this.state;

    if (showList) {
      return (
        currentPageBusinesses.map((business) => <ListBusiness business={business} list='favorites' key={business.id} />)
      );
    }

    return (
      <div></div>
    )
  }
}

FavoritesList.propTypes = {
  getBusinessInfoAndUpdate: PropTypes.func.isRequired,
  updateFavoritesListTotalPages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesListCurrentPage: state.favoritesList.favoritesListCurrentPage,
});

const mapDispatchToProps = { getBusinessInfoAndUpdate, updateFavoritesListTotalPages };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
