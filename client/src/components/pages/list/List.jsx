import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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
`;

const MapsContainer = styled.div`
  height: 100vh;
  top: 0;
  position: sticky;
  flex: 2;
`;

function List(props) {
  let list = props.customList ? props.customList : {};
  let businesses = Object.keys(list).map((id) => list[id]);

  const { GOOGLE_MAPS_API_KEY } = process.env;
  const businessLoc = businesses[0].location;
  const query = businesses[0].name + businessLoc.display_address;

  return (
    <Container>
      <ListContainer>
        {businesses.map((business) => <ListBusiness business={business} key={business.id} />)}
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

List.propTypes = {};

const mapStateToProps = (state) => ({
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
});

export default connect(mapStateToProps, null)(List);
