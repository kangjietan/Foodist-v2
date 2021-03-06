import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList } from '../../actions/userActions';

import { Redirect } from 'react-router-dom';

import { formatTopics, formatMethods, getRatingsUrl } from '../utils';

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
    margin: 2.5rem 0;
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
  z-index: 2;

  @media screen and (max-width: 768px) {
    align-items: center;
    transform: translateX(0);
    text-align: center;
  }
`;

/* START */
const MainInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainInformation = styled.div``;

const BusinessName = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const BusinessAddress = styled.div`
  margin-bottom: 0.25rem;
`;

const BusinessPhone = styled.div`
  margin-bottom: 0.25rem;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`;

const Rating = styled.div`
  margin-right: 0.5rem;
`;

const ReviewCount = styled.div``;

const Price = styled.div``;

/* END */

const CategoriesTransactionsContainer = styled.div`
  margin-bottom: 0.25rem;
`;

const Categories = styled.div`
  margin-bottom: 0.25rem;
`;

const Transactions = styled.div``;

const YelpLogo = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;

  & img {
    width: 50px;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  background: none;
  width: 120px;
  height: 40px;
  border: 1px solid #b19cd9;
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
    background: #b19cd9;
    color: white;
  }
`;

const ButtonList = styled.ul`
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
  border: 1px solid #b19cd9;
  border-radius: 5px;
  transition: all 0.4s ease;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;

  ${AddButton}:focus + & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const ButtonListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #b19cd9;
    color: white;
  }
  
  &:first-child {
    border-bottom: 1px solid #b19cd9;
  }
`;

function ResultBusiness(props) {
  const {
    business,
    listAdded,
    addToCustomList,
    removeFromCustomList,
    addToFavoritesList,
    removeFromFavoritesList,
    userLoggedIn,
  } = props;

  const [addedToCustomList, setAddedToCustomList] = useState(listAdded.customListAdded);
  const [addedToFavoritesList, setAddedToFavoritesList] = useState(listAdded.favoritesListAdded);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleCustomList = () => {
    if (addedToCustomList) {
      removeFromCustomList(business);
      setAddedToCustomList(false);
    } else {
      addToCustomList(business);
      setAddedToCustomList(true);
    }
  }

  const handleFavoritesList = () => {
    if (!userLoggedIn) {
      setRedirectToLogin(true);
      return;
    }

    if (addedToFavoritesList) {
      removeFromFavoritesList(business);
      setAddedToFavoritesList(false);
    } else {
      addToFavoritesList(business);
      setAddedToFavoritesList(true);
    }
  }

  if (redirectToLogin) return <Redirect to='/login' />;

  return (
    <Container>
      <ImageContainer>
        <a href={business.url} target='_blank'>
          {business.image_url ?
            <Image src={business.image_url} />
            :
            <Image src='./images/Yelp_Logo.svg' style={{ objectFit: "scale-down" }} />
          }
        </a>
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
            <BusinessAddress>{business.location.address1}</BusinessAddress>
          </MainInformation>
        </MainInformationContainer>
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
          <AddButton type='button'>
            Select list...
          </AddButton>
          <ButtonList>
            <ButtonListItem onClick={handleCustomList}>{addedToCustomList ? 'Remove from' : 'Add to'} custom list</ButtonListItem>
            <ButtonListItem onClick={handleFavoritesList}>{addedToFavoritesList ? 'Remove from' : 'Add to'} favorites</ButtonListItem>
          </ButtonList>
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

ResultBusiness.propTypes = {
  business: PropTypes.object.isRequired,
  listAdded: PropTypes.object.isRequired,
  addToCustomList: PropTypes.func.isRequired,
  removeFromCustomList: PropTypes.func.isRequired,
  addToFavoritesList: PropTypes.func.isRequired,
  removeFromFavoritesList: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.userLoggedIn,
});

const mapDispatchToProps = { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList };

export default connect(mapStateToProps, mapDispatchToProps)(ResultBusiness);
