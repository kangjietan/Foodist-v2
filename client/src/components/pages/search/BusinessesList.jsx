import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import ResultBusiness from '../../businesses/ResultBusiness';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;

function BusinessesList(props) {
  let offset = 0;
  let results = props.searchResults[offset] ? props.searchResults[offset] : {};
  let businesses = Object.keys(results).map((id) => results[id]);

  return (
    <Container>
      {businesses.map((business) => <ResultBusiness key={business.id} business={business} />)}
    </Container>
  );
}

BusinessesList.propTypes = {
  searchResults: PropTypes.object.isRequired,
}

export default BusinessesList;
