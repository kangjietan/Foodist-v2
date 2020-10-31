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

function BusinessesList({ searchResults, customList, favoritesList, offset }) {
  let results = searchResults[offset] ? searchResults[offset] : {};
  let businesses = Object.keys(results).map((id) => results[id]);

  return (
    <Container>
      {businesses.map((business) => {
        let customListAdded = customList[business.id] === undefined ? false : true;
        let favoritesListAdded = favoritesList[business.id] === undefined ? false : true;

        let listAdded = {
          customListAdded,
          favoritesListAdded,
        };

        return <ResultBusiness key={business.id} business={business} listAdded={listAdded} />
      })}
    </Container>
  );
}

BusinessesList.propTypes = {
  searchResults: PropTypes.object.isRequired,
  customList: PropTypes.object.isRequired,
  favoritesList: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired,
}

export default BusinessesList;
