import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList } from '../../actions/userActions';
import { updateBusinessOnMap, switchToGoogleMaps } from '../../actions/mapActions';

import { formatTopics, formatMethods, getRatingsUrl } from '../utils';

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 1.5rem;
  font-size: 1rem;
  position: relative;
  border: 1px solid #eeeeef;
  background-color: #fff;
  transition: all 0.3s;
  width: inherit;

  &:hover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  min-width: 13rem;
  max-width: 13rem;
  height: 13rem;
  margin-right: 1rem;

  @media screen and (max-width: 1300px) {
    min-width: 12rem;
    max-width: 12rem;
    height: 12rem;
  }

  @media screen and (max-width: 1100px) {
    min-width: 11rem;
    max-width: 11rem;
    height: 11rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const BusinessName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  @media screen and (max-width: 1600px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1300px) {
    font-size: 1.25rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
`;

const Rating = styled.div`
  margin-right: 0.25rem;
`;

const BusinessPhone = styled.div`

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
  background: rgb(255, 255, 255);
  margin-top: 10px;
  padding: 0;
  width: 225px;
  height: 100px;
  border: 1px solid #eeeeef;
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

const DropDownItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
  }
  
  &:first-child {
    border-bottom: 1px solid #eeeeef;
  }
`;

const YelpLogo = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;

  & img {
    width: 50px;
  }

  @media screen and (max-width: 1300px) {
    bottom: 0;
    right: 0;
  }
`;

function ListBusiness(props) {
  const [businessRemovedFromList, setBusinessRemovedFromList] = useState(false);

  const {
    business,
    list,
    addToCustomList,
    removeFromCustomList,
    addToFavoritesList,
    removeFromFavoritesList,
    updateBusinessOnMap,
    switchToGoogleMaps,
  } = props;

  const handleRemoveFromList = () => {
    if (!businessRemovedFromList) {
      if (list === 'custom') {
        removeFromCustomList(business);
        setBusinessRemovedFromList(true);
      } else if (list === 'favorites') {
        removeFromFavoritesList(business);
        setBusinessRemovedFromList(true);
      }
    } else if (businessRemovedFromList) {
      if (list === 'custom') {
        removeFromCustomList(business);
        setBusinessRemovedFromList(false);
      } else if (list === 'favorites') {
        removeFromFavoritesList(business);
        setBusinessRemovedFromList(false);
      }
    }
  }

  const handleMapClick = () => {
    updateBusinessOnMap(business);
    switchToGoogleMaps(true);
  }

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
        <BusinessPhone>{business.display_phone}</BusinessPhone>
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
              aria-hidden='true'
              focusable='false'
              data-prefix='far'
              data-icon='ellipsis-v'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 128 512'
              className=''>
              <path fill='currentColor' d='M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z'
                className=''>
              </path>
            </svg>
          </DropDownButton>
          <DropDownList>
            <DropDownItem onClick={handleRemoveFromList}>{businessRemovedFromList ? 'Add back to list' : 'Remove from list'}</DropDownItem>
            <DropDownItem onClick={handleMapClick}>View on Maps</DropDownItem>
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

ListBusiness.propTypes = {
  business: PropTypes.object.isRequired,
  list: PropTypes.string.isRequired,
  addToCustomList: PropTypes.func.isRequired,
  removeFromCustomList: PropTypes.func.isRequired,
  addToFavoritesList: PropTypes.func.isRequired,
  removeFromFavoritesList: PropTypes.func.isRequired,
  updateBusinessOnMap: PropTypes.func.isRequired,
  switchToGoogleMaps: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList, updateBusinessOnMap, switchToGoogleMaps };

export default connect(null, mapDispatchToProps)(ListBusiness);
