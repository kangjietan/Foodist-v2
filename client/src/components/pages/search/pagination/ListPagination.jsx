import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateOffset } from '../../../../actions/searchActions';

const PaginationContainer = styled.ul`
  position: relative;
  background: #fff;
  display: flex;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif;

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

  &:hover {
    color: black;
  }

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

function ListPagination({ offset, updateOffset }) {
  const [currentActivePage, setCurrentActivePage] = useState(offset + 1);
  let pageOneStyle, pageTwoStyle, pageThreeStyle, pageFourStyle, pageFiveStyle;

  let prevStyle = currentActivePage === 1 ? { pointerEvents: 'none', fontWeight: '100' } : {};
  let nextStyle = currentActivePage === 5 ? { pointerEvents: 'none', fontWeight: '100' } : {};

  let activePageStyle = {
    background: '#b19cd9',
    color: '#fff',
  };

  let pages = {
    '1': 'pageOne',
    '2': 'pageTwo',
    '3': 'pageThree',
    '4': 'pageFour',
    '5': 'pageFive',
  };

  let activePage = `${pages[currentActivePage]}Style`;

  switch (activePage) {
    case 'pageOneStyle':
      pageOneStyle = activePageStyle;
      break;
    case 'pageTwoStyle':
      pageTwoStyle = activePageStyle;
      break;
    case 'pageThreeStyle':
      pageThreeStyle = activePageStyle;
      break;
    case 'pageFourStyle':
      pageFourStyle = activePageStyle;
      break;
    case 'pageFiveStyle':
      pageFiveStyle = activePageStyle;
      break;
    default:
      pageOneStyle = activePageStyle;
  }

  const handlePageClick = (event) => {
    const { innerText } = event.target;
    const pageNumber = Number(innerText);

    window.scrollTo({ top: 0, behavior: 'auto' });

    setCurrentActivePage(pageNumber);
    updateOffset(pageNumber - 1);
  }

  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    updateOffset(currentActivePage);
    setCurrentActivePage(currentActivePage + 1);
  }

  const handlePreviousClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    updateOffset(currentActivePage - 2);
    setCurrentActivePage(currentActivePage - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <PaginationContainer>
        <Previous style={prevStyle} onClick={handlePreviousClick}>{'<'}<PreviousText>{' Prev'}</PreviousText></Previous>
        <PageNumber style={pageOneStyle} onClick={handlePageClick}>1</PageNumber>
        <PageNumber style={pageTwoStyle} onClick={handlePageClick}>2</PageNumber>
        <PageNumber style={pageThreeStyle} onClick={handlePageClick}>3</PageNumber>
        <PageNumber style={pageFourStyle} onClick={handlePageClick}>4</PageNumber>
        <PageNumber style={pageFiveStyle} onClick={handlePageClick}>5</PageNumber>
        <Next style={nextStyle} onClick={handleNextClick}><NextText>{'Next '}</NextText>{'>'}</Next>
      </PaginationContainer>
      <div>{`Page ${currentActivePage} of 5`}</div>
    </div>
  );
}

ListPagination.propTypes = {
  updateOffset: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
};

const mapDispatchToProps = { updateOffset };

export default connect(null, mapDispatchToProps)(ListPagination);
