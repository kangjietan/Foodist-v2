import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  width: 35%;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin-bottom: 1rem;
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
  // height: 100%;
`;

/* START */
const MainInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainInformationTitle = styled.div`

`;

const BusinessName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BusinessAddress = styled.div`

`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`

`;

const ReviewCount = styled.div`
  
`;

/* END */

const CategoriesTransactionsContainer = styled.div`

`;

const Categories = styled.div`

`;

const Transactions = styled.div`

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
          <MainInformationTitle>
            <BusinessName>{business.name}</BusinessName>
            <BusinessAddress>{business.location.address1}</BusinessAddress>
          </MainInformationTitle>
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
          </RatingContainer>
        </MainInformationContainer>
        <CategoriesTransactionsContainer>
          <Categories>{topics(business.categories)}</Categories>
          <Transactions>{`Offers: ${methods(business.transactions)}`}</Transactions>
        </CategoriesTransactionsContainer>
      </InformationContainer>
    </Container>
  );
}

export default ResultBusiness;
