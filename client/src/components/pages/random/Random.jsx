import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateRandomBusiness } from '../../../actions/randomActions';

import RandomDropDown from './RandomDropDown';

import RandomBusiness from './RandomBusiness';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomBusinessAndMapContainer = styled.div`
  display: flex;
`;

const RandomBusinessContainer = styled.div``;

const MapContainer = styled.div``;

function Random(props) {
  const { GOOGLE_MAPS_API_KEY } = process.env;

  const { randomBusiness } = props;

  let query;

  if (Object.keys(randomBusiness).length !== 0) {
    query = randomBusiness.name + randomBusiness.location.display_address;
  }

  return (
    <Container>
      <h1>Not sure where to eat? Have a random business chosen for you.</h1>
      <RandomDropDown />
      {
        Object.keys(randomBusiness).length > 1
          ?
          <RandomBusinessAndMapContainer>
            <RandomBusinessContainer>
              <RandomBusiness business={randomBusiness} />
            </RandomBusinessContainer>
            <MapContainer>
              <iframe
                frameBorder='0'
                style={{ border: '0', width: '100%', height: '100%' }}
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
              </iframe>
            </MapContainer>
          </RandomBusinessAndMapContainer>
          :
          null
      }
    </Container>
  );
}

Random.propTypes = {};

const mapStateToProps = (state) => ({
  randomBusiness: state.random.randomBusiness,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
