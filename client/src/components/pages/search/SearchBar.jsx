import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
`;

const FormContainer = styled.div`
  position: relative;
  height: 50px;
  width: 25%;
  overflow: hidden;
`;

const Form = styled.form`

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
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTermActive: false,
    };

    this.enableSearchTermActive = this.enableSearchTermActive.bind(this);
    this.disableSearchTermActive = this.disableSearchTermActive.bind(this);
  }

  enableSearchTermActive() {
    this.setState({ searchTermActive: true });
  }

  disableSearchTermActive() {
    this.setState({ searchTermActive: false });
  }

  render() {
    const { searchTermActive } = this.state;
    let searchTermStyle = {};

    if (searchTermActive) {
      searchTermStyle = {
        transform: "translateY(-150%)",
        fontSize: "14px",
        color: "#5fa8d3",
      }
    }

    return (
      <Container>
        <FormContainer>
          <Form>
            <FormInput onFocus={this.enableSearchTermActive} onBlur={this.disableSearchTermActive} />
            <FormLabel>
              <FormLabelText style={searchTermStyle}>Term</FormLabelText>
            </FormLabel>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

export default SearchBar;
