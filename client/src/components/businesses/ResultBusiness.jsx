import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  width: 45rem;
  max-width: 768px;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin-bottom: 1rem;
  position: relative;
  margin-right: 1rem;

  @media screen and (max-width: 1000px) {
    width: 30rem;
    margin-right: 0;  
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
    padding: 2.5rem;
    margin: 2rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  min-width: 20rem;
  max-width: 20rem;
  height: 15rem;
  transform: translateX(-4rem);
  position: relative;

  @media screen and (max-width: 1000px) {
    min-width: 15rem;
    max-width: 15rem;
  }

  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    transform: translate(0, -4rem);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
`;

const InformationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(-2.5rem);
  font-size: 1.20rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    transform: translateX(0);
    text-align: center;
  }
`;

/* START */
const MainInformationContainer = styled.div`
  // width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainInformation = styled.div`
`;

const BusinessName = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const BusinessAddress = styled.div`
  margin-bottom: 0.25rem;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`;

const Rating = styled.div`
  margin-right: 0.5rem;
`;

const ReviewCount = styled.div`
`;

const Price = styled.div`
`;

/* END */

const CategoriesTransactionsContainer = styled.div`
  margin-bottom: 0.25rem;
`;

const Categories = styled.div`
  margin-bottom: 0.25rem;
`;

const Transactions = styled.div`
`;

const YelpLogo = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;

  & img {
    width: 50px;
  }
`;

const ButtonContainer = styled.div`

`;

const AddButton = styled.button`
  background: none;
  width: 120px;
  height: 40px;
  border: 1px solid #28a745;
  font-size: 18px;
  border-radius: 4px;
  transition: 0.6s;
  overflow: hidden;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: #28a745;
    color: white;
  }
`;

// Format the food topics
const topics = (list) => {
  let categories = '';
  list.forEach((entry) => { categories += `${entry.title}, `; });
  categories = categories.substring(0, categories.length - 2);
  return categories;
};

// Format the transaction types
const methods = (list) => {
  let categories = '';
  list.forEach((entry) => { categories += `${entry}, `; });
  categories = categories.substring(0, categories.length - 2);
  categories = categories.split('_').join(' ');
  return categories;
};

// Format rating image url src
const ratings = (num) => {
  let rating = num.toString();
  let check = rating.split("");

  if (check[check.length - 1] === '5' && check.length === 3) {
    rating = `${check[0]}_half`;
  }

  const url = `./images/yelp_stars/web_and_ios/regular/regular_${rating}.png`

  return url;
}

function ResultBusiness(props) {
  const { business } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={business.image_url} />
      </ImageContainer>
      <InformationContainer>
        <MainInformationContainer>
          <MainInformation>
            <BusinessName>{business.name}</BusinessName>
            <RatingContainer>
              {
                business.rating
                  ?
                  <Rating>
                    <img src={ratings(business.rating)} />
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
            <BusinessAddress>{business.location.address1}</BusinessAddress>
          </MainInformation>
        </MainInformationContainer>
        <CategoriesTransactionsContainer>
          <Categories>{topics(business.categories)}</Categories>
          {
            business.transactions.length !== 0
              ?
              <Transactions>{`Offers: ${methods(business.transactions)}`}</Transactions>
              :
              null
          }
        </CategoriesTransactionsContainer>
        <ButtonContainer>
          <AddButton type="button">
            Add to list
          </AddButton>
        </ButtonContainer>
      </InformationContainer>
      <YelpLogo>
        <a href={business.url} target="_blank">
          <img src='./images/Yelp_Logo.svg' />
        </a>
      </YelpLogo>
    </Container>
  );
}

export default ResultBusiness;
