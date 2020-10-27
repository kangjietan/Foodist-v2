import React from 'react';

import styled from 'styled-components';

const Container = styled.div``;

function RandomBusiness(props) {
  const { business } = props;
  console.log(business);
  return (
    <Container>
      {business.name}
    </Container>
  );
}

RandomBusiness.propTypes = {};

export default RandomBusiness;
