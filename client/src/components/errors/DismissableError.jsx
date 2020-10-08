import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  color: #755802;
  background-color: #F5BD1F;
  margin-bottom: 0.5rem;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    & {
      font-size: 0.75rem;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  text-transform: none;
  color: inherit;
  background: none;
	border: none;
	font: inherit;
  outline: inherit;
`;

function DismissableError({ error }) {
  const [dismiss, setDismiss] = useState(false);

  if (dismiss) return null;

  return (
    <Container role='alert'>
      <div style={{width: '120%'}}>
        {error.msg}
      </div>
      <Button type='button' onClick={() => { setDismiss(true) }} aria-label='Close'>
        <span aria-hidden='true' style={{fontSize: '1rem'}}>&times;</span>
      </Button>
    </Container>
  );
}

export default DismissableError;
