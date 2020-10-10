import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList } from '../../actions/userActions';

import { formatTopics, formatMethods, getRatingsUrl } from '../utils';

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  min-width: 15rem;
  max-width: 15rem;
  height: 10rem;
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainInformationContainer = styled.div`
  padding: 1rem;
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
`;

const RatingContainer = styled.div`
  display: flex;
`;

const Rating = styled.div`
  margin-right: 0.25rem;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewCount = styled.div``;

const Price = styled.div``;

const CategoriesTransactionsContainer = styled.div``;

const Categories = styled.div``;

const Transactions = styled.div``;

function ListBusiness(props) {
  const { business } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={business.image_url} />
      </ImageContainer>
      <MainInformationContainer>
        <BusinessName>
          {business.name}
        </BusinessName>
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
        <AddressContainer>
          <span>{business.location.display_address[0]}</span>
          <span>{business.location.display_address[1]}</span>
        </AddressContainer>
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
      </MainInformationContainer>
    </Container>
  );
}

ListBusiness.propTypes = {};

const mapDispatchToProps = { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList };

export default connect(null, mapDispatchToProps)(ListBusiness);
