import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getBusinessesWithinLimit, updateRandomBusiness } from '../../../actions/randomActions';

import { getRandomInt } from '../../utils';

const SelectedContainer = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
   flex-direction: column; 
  }

  @media screen and (max-width: 400px) {
    margin-left: 0 !important;
  }
`;

const SelectedForm = styled.form`
  display: flex;

  @media screen and (max-width: 500px) {
  flex-direction: column; 
  }

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

  @media screen and (max-width: 410px) {
    width: 100%;
    border: 1px solid #2f3640;
  }
`;

const TermLocationInputContainer = styled.div`
  display: flex;
  margin-right: 1rem;

  @media screen and (max-width: 500px) {
    margin-right: 0;
    margin-bottom: 0.25rem;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
    margin-bottom: 0;
  }
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

  @media screen and (max-width: 410px) {
    width: 100%;
    padding-left: 0;
    margin-bottom: 0.25rem;
  }
`;

const TermInput = styled(Input)`
  margin-right: 0.2rem;
  @media screen and (max-width: 410px) {
    width: 100%;
    margin-right: 0;
  }
`;

const LocationContainer = styled.div``;

const LocationInput = styled(Input)`
  transition: all 0.5s;

  @media screen and (max-width: 410px) {
    opacity: 0;
    height: 0;
    margin-bottom: 0;
  }

  ${TermInput}:focus + ${LocationContainer} &,
  &:focus {
    opacity: 1;
    height: 40px;
    margin-bottom: 0.25rem;
  }
`;

const CurrentLocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  background: #2f3640;
  color: white;
  letter-spacing: 0.05rem;
  visibility: hidden;
  transition: all 0.6s;
  cursor: pointer;

  ${LocationInput}:focus + & {
    visibility: visible;
    height: 40px;
    margin-bottom: 0.1rem;
  }
`;

const EmptyListContainer = styled.div``;

const EmptyListButton = styled.button`
  background: #2f3640;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  color: white;
  cursor: pointer;
`;

function RandomSelectedOption(props) {
  const {
    limit,
    option,
    customList,
    selectLimit,
    favoritesList,
    updateRandomBusiness,
    randomBusinessesList,
    getBusinessesWithinLimit,
  } = props;

  const [locationFocus, setLocationFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocaction, setSearchLocation] = useState('');
  const [generateRandomBusiness, setGenerateRandomBusiness] = useState(false);

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    if (name === 'searchTerm') {
      setSearchTerm(value);
    } else if (name === 'searchLocation') {
      setSearchLocation(value);
    }
  };

  const handleTermLocationRandomization = (event) => {
    event.preventDefault();

    let params = { term: searchTerm, location: searchLocaction };
    let businessLimit = limit;

    if (limit === 0) {
      selectLimit(50);
      businessLimit = 50;
    }

    getBusinessesWithinLimit(params, businessLimit)
      .then(() => {
        setGenerateRandomBusiness(true);
      });
  };

  const handleCustomListRandomization = () => {
    let list = Object.keys(customList);
    let randomIdx = getRandomInt(0, list.length);
    updateRandomBusiness(customList[list[randomIdx]]);
  };

  const handleFavoritesListRandomization = () => {
    let list = Object.keys(favoritesList);
    let randomIdx = getRandomInt(0, list.length);
    updateRandomBusiness(favoritesList[list[randomIdx]]);
  };

  if (generateRandomBusiness) {
    let randomIdx = getRandomInt(0, randomBusinessesList.length);
    updateRandomBusiness(randomBusinessesList[randomIdx]);
    setGenerateRandomBusiness(false);
  }

  if (option === 'Term and Location') {
    return (
      <SelectedContainer>
        <SelectedForm onSubmit={handleTermLocationRandomization}>
          <TermLocationInputContainer>
            <TermInput
              name='searchTerm'
              placeholder='Enter Term'
              autoComplete='off'
              maxLength='64'
              value={searchTerm}
              onBlur={() => setLocationFocus(false)}
              onFocus={() => setLocationFocus(true)}
              onChange={handleInputChange}
            />
            <LocationContainer style={{ height: locationFocus ? 'auto' : '0px' }}>
              <LocationInput
                name='searchLocation'
                placeholder='Enter Location'
                autoComplete='off'
                maxLength='80'
                required='require'
                value={searchLocaction}
                onBlur={() => setLocationFocus(false)}
                onFocus={() => setLocationFocus(true)}
                onChange={handleInputChange}
              />
              <CurrentLocationContainer>
                <span>Current Location</span>
              </CurrentLocationContainer>
            </LocationContainer>
          </TermLocationInputContainer>
          <RandomizeButton type="submit">Randomize</RandomizeButton>
        </SelectedForm>
      </SelectedContainer>
    );
  } else if (option === 'Your Favorites') {
    // If list is not empty
    if (Object.keys(favoritesList).length > 0) {
      return (
        <SelectedContainer style={{ marginLeft: '0.75rem' }}>
          <RandomizeButton onClick={handleFavoritesListRandomization}>Randomize</RandomizeButton>
        </SelectedContainer>
      );
    } else {
      // List is empty
      return (
        <EmptyListContainer>
          <EmptyListButton>Add to list</EmptyListButton>
        </EmptyListContainer>
      );
    }
  } else if (option === 'Custom List') {
    // If list is not empty
    if (Object.keys(customList).length > 0) {
      return (
        <SelectedContainer style={{ marginLeft: '0.75rem' }}>
          <RandomizeButton onClick={handleCustomListRandomization}>Randomize</RandomizeButton>
        </SelectedContainer>
      );
    } else {
      // List is empty
      return (
        <EmptyListContainer>
          <EmptyListButton>Add to list</EmptyListButton>
        </EmptyListContainer>
      );
    }
  }

  return null;
}

const mapStateToProps = (state) => ({
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
  randomBusinessesList: state.random.randomBusinessesList,
});

const mapDispatchToProps = { getBusinessesWithinLimit, updateRandomBusiness };

export default connect(mapStateToProps, mapDispatchToProps)(RandomSelectedOption);
