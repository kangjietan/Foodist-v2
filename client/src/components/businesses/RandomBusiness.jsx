import React from 'react';

import styled from 'styled-components';

import { formatMethods, formatTopics, getRatingsUrl } from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BusinessImageContainer = styled.div`
  min-width: 20rem;
  max-width: 25rem;
  height: 20rem;
`;

const BusinessImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const RatingContainer = styled.div`
  display: flex;
`;

const Rating = styled.div`
  margin-right: 0.5rem;
`;

const ReviewCount = styled.div``;

const Price = styled.div``;

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
      <InformationContainer>
        <RatingContainer>
          {
            business.rating
              ?
              <Rating>
                <img src={getRatingsUrl(business.rating)} />
              </Rating>
              :
              null
          }
          <ReviewCount>{business.review_count}&nbsp;</ReviewCount>
          {
            business.price
              ?
              <Price><span>&#183;</span>&nbsp;{business.price}</Price>
              :
              null
          }
        </RatingContainer>
      </InformationContainer>
    </Container>
  );
}

RandomBusiness.propTypes = {};

export default RandomBusiness;
