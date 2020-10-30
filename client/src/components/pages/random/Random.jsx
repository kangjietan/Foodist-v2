import React, { Component } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateRandomBusiness } from '../../../actions/randomActions';

import RandomDropDown from './RandomDropDown';

import RandomBusiness from '../../businesses/RandomBusiness';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const RandomBusinessAndMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
`;

const RandomBusinessContainer = styled.div`
  flex: 1;
  margin-right: 1rem;
  border: 1px solid #eeeeef;
  padding: 1rem 1rem;
`;

const MapContainer = styled.div`
  flex: 1.75;
  border: 1px solid #eeeeef;
  padding: 1rem 1rem;
`;

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRandomBusiness: {},
    }
  }

  componentDidMount() {
    this.updateCurrentRandomBusiness();
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps, this.props);
    const prevBusiness = prevProps.randomBusiness;
    const business = this.props.randomBusiness;
    if (Object.keys(prevBusiness).length === 0 && Object.keys(business).length > 1) {
      this.updateCurrentRandomBusiness();
    }

    if (prevBusiness.id) {
      if (prevBusiness.id !== business.id) {
        this.updateCurrentRandomBusiness();
      }
    }
  }

  updateCurrentRandomBusiness() {
    const { randomBusiness } = this.props;

    if (Object.keys(randomBusiness).length > 1) {
      this.setState({ currentRandomBusiness: randomBusiness });
    }
  }

  clearCurrentRandomBusiness() {
    this.setState({ currentRandomBusiness: {} });
  }

  render() {
    const { GOOGLE_MAPS_API_KEY } = process.env;

    const { currentRandomBusiness } = this.state;

    let query;
    if (Object.keys(currentRandomBusiness).length !== 0) {
      query = currentRandomBusiness.alias + currentRandomBusiness.location.display_address;
    }

    return (
      <Container>
        <h1>Not sure where to eat? Have a random business chosen for you.</h1>
        <RandomDropDown />
        {
          Object.keys(currentRandomBusiness).length > 1
            ?
            <RandomBusinessAndMapContainer>
              <RandomBusinessContainer>
                <RandomBusiness business={currentRandomBusiness} />
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
}

Random.propTypes = {};

const mapStateToProps = (state) => ({
  randomBusiness: state.random.randomBusiness,
  currentRandomList: state.random.currentRandomList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
