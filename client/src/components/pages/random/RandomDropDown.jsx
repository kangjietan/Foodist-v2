import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateCurrentList } from '../../../actions/randomActions';

import RandomSelectedOption from './RandomSelectedOption';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

const OptionsLimitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const OptionsContainer = styled.div`
  margin-right: 1rem;

  @media screen and (max-width: 700px) {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 396px) {
    margin-bottom: 0.25rem;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const OptionsButton = styled.button`
  background: #2f3640;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.15rem;
  transition: all 0.6s;
  overflow: hidden;
  padding: 0;
  cursor: pointer;

  & img {
    vertical-align: middle;
    transition: 0.6s;
    margin-left: 1rem;
  }

  &:focus {
    outline: none;
  }

  &:focus img {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 750px) {
    width: 250px;
    font-size: 1rem;
  }

  @media screen and (max-width: 510px) {
    width: 100% !important;
    padding-left: 0.1rem;
  }
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  position: absolute;
  background: #2f3640;
  margin-top: 10px;
  padding: 0;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  transition: all 0.4s ease;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  z-index: 2;

  ${OptionsButton}:focus + & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 600px) {
    width: 175px !important;
  }
`;

const ButtonListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: #f5f6fa;
  cursor: pointer;

  &:hover {
    background: #414b57;
  }
`;

const BusinessLimitContainer = styled.div``;

const BusinessLimitButton = styled(OptionsButton)`
  width: 200px;

  @media screen and (max-width: 750px) {
    width: 175px;
    font-size: 1rem;
  }

  @media screen and (max-width: 650px) {
    width: 150px;
  }
`;

const BusinessLimitList = styled(ButtonList)`
  width: 200px;
  height: 200px;

  @media screen and (max-width: 500px) {
    width: 100% !important;
  }
`;

function RandomDropDown({ updateCurrentList }) {
  const [activeOption, setActiveOption] = useState('');
  const [businessLimit, setBusinessLimit] = useState(0);

  let selectLimit = (limit) => setBusinessLimit(limit);
  let selectedActiveOption = <RandomSelectedOption option={activeOption} limit={businessLimit} selectLimit={selectLimit} />;

  const handleListActiveOption = (option) => {
    setActiveOption(option);
    updateCurrentList(option);
  }

  return (
    <Container>
      <OptionsLimitContainer>
        <OptionsContainer>
          <ButtonContainer>
            <OptionsButton type='button'>
              <span>{activeOption ? activeOption : 'Select Randomizing Option'}</span>
              <img src='./images/arrow-down.svg' />
            </OptionsButton>
            <ButtonList>
              <ButtonListItem onClick={() => handleListActiveOption('Term and Location')}>Term and Location</ButtonListItem>
              <ButtonListItem onClick={() => handleListActiveOption('Your Favorites')}>Your Favorites</ButtonListItem>
              <ButtonListItem onClick={() => handleListActiveOption('Custom List')}>Custom List</ButtonListItem>
            </ButtonList>
          </ButtonContainer>
        </OptionsContainer>
        {
          activeOption === 'Term and Location'
            ?
            <BusinessLimitContainer>
              <ButtonContainer>
                <BusinessLimitButton type='button'>
                  <span>{businessLimit ? `${businessLimit} businesses` : 'Select Limit'}</span>
                  <img src='./images/arrow-down.svg' />
                </BusinessLimitButton>
                <BusinessLimitList>
                  <ButtonListItem onClick={() => setBusinessLimit(50)}>50 businesses</ButtonListItem>
                  <ButtonListItem onClick={() => setBusinessLimit(100)}>100 businesses</ButtonListItem>
                  <ButtonListItem onClick={() => setBusinessLimit(150)}>150 businesses</ButtonListItem>
                  <ButtonListItem onClick={() => setBusinessLimit(200)}>200 businesses</ButtonListItem>
                  <ButtonListItem onClick={() => setBusinessLimit(250)}>250 businesses</ButtonListItem>
                </BusinessLimitList>
              </ButtonContainer>
            </BusinessLimitContainer>
            :
            null
        }
        {activeOption === 'Your Favorites' || activeOption === 'Custom List' ? selectedActiveOption : null}
      </OptionsLimitContainer>
      {activeOption === 'Term and Location' ? selectedActiveOption : null}
    </Container>
  );
}

RandomDropDown.propTypes = {};

const mapDispatchToProps = { updateCurrentList };

export default connect(null, mapDispatchToProps)(RandomDropDown);
