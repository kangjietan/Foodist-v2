import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList } from '../../actions/userActions';

import { formatTopics, formatMethods, getRatingsUrl } from '../utils';

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 1.5rem;
  font-size: 1.25rem;
  position: relative;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  min-width: 14rem;
  max-width: 14rem;
  height: 14rem;
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.3rem;
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
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

const ButtonContainer = styled.div`
  position: absolute;
  /* top: 3rem; */
  top: 0.25rem;
  right: 0.25rem;
`;

const DropDownButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 1.1rem;
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  position: absolute;
  background: white;
  margin-top: 10px;
  padding: 0;
  width: 225px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 0.4s ease;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  right: 0;

  ${DropDownButton}:focus + & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const YelpLogo = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;

  & img {
    width: 50px;
  }
`;

function ListBusiness(props) {
  const { business } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={business.image_url} />
      </ImageContainer>
      <InformationContainer>
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
        <ButtonContainer>
          <DropDownButton>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="ellipsis-v"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
              className="">
              <path fill="currentColor" d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                className="">
              </path>
            </svg>
          </DropDownButton>
          <DropDownList>

          </DropDownList>
        </ButtonContainer>
      </InformationContainer>
      <YelpLogo>
        <a href={business.url} target='_blank'>
          <img src='./images/Yelp_Logo.svg' />
        </a>
      </YelpLogo>
    </Container>
  );
}

ListBusiness.propTypes = {};

const mapDispatchToProps = { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList };

export default connect(null, mapDispatchToProps)(ListBusiness);
