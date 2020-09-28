import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  // width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
`;

const FormInputContainer = styled.div`
  position: relative;
  height: 50px;
  overflow: hidden;

  // background: #fff;
  // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  margin-bottom: 2rem;
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
  // border-bottom: 1px solid black;

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
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTermActive: false,
      locationActive: false,
    };

    this.enableSearchTermActive = this.enableSearchTermActive.bind(this);
    this.disableSearchTermActive = this.disableSearchTermActive.bind(this);
    this.enableLocationActive = this.enableLocationActive.bind(this);
    this.disableLocationActive = this.disableLocationActive.bind(this);
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

  render() {
    const { searchTermActive, locationActive } = this.state;
    let searchTermStyle = {}, locationStyle = {};

    if (searchTermActive) {
      searchTermStyle = {
        transform: "translateY(-150%)",
        fontSize: "14px",
        color: "#5fa8d3",
      }
    }

    if (locationActive) {
      locationStyle = {
        transform: "translateY(-150%)",
        fontSize: "14px",
        color: "#5fa8d3",
      }
    }

    return (
      <Container>
        <FormContainer>
          <FormInputContainer>
            <FormInput onFocus={this.enableSearchTermActive} onBlur={this.disableSearchTermActive} />
            <FormLabel>
              <FormLabelText style={searchTermStyle}>Term</FormLabelText>
            </FormLabel>
          </FormInputContainer>
          <FormInputContainer>
            <FormInput onFocus={this.enableLocationActive} onBlur={this.disableLocationActive} />
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
