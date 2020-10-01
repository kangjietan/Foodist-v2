import React, { Component } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SearchBar from './SearchBar';

import BusinessesList from './BusinessesList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
    }
  }

  componentDidUpdate(prevProps) {
    const { term, location } = this.props;
    const { term: prevTerm, location: prevLocation } = prevProps;

    if (prevTerm !== term || prevLocation !== location) {
      this.setState({ term, location });
    }
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <BusinessesList searchResults={this.props.searchResults} />
      </Container>
    );
  }
}

Search.propTypes = {
  term: PropTypes.string,
  location: PropTypes.string,
  searchResults: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  term: state.search.term,
  location: state.search.location,
  searchResults: state.search.searchResults,
});

export default connect(mapStateToProps, null)(Search);
