import React, { Component } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchBusinessesYelp } from '../../../actions/searchActions';

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
      term: '',
      location: '',
      offset: 0,
    }
  }

  componentDidUpdate(prevProps) {
    const { term, location, offset, searchResults, searchBusinessesYelp } = this.props;
    const { term: prevTerm, location: prevLocation, offset: prevOffset } = prevProps;

    if (prevTerm !== term || prevLocation !== location) {
      this.setState({ term, location });
    }

    if (searchResults[offset] === undefined) {
      let params = {
        term,
        location,
        offset,
      }

      searchBusinessesYelp(params)
        .then(() => {
          this.setState({ offset });
        });
    }

    if (prevOffset !== offset) {
      this.setState({ offset });
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
};

const mapStateToProps = (state) => ({
  term: state.search.term,
  location: state.search.location,
  offset: state.search.offset,
  searchResults: state.search.searchResults,
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
});

const mapDispatchToProps = { searchBusinessesYelp };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
