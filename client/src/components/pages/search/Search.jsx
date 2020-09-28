import React from 'react';

import styled from 'styled-components';

import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items; center;
`;

function Search() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}

export default Search;
