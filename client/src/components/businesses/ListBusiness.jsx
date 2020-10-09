import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList } from '../../actions/userActions';

const Container = styled.div`

`;

function ListBusiness(props) {
  const { business } = props;
  return (
    <Container>
      {business.name}
    </Container>
  );
}

ListBusiness.propTypes = {};

const mapDispatchToProps = { addToCustomList, removeFromCustomList, addToFavoritesList, removeFromFavoritesList };

export default connect(null, mapDispatchToProps)(ListBusiness);
