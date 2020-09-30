import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { connect } from 'react-redux';

import ResultBusiness from '../../businesses/ResultBusiness';

const Container = styled.div`
margin: 5rem 0;
`;

function BusinessesList(props) {
  let offset = 0;
  let results = props.searchResults[offset] ? props.searchResults[offset] : {};
  let businesses = Object.keys(results).map((id) => results[id]);
  
  return (
    <Container>
      {businesses.map((business) => <ResultBusiness business={business} />)}
    </Container>
  );
}

BusinessesList.propTypes = {
  searchResults: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
});

export default connect(mapStateToProps, null)(BusinessesList);
