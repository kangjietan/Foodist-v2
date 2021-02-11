import React, { Component } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchBusinessesYelp, updateParamsHasNoResults } from '../../../actions/searchActions';

import SearchBar from './SearchBar';

import BusinessesList from './BusinessesList';
import ListPagination from './pagination/ListPagination';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 5rem;
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
    }
  }

  componentDidUpdate(prevProps) {
    const {
      term,
      location,
      offset,
      searchResults,
      searchBusinessesYelp,
      paramsHasNoResults,
      updateParamsHasNoResults
    } = this.props;

    if (searchResults[offset] === undefined && !paramsHasNoResults) {
      let params = {
        term,
        location,
        offset,
      }

      searchBusinessesYelp(params)
        .then((response) => {
          if (response === 'No results') {
            updateParamsHasNoResults(true);
          } else {
            this.setState({ offset });
            updateParamsHasNoResults(false);
          }
        })
        .catch((error) => {
          console.log(error);
          updateParamsHasNoResults(false);
        });
    }
  }

  render() {
    const { searchResults, customList, favoritesList, offset } = this.props;

    return (
      <Container>
        <SearchBar />
        <BusinessesList searchResults={searchResults} customList={customList} favoritesList={favoritesList} offset={offset} />
        {Object.keys(searchResults).length ? <ListPagination offset={offset} /> : null}
      </Container>
    );
  }
}

Search.propTypes = {
  term: PropTypes.string,
  location: PropTypes.string,
  offset: PropTypes.number,
  searchResults: PropTypes.object.isRequired,
  customList: PropTypes.object.isRequired,
  favoritesList: PropTypes.object.isRequired,
  searchBusinessesYelp: PropTypes.func.isRequired,
  paramsHasNoResults: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  term: state.search.term,
  location: state.search.location,
  offset: state.search.offset,
  searchResults: state.search.searchResults,
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
  paramsHasNoResults: state.search.paramsHasNoResults,
});

const mapDispatchToProps = { searchBusinessesYelp, updateParamsHasNoResults };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
