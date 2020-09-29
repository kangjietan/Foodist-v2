import React, { Component } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchBusinessesYelp } from '../../../actions/searchActions';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
  width: 100%;
  max-width: 1200px;
  font-size: 1.25rem;
`;

const FormContainer = styled.div`
  max-width: 1200px;
  background: #b19cd9;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;

  @media screen and (max-width: 600px) {
    & {
      background: none;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormInputContainer = styled.div`
  position: relative;
  height: 75px;
  overflow: hidden;
  width: 100%;
  color: black;
  transition: all 0.4s ease;

  &:first-child {
    margin-right: 0.10rem;
  }

  @media screen and (max-width: 600px) {
    &:first-child {
      margin-right: 0rem;
    }

    &:nth-child(2) {
      width: 0%;
      height: 0;
    }

    &:first-child:hover + &:nth-child(2),
    &:first-child:focus + &:nth-child(2),
    &:first-child:active + &:nth-child(2) {
      width: 100%;
      height: 75px;
    }

    &:nth-child(2):hover,
    &:nth-child(2):focus,
    &:nth-child(2):active {
      width: 100%;
      height: 75px;
    }
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 20px;
  border: none;
  outline: none;
  font-size: 1rem;

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
  padding: 0.10rem 0.25rem;
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  padding: 0.5rem 0.5rem;
  margin: auto;
  cursor: pointer;
  
  & svg {
    width: 3rem;
    color: #5fa8d3;
  }

  @media screen and (max-width: 600px) {
    & {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0.5rem 0;
      background: #b19cd9;
    }
  }
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
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
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

  handleFormSubmission(event) {
    event.preventDefault();

    const { searchInput: term, locationInput: location } = this.state;
    const params = {
      term,
      location,
      offset: 0,
    };

    this.props.searchBusinessesYelp(params);
    this.props.history.push(`/search?term=${term}&location=${location}`);
  }

  render() {
    const { searchTermActive, locationActive, searchInput, locationInput } = this.state;

    let searchTermStyle = {}, locationStyle = {};

    let labelFocusStyle = {
      transform: "translateY(-140%)",
      fontSize: "0.9rem",
      color: "#5fa8d3",
    };

    let labelFilledStyle = {
      transform: "translateY(-140%)",
    };

    if (searchTermActive) searchTermStyle = labelFocusStyle;

    if (locationActive) locationStyle = labelFocusStyle;

    if (!searchTermActive && searchInput.length !== 0) searchTermStyle = labelFilledStyle;

    if (!locationActive && locationInput.length !== 0) locationStyle = labelFilledStyle;

    return (
      <Container>
        <FormContainer>
          <SearchForm onSubmit={this.handleFormSubmission}>
            <FormInputContainer>
              <FormInput
                type="text"
                name="searchInput"
                autoComplete="off"
                required="required"
                maxLength="64"
                onFocus={this.enableSearchTermActive}
                onBlur={this.disableSearchTermActive}
                value={searchInput}
                onChange={this.handleFormChange}
              />
              <FormLabel>
                <FormLabelText style={searchTermStyle}>Term</FormLabelText>
              </FormLabel>
            </FormInputContainer>
            <FormInputContainer>
              <FormInput
                type="text"
                name="locationInput"
                autoComplete="off"
                required="required"
                maxLength="80"
                onFocus={this.enableLocationActive}
                onBlur={this.disableLocationActive}
                value={locationInput}
                onChange={this.handleFormChange}
              />
              <FormLabel>
                <FormLabelText style={locationStyle}>Location</FormLabelText>
              </FormLabel>
            </FormInputContainer>
            <ButtonContainer>
              <SearchButton type="submit">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className=""
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
                      className=""
                    ></path>
                    <path
                      fill="currentColor"
                      d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
                      className=""
                    ></path>
                  </g>
                </svg>
              </SearchButton>
            </ButtonContainer>
          </SearchForm>
        </FormContainer>
      </Container>
    );
  }
}

SearchBar.propTypes = {
  searchBusinessesYelp: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const mapDispatchToProps = { searchBusinessesYelp };

export default connect(null, mapDispatchToProps)(SearchBar);
