import React, { Component } from 'react';

import styled from 'styled-components';

const FormBodyWrapper = styled.div`

`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
      registerPassword2: '',
      rightPanelActive: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.enableRightPanelActive = this.enableRightPanelActive.bind(this);
    this.disableRightPanelActive = this.disableRightPanelActive.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmission(event) {
    event.preventDefault();
  }

  enableRightPanelActive() {
    this.setState({ rightPanelActive: true });
  }

  disableRightPanelActive() {
    this.setState({ rightPanelActive: false });
  }

  render() {
    const {
      loginUsername,
      loginPassword,
      registerUsername,
      registerPassword,
      registerPassword2,
      rightPanelActive
    } = this.state;
    
    return (
      <FormBodyWrapper>
        Login
      </FormBodyWrapper>
    );
  }
}

export default Login;
