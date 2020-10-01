import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  width: 45rem;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const ImageContainer = styled.div`
  min-width: 15rem;
  max-width: 15rem;
  height: 10rem;
  transform: translateX(-4rem);
  position: relative;
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
  transform: translateX(-3rem);
  font-size: 1.20rem;
`;

/* START */
const MainInformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainInformation = styled.div`
`;

const BusinessName = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const BusinessAddress = styled.div`
  margin-bottom: 0.2rem;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 0.2rem;
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
  margin-bottom: 0.2rem;
`;

const Categories = styled.div`
  margin-bottom: 0.2rem;
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
              <ReviewCount>{business.review_count}</ReviewCount>
              {/* <Price>{business.price}</Price> */}
            </RatingContainer>
            <BusinessAddress>{business.location.address1}</BusinessAddress>
          </MainInformation>
        </MainInformationContainer>
        <CategoriesTransactionsContainer>
          <Categories>{topics(business.categories)}</Categories>
          <Transactions>{`Offers: ${methods(business.transactions)}`}</Transactions>
        </CategoriesTransactionsContainer>
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
