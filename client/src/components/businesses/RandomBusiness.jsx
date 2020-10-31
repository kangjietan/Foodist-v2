import React from 'react';

import styled from 'styled-components';

import { formatMethods, formatTopics, getRatingsUrl } from '../utils';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  gap: 0.25rem;

  @media screen and (max-width: 280px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BusinessImageContainer = styled.div`
  min-width: 20rem;
  max-width: 25rem;
  height: 20rem;

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 15rem;
    min-width: 0;
  }
`;

const BusinessImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.2rem;
  margin-top: 1rem;

  @media screen and (max-width: 280px) {
    align-items: flex-start;
  }
`;

const RatingContainer = styled.div`
  display: flex;
`;

const Rating = styled.div`
  margin-right: 0.5rem;
`;

const ReviewCount = styled.div``;

const Price = styled.div``;

const BusinessAddress = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoriesTransactionsContainer = styled.div``;

const Categories = styled.div``;

const Transactions = styled.div``;

const RandomizeButtonContainer = styled.div`
  margin-top: auto;
`;

const RandomizeRollButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  background: #2f3640;
  color: white;
  cursor: pointer;
`;

const YelpLogo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  & img {
    width: 50px;
  }
`;

function RandomBusiness({ business, roll }) {
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
        <BusinessAddress>
          <span>{business.location.display_address[0]}</span>
          <span>{business.location.display_address[1]}</span>
        </BusinessAddress>
        <CategoriesTransactionsContainer>
          <Categories>{formatTopics(business.categories)}</Categories>
          {
            business.transactions.length !== 0
              ?
              <Transactions>{`Offers: ${formatMethods(business.transactions)}`}</Transactions>
              :
              null
          }
        </CategoriesTransactionsContainer>
      </InformationContainer>
      <RandomizeButtonContainer>
        <RandomizeRollButton onClick={roll}>
          Roll
        </RandomizeRollButton>
      </RandomizeButtonContainer>
      <YelpLogo>
        <a href={business.url} target='_blank'>
          <img src='./images/Yelp_Logo.svg' />
        </a>
      </YelpLogo>
    </Container>
  );
}

RandomBusiness.propTypes = {};

export default RandomBusiness;
