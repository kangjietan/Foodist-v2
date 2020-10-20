import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const SelectedContainer = styled.div`
  display: flex;

  @media screen and (max-width: 400px) {
    margin-left: 0 !important;
  }
`;

const RandomizeButton = styled.button`
  background: #2f3640;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  color: white;
  cursor: pointer;
`;

const TermLocationInputContainer = styled.div`
  margin-right: 1rem;
`;

const Input = styled.input`
  height: 40px;
  font-size: 1.1rem;
  padding: 0;
  border: 1px solid #2f3640;
  border-radius: 5px;
  padding-left: 0.5rem;
  transition: all 0.5s;

  &:focus {
    background: #2f3640;
    color: white;
  }

  @media screen and (max-width: 700px) {
    width: 175px;
  }
`;

const TermInput = styled(Input)`
  margin-right: 0.2rem;
`;

const LocationInput = styled(Input)``;

function RandomSelectedOption({ option }) {
  if (option === 'Term and Location') {
    return (
      <SelectedContainer>
        <TermLocationInputContainer>
          <TermInput placeholder="Enter Term"></TermInput>
          <LocationInput placeholder="Enter Location"></LocationInput>
        </TermLocationInputContainer>
        <RandomizeButton>Randomize</RandomizeButton>
      </SelectedContainer>
    );
  } else if (option === 'Your Favorites') {
    return (
      <SelectedContainer style={{ marginLeft: '0.75rem' }}>
        <RandomizeButton>Randomize</RandomizeButton>
      </SelectedContainer>
    );
  } else if (option === 'Custom List') {
    return (
      <SelectedContainer style={{ marginLeft: '0.75rem' }}>
        <RandomizeButton>Randomize</RandomizeButton>
      </SelectedContainer>
    );
  }

  return null;
}

export default RandomSelectedOption;
