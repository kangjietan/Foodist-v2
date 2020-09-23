import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-family: 'Roboto', sans-serif;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 768px;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const InstructionsContainer = styled.div`
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 768px;
  display: flex;
  margin-bottom: 2rem;
  color: #b19cd9;
  cursor: pointer;
`;

function Home() {
  return (
    <Container>
      <InstructionsContainer>
        <TitleContainer>
          
        </TitleContainer>
      </InstructionsContainer>
    </Container>
  );
}

export default Home;
