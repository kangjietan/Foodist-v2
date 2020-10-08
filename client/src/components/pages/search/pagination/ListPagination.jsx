import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const PaginationContainer = styled.ul`
  position: relative;
  background: #fff;
  display: flex;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 650px) {
    ${Previous} {
      margin-right: 5px !important;
    }

    ${Next} {
      margin-left: 5px !important;
    }
  }

  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;

const PaginationItems = styled.li`
  color: #777;
  font-weight: 600;
  border-radius: 50%;
  cursor: pointer;
  list-style: none;
  line-height: 50px;
  margin: 0 5px;

  @media screen and (max-width: 520px) {
    margin: 0;
  }
`

const Previous = styled(PaginationItems)`
  margin-right: 30px;
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 650px) {
    & {
      margin-right: 0px;
    }
  }
`;

const PreviousText = styled.span`
  @media screen and (max-width: 460px) {
    display: none;
  }
`;

const Next = styled(PaginationItems)`
  margin-left: 30px;
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 650px) {
    & {
      margin-left: 0px;
    }
  }
`;

const NextText = styled.span`
  @media screen and (max-width: 460px) {
    display: none;
  }
`;

const PageNumber = styled(PaginationItems)`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

function ListPagination({ offset }) {
  return (
    <PaginationContainer>
      <Previous>{"<"}<PreviousText>{" Prev"}</PreviousText></Previous>
      <PageNumber>1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
      <PageNumber>4</PageNumber>
      <PageNumber>5</PageNumber>
      <Next><NextText>{"Next "}</NextText>{">"}</Next>
    </PaginationContainer>
  );
}

export default ListPagination;
