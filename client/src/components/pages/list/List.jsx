import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { switchToGoogleMaps } from '../../../actions/mapActions';

import { Redirect } from 'react-router-dom';

import ListBusiness from '../../businesses/ListBusiness';

import FavoritesList from './FavoritesList';
import FavoritesListPagination from './pagination/FavoritesListPagination';

const Container = styled.div`
  display: flex;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 6rem;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  flex: 1;

  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`;

const MapsContainer = styled.div`
  height: 100vh;
  top: 0;
  position: sticky;
  flex: 2;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const ButtonListContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #4a4a4a;
  padding: 0.5rem 0.5rem;
`;

const CustomListButton = styled(Button)`
  border-right: none;
`;

const FavoritesListButton = styled(Button)``;

const ListMapContainer = styled.div`
  display: none;
  margin-left: auto;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const ShowListButton = styled(Button)``;

const ShowMapsButton = styled(Button)``;

function List(props) {
  const { GOOGLE_MAPS_API_KEY } = process.env;

  const {
    customList,
    favoritesList,
    enableSwitchToGoogleMaps,
    switchToGoogleMaps,
    businessOnMap,
    userLoggedIn
  } = props;

  const [showFavoritesList, setShowFavoritesList] = useState(false);

  if (showFavoritesList && !userLoggedIn) return <Redirect to='/login' />;

  let list = customList ? customList : {};
  if (showFavoritesList) list = favoritesList ? favoritesList : {};

  let businesses = Object.keys(list).map((id) => list[id]);

  let query = "United States";

  if (Object.keys(businessOnMap).length !== 0) {
    query = businessOnMap.alias + businessOnMap.location.display_address;
  }

  if (businesses.length !== 0 && Object.keys(businessOnMap).length === 0) {
    if (Object.keys(businesses[0]).length > 1) {
      query = businesses[0].alias + businesses[0].location.display_address;
    }
  }

  const handleResize = () => {
    if (window.innerWidth > 700) switchToGoogleMaps(false);
  }

  window.addEventListener('resize', handleResize);

  if (enableSwitchToGoogleMaps && window.innerWidth < 700) {
    return (
      <Container>
        <MapsContainer style={{ display: 'block' }}>
          <ListMapContainer style={{ marginBottom: '1rem' }}>
            <ShowListButton style={enableSwitchToGoogleMaps ? {} : { background: '#bfbfbf' }} onClick={() => switchToGoogleMaps(false)}>List</ShowListButton>
            <ShowMapsButton style={enableSwitchToGoogleMaps ? { background: '#bfbfbf' } : {}} onClick={() => switchToGoogleMaps(true)}>Map</ShowMapsButton>
          </ListMapContainer>
          <iframe
            frameBorder='0'
            style={{ border: '0', width: '100%', height: '100%' }}
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`} allowFullScreen>
          </iframe>
        </MapsContainer>
      </Container>
    );
  }

  if (showFavoritesList) {
    // FavoritesList
    // Render favorites list with pagination
    // Get results each by 10 businesses
    // let FavoritesList component handle logic
    return (
      <Container>
        <ListContainer>
          <ButtonListContainer>
            <CustomListButton style={showFavoritesList ? {} : { background: '#bfbfbf' }} onClick={() => setShowFavoritesList(false)}>Custom</CustomListButton>
            <FavoritesListButton style={showFavoritesList ? { background: '#bfbfbf' } : {}} onClick={() => setShowFavoritesList(true)}>Favorites</FavoritesListButton>
            <ListMapContainer>
              <ShowListButton style={enableSwitchToGoogleMaps ? {} : { background: '#bfbfbf' }} onClick={() => switchToGoogleMaps(false)}>List</ShowListButton>
              <ShowMapsButton style={enableSwitchToGoogleMaps ? { background: '#bfbfbf' } : {}} onClick={() => switchToGoogleMaps(true)}>Map</ShowMapsButton>
            </ListMapContainer>
          </ButtonListContainer>
          <FavoritesList list={list} />
          {businesses.length === 0 ? <div>List is empty. Search for businesses to add to your list.</div> : null}
          {Object.keys(favoritesList).length ? <FavoritesListPagination /> : null}
        </ListContainer>
        <MapsContainer>
          <iframe
            frameBorder='0'
            style={{ border: '0', width: '100%', height: '100%' }}
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
          </iframe>
        </MapsContainer>
      </Container>
    );
  } else if (!showFavoritesList) {
    // CustomList
    return (
      <Container>
        <ListContainer>
          <ButtonListContainer>
            <CustomListButton style={showFavoritesList ? {} : { background: '#bfbfbf' }} onClick={() => setShowFavoritesList(false)}>Custom</CustomListButton>
            <FavoritesListButton style={showFavoritesList ? { background: '#bfbfbf' } : {}} onClick={() => setShowFavoritesList(true)}>Favorites</FavoritesListButton>
            <ListMapContainer>
              <ShowListButton style={enableSwitchToGoogleMaps ? {} : { background: '#bfbfbf' }} onClick={() => switchToGoogleMaps(false)}>List</ShowListButton>
              <ShowMapsButton style={enableSwitchToGoogleMaps ? { background: '#bfbfbf' } : {}} onClick={() => switchToGoogleMaps(true)}>Map</ShowMapsButton>
            </ListMapContainer>
          </ButtonListContainer>
          {businesses.map((business) => <ListBusiness business={business} key={business.id} list='custom' />)}
          {businesses.length === 0 ? <div>List is empty. Search for businesses to add to your list.</div> : null}
        </ListContainer>
        <MapsContainer>
          <iframe
            frameBorder='0'
            style={{ border: '0', width: '100%', height: '100%' }}
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
          </iframe>
        </MapsContainer>
      </Container>
    );
  }
}

List.propTypes = {
  customList: PropTypes.object.isRequired,
  favoritesList: PropTypes.object.isRequired,
  enableSwitchToGoogleMaps: PropTypes.bool.isRequired,
  switchToGoogleMaps: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
  enableSwitchToGoogleMaps: state.map.enableSwitchToGoogleMaps,
  businessOnMap: state.map.businessOnMap,
  userLoggedIn: state.user.userLoggedIn,
});

const mapDispatchToProps = { switchToGoogleMaps };

export default connect(mapStateToProps, mapDispatchToProps)(List);
