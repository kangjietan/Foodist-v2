import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { switchToGoogleMaps } from '../../../actions/mapActions';

import ListBusiness from '../../businesses/ListBusiness';

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
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

const { GOOGLE_MAPS_API_KEY } = process.env;

function List({ customList, favoritesList, enableSwitchToGoogleMaps, switchToGoogleMaps }) {
  const [showFavoritesList, setShowFavoritesList] = useState(false);

  let list = customList ? customList : {};
  if (showFavoritesList) list = favoritesList ? favoritesList : {};

  let businesses = Object.keys(list).map((id) => list[id]);

  let businessLoc, query;

  if (businesses.length !== 0) {
    businessLoc = businesses[0].location;
    query = businesses[0].name + businessLoc.display_address;
  }

  if (enableSwitchToGoogleMaps) {
    return (
      <MapsContainer style={{ display: "block" }}>
        <ListMapContainer style={{ marginBottom: "1rem" }}>
          <ShowListButton style={enableSwitchToGoogleMaps ? {} : { background: '#bfbfbf' }} onClick={() => switchToGoogleMaps(false)}>List</ShowListButton>
          <ShowMapsButton style={enableSwitchToGoogleMaps ? { background: '#bfbfbf' } : {}} onClick={() => switchToGoogleMaps(true)}>Map</ShowMapsButton>
        </ListMapContainer>
        <iframe
          className="maps"
          frameBorder="0"
          style={{ border: "0", width: "100%", height: "100%" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
        </iframe>
      </MapsContainer>
    );
  }

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
        {businesses.map((business) => <ListBusiness business={business} key={business.id} />)}
        {businesses.length === 0 ? <div>List is empty. Search for businesses to add to your list.</div> : null}
      </ListContainer>
      <MapsContainer>
        <iframe
          className="maps"
          frameBorder="0"
          style={{ border: "0", width: "100%", height: "100%" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
        </iframe>
      </MapsContainer>
    </Container>
  );
}

List.propTypes = {
  customList: PropTypes.object.isRequired,
  favoritesList: PropTypes.object.isRequired,
  enableSwitchToGoogleMaps: PropTypes.bool.isRequired,
  switchToGoogleMaps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
  enableSwitchToGoogleMaps: state.map.enableSwitchToGoogleMaps,
});

const mapDispatchToProps = { switchToGoogleMaps };

export default connect(mapStateToProps, mapDispatchToProps)(List);
