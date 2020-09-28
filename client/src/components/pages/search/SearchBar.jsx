import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 1220px;
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
`;

const FormInputContainer = styled.div`
  position: relative;
  height: 75px;
  overflow: hidden;

  // background: #fff;
  // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  color: #b19cd9;
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 20px;
  border: none;
  outline: none;

  &:focus + ${FormLabel}::after,
  &:active + ${FormLabel}::after {
    transform: translateX(0%);
  }
`;

const FormLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;

const FormLabelText = styled.span`
  position: absolute;
  bottom: 6px;
  left: 0;
  transition: all 0.3s ease;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTermActive: false,
      locationActive: false,
      searchInput: "",
      locationInput: "",
    };

    this.enableSearchTermActive = this.enableSearchTermActive.bind(this);
    this.disableSearchTermActive = this.disableSearchTermActive.bind(this);
    this.enableLocationActive = this.enableLocationActive.bind(this);
    this.disableLocationActive = this.disableLocationActive.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  enableSearchTermActive() {
    this.setState({ searchTermActive: true });
  }

  disableSearchTermActive() {
    this.setState({ searchTermActive: false });
  }

  enableLocationActive() {
    this.setState({ locationActive: true });
  }

  disableLocationActive() {
    this.setState({ locationActive: false });
  }

  handleFormChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { searchTermActive, locationActive, searchInput, locationInput } = this.state;
    let searchTermStyle = {}, locationStyle = {};

    let labelFocusStyle = {
      transform: "translateY(-150%)",
      fontSize: "14px",
      color: "#5fa8d3",
    };

    let labelFilledStyle = {
      transform: "translateY(-150%)",
    };

    if (searchTermActive) searchTermStyle = labelFocusStyle;
  
    if (locationActive)  locationStyle = labelFocusStyle;

    if (!searchTermActive && searchInput.length !== 0) searchTermStyle = labelFilledStyle;

    if (!locationActive && locationInput.length !== 0) locationStyle = labelFilledStyle;

    return (
      <Container>
        <FormContainer>
          <FormInputContainer>
            <FormInput
              name="searchInput"
              onFocus={this.enableSearchTermActive}
              onBlur={this.disableSearchTermActive}
              value={searchInput}
              onChange={this.handleFormChange} />
            <FormLabel>
              <FormLabelText style={searchTermStyle}>Term</FormLabelText>
            </FormLabel>
          </FormInputContainer>
          <FormInputContainer>
            <FormInput
              name="locationInput"
              onFocus={this.enableLocationActive}
              onBlur={this.disableLocationActive}
              value={locationInput}
              onChange={this.handleFormChange} />
            <FormLabel>
              <FormLabelText style={locationStyle}>Location</FormLabelText>
            </FormLabel>
          </FormInputContainer>
        </FormContainer>
      </Container>
    );
  }
}

export default SearchBar;
