import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
`;

function ResultBusiness(props) {
  console.log(props);
  return (
    <Container>
      {props.business.name}
    </Container>
  )
}

export default ResultBusiness;
