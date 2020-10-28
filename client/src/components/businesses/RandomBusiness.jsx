import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  gap: 0.25rem;
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
`;

const BusinessImageContainer = styled.div`
  min-width: 25rem;
  max-width: 30rem;
`;

const BusinessImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function RandomBusiness(props) {
  const { business } = props;
  console.log(business);
  return (
    <Container>
      <BusinessImageContainer>
        <BusinessImage src={business.image_url} alt='' />
      </BusinessImageContainer>
      <BusinessName>
        <span>{business.name}</span>
      </BusinessName>
    </Container>
  );
}

RandomBusiness.propTypes = {};

export default RandomBusiness;
