import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
`;

const FormContainer = styled.div`
`;

const Form = styled.form`

`;

const FormInput = styled.input`
`;

const FormLabel = styled.label`
`;

const FormLabelText = styled.span`

`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <FormContainer>
          <Form>
            <FormInput />
            <FormLabel>
              <FormLabelText>Term</FormLabelText>
            </FormLabel>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

export default SearchBar;
