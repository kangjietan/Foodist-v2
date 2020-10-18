import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import RandomSelectedOption from './RandomSelectedOption';

const Container = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  background: #2f3640;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  transition: 0.6s;
  overflow: hidden;
  padding: 0;

  &:focus {
    outline: none;
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
  width: 225px;
  height: 100px;
  border-radius: 5px;
  transition: all 0.4s ease;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;

  ${AddButton}:focus + & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
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

function RandomDropDown(props) {
  const [activeOption, setActiveOption] = useState('custom-list');
  return (
    <Container>
      <ButtonContainer>
        <AddButton type='button'>
          Select Randomizing Option
          </AddButton>
        <ButtonList>
          <ButtonListItem>Term and Location</ButtonListItem>
          <ButtonListItem>Your Favorites</ButtonListItem>
          <ButtonListItem>Custom List</ButtonListItem>
        </ButtonList>
      </ButtonContainer>
      <RandomSelectedOption />
    </Container>
  );
}

RandomDropDown.propTypes = {};

export default RandomDropDown;
