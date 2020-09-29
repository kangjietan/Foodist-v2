import React from 'react';

import styled from 'styled-components';

import SearchBar from './SearchBar';

import BusinessesList from './BusinessesList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Search(props) {
  return (
    <Container>
      <SearchBar {...props} />
      <BusinessesList />
    </Container>
  );
}

export default Search;
