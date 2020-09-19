import React, { Component } from 'react';

import styled from 'styled-components';

// .container
const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

// .form-container
const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  & form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  & input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
`;

// .sign-up-container
const SignUpContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
`;

// .sign-in-container
const SignInContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  z-index: 2;
`;

const SignUpForm = styled.form``;

const SignInForm = styled.form``;

// .button-group
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  & span {
    display: none;
  }
`;

// .overlay-container
const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

// .overlay
const Overlay = styled.div`
  background: #ff416c;
  background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover;
  color: white;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// .overlay-panel
const OverlayPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// .overlay-left
const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-20%);
  padding: 0;
`;

// .overlay-right
const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  padding: 0;
`;

// Overlay Content
const OverlayContent = styled.div`
  padding: 0 40px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

// .ghost
const GhostButton = styled(Button)`
  background: transparent;
  border-color: white;
`;

// .mobile-sign-in
const MobileSignInButton = styled(Button)`
  display: none;
`;

// .mobile-sign-up
const MobileSignUpButton = styled(Button)`
  display: none;
`;

// body
const FormBodyWrapper = styled.div`
  font-family: "Montserrat";
  // background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;

  & h1 {
    font-weight: bold;
    margin: 0;
  }
  
  & p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  
  & span {
    font-size: 12px;
  }
  
  & a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  @media(max-width: 600px) {
    ${Container} {
      width: 75%;
    }

    ${FormContainer} {
      transform: translateX(0%) !important;
    }

    ${OverlayContainer} {
      display: none;
    }

    ${SignInContainer}, ${SignUpContainer} {
      width: 100%;
    }
  
    ${MobileSignInButton}, ${MobileSignUpButton}, ${ButtonGroup} span {
      display: block;
    }
  
    ${ButtonGroup} span {
      font-weight: bold;
      font-size: 1rem;
      margin: 5px 0;
    }
  
    ${MobileSignInButton}, ${MobileSignUpButton} {
      background-color: #ff416c;
    }
  }
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
        <Container>
          <SignUpContainer style={rightPanelActive ? { transform: "translateX(100%)", opacity: "1", zIndex: "5" } : {}}>
            <SignUpForm onSubmit={this.handleFormSubmission}>
              <h1>Create Account</h1>
              <input
                type="name"
                name="username"
                placeholder="Enter username"
                maxLength="15"
                required="required"
                value={registerUsername}
                onChange={this.handleFormChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                minLength="6"
                maxLength="20"
                required="required"
                value={registerPassword}
                onChange={this.handleFormChange}
              />
              <input
                type="password"
                name="password2"
                placeholder="Confirm password"
                minLength="4"
                maxLength="20"
                required="required"
                value={registerPassword2}
                onChange={this.handleFormChange}
              />
              <ButtonGroup>
                <Button>Sign Up</Button>
                <span>Or</span>
                <MobileSignInButton type="button" onClick={this.disableRightPanelActive}>Sign In</MobileSignInButton>
              </ButtonGroup>
            </SignUpForm>
          </SignUpContainer>
          <SignInContainer style={rightPanelActive ? { transform: "translateX(100%)" } : {}}>
            <SignInForm onSubmit={this.handleFormSubmission}>
              <h1>Sign in</h1>
              <input
                type="name"
                name="loginUsername"
                placeholder="Enter username"
                maxLength="15"
                required="required"
                value={loginUsername}
                onChange={this.handleFormChange}
              />
              <input
                type="password"
                name="loginPassword"
                placeholder="Enter password"
                minLength="6"
                maxLength="20"
                required="required"
                value={loginPassword}
                onChange={this.handleFormChange}
              />
              <ButtonGroup>
                <Button>Sign In</Button>
                <span>Or</span>
                <MobileSignUpButton type="button" onClick={this.disableRightPanelActive}>Sign Up</MobileSignUpButton>
              </ButtonGroup>
            </SignInForm>
          </SignInContainer>
          <OverlayContainer style={rightPanelActive ? { transform: "translateX(-100%)" } : {}}>
            <Overlay style={rightPanelActive ? { transform: "translateX(50%)" } : {}}>
              <OverlayLeft style={rightPanelActive ? { transform: "translateX(0)" } : {}}>
                <OverlayContent>
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal info
                </p>
                </OverlayContent>
                <GhostButton onClick={this.disableRightPanelActive}>Sign In</GhostButton>
              </OverlayLeft>
              <OverlayRight style={rightPanelActive ? { transform: "translateX(20%)" } : {}}>
                <OverlayContent>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start your journey with us</p>
                </OverlayContent>
                <GhostButton onClick={this.enableRightPanelActive}>Sign Up</GhostButton>
              </OverlayRight>
            </Overlay>
          </OverlayContainer>
        </Container>
      </FormBodyWrapper>
    );
  }
}

export default Login;
