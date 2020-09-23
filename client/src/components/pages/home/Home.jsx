import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  justify-content: space-around;
  margin-bottom: 3rem;
  max-width: 1200px;

  & img {
    width: 275px;
  }

  & h1 {
    margin: 0;
    font-size: 2.75rem;
  }

  @media screen and (max-width: 1200px) {
    & {
      max-width: 992px;
    }

    & h1 {
      font-size: 2.25rem;
    }

    & img {
      width: 225px;
    }
  }

  @media screen and (max-width: 992px) {
    & {
      max-width: 768px;
      margin-bottom: 2rem;
    }

    & h1 {
      font-size: 1.75rem;
    }

    & img {
      width: 175px;
    }
  }

  @media screen and (max-width: 768px) {
    & h1 {
      font-size: 1.3rem;
    }

    & img {
      width: 130px;
    }
  }

  @media screen and (max-width: 600px) {
    & h1 {
      font-size: 1.2rem;
    }

    & img {
      width: 120px;
    }
  }

  @media screen and (max-width: 576px) {
    & h1 {
      font-size: 1.1rem;
    }

    & img {
      width: 110px;
    }
  }

  @media screen and (max-width: 480px) {
    & h1 {
      font-size: 1rem;
    }

    & img {
      width: 20%;
    }
  }

  @media screen and (max-width: 380px) {
    & h1 {
      font-size: 0.9rem;
    }
  }
`;

const InstructionsContainer = styled.div`
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  color: #b19cd9;
  cursor: pointer;
  max-width: 1200px;

  @media screen and (max-width: 1200px) {
    & {
      max-width: 992px;
    }

    & ${ImageContainer} .instruction-img svg {
      width: 3rem !important;
    }

    & ${ButtonContainer} .button-chev svg {
      width: 1rem !important;
    }

    & ${Instructions} p {
      font-size: 1.2rem !important;
    }

    & ${Instructions} h1 {
      font-size: 1.5rem !important;
    }
  }

  @media screen and (max-width: 992px) {
    & {
      max-width: 768px;
    }

    & ${ImageContainer} .instruction-img svg {
      width: 3rem !important;
    }

    & ${ButtonContainer} .button-chev svg {
      width: 1rem !important;
    }

    & ${Instructions} h1 {
      font-size: 1.25rem !important;
    }
  }

  @media screen and (max-width: 600px) {
    &:last-child {
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 576px) {
    & ${ImageContainer} .instruction-img svg {
      width: 2.75rem !important;
    }

    & ${ButtonContainer} .button-chev svg {
      width: 1rem !important;
    }
  }

  @media screen and (max-width: 480px) {
    & ${Instructions} p {
      font-size: 1.1rem !important;
    }
  }

  @media screen and (max-width: 380px) {
    & ${Instructions} p {
      font-size: 1rem !important;
    }
  }
`;

const ImageContainer = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  margin: auto 0;

  & svg {
    width: 4rem;
  }

  @media screen and (max-width: 992px) {
    & {
      padding: 0 1rem;
    }
  }
`;

const Instructions = styled.div`
  margin-left: 2rem;

  & p {
    color: gray;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 992px) {
    & {
      margin-left: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin-left: auto;

  & svg {
    width: 1.25rem;
  }
`;

function Home() {
  return (
    <Container>
      <TitleContainer>
        <h1>Results powered by Yelp Fusion API.</h1>
        <img src={'./images/Yelp_Logo.svg'} />
      </TitleContainer>
      <InstructionsContainer>
        <ImageContainer className="instruction-img">
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
        </ImageContainer>
        <Instructions>
          <h1>Search</h1>
          <p>
            Search for your favorite restaurants and add them to your list later.
          </p>
        </Instructions>
        <ButtonContainer className="button-chev">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className=""
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              className=""
            ></path>
          </svg>
        </ButtonContainer>
      </InstructionsContainer>
      <InstructionsContainer>
        <ImageContainer className="instruction-img">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="list"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className=""
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M496 384H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                className=""
              ></path>
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z"
                className=""
              ></path>
            </g>
          </svg>
        </ImageContainer>
        <Instructions>
          <h1>List</h1>
          <p>Create an account to start saving your lists.</p>
        </Instructions>
        <ButtonContainer className="button-chev">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className=""
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              className=""
            ></path>
          </svg>
        </ButtonContainer>
      </InstructionsContainer>
      <InstructionsContainer>
        <ImageContainer className="instruction-img">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="dice"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className=""
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M433.63 189.3L258.7 14.37a49.07 49.07 0 0 0-69.39 0L14.37 189.3a49.07 49.07 0 0 0 0 69.39L189.3 433.63a49.07 49.07 0 0 0 69.39 0L433.63 258.7a49.08 49.08 0 0 0 0-69.4zM96 248a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm128 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"
                className=""
              ></path>
              <path
                fill="currentColor"
                d="M592 192H473.26a81.07 81.07 0 0 1-17 89.32L320 417.58V464a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48V240a48 48 0 0 0-48-48zM480 376a24 24 0 1 1 24-24 24 24 0 0 1-24 24zM96 200a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm256 48a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm-128 80a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0-256a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0 128a24 24 0 1 0 24 24 24 24 0 0 0-24-24z"
                className=""
              ></path>
            </g>
          </svg>
        </ImageContainer>
        <Instructions>
          <h1>Random</h1>
          <p>
            Not sure where to eat? Have a restaurant randomly chosen for you.
          </p>
        </Instructions>
        <ButtonContainer className="button-chev">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className=""
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              className=""
            ></path>
          </svg>
        </ButtonContainer>
      </InstructionsContainer>
    </Container>
  );
}

export default Home;
