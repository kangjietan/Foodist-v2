import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ListBusiness from '../../businesses/ListBusiness';

const Container = styled.div`

`;

const ListContainer = styled.div`

`;

function List(props) {
  let list = props.customList ? props.customList : {};
  let businesses = Object.keys(list).map((id) => list[id]);

  return (
    <Container>
      <ListContainer>
        {businesses.map((business) => <ListBusiness business={business} key={business.id} /> )}
      </ListContainer>
    </Container>
  );
}

List.propTypes = {};

const mapStateToProps = (state) => ({
  customList: state.user.customList,
  favoritesList: state.user.favoritesList,
});

export default connect(mapStateToProps, null)(List);
