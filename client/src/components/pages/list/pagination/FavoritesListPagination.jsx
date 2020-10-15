import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFavoritesListCurrentPage } from '../../../../actions/favoritesListActions';

const PaginationContainer = styled.ul`
  position: relative;
  background: #fff;
  display: flex;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif;
  justify-content: center;
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
  @media screen and (max-width: 1660px) {
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
  @media screen and (max-width: 1660px) {
    display: none;
  }
`;

const PageNumber = styled(PaginationItems)`
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
`;

function FavoritesListPagination({ favoritesListCurrentPage, favoritesListTotalPages, updateFavoritesListCurrentPage }) {
  const [currentActivePage, setCurrentActivePage] = useState(favoritesListCurrentPage);

  let prevStyle = currentActivePage === 1 ? { pointerEvents: 'none', fontWeight: '100' } : {};
  let nextStyle = currentActivePage === favoritesListTotalPages ? { pointerEvents: 'none', fontWeight: '100' } : {};

  let activePageStyle = {
    background: '#b19cd9',
    color: '#fff',
  };

  const handlePageClick = (event) => {
    const { innerText } = event.target;
    const pageNumber = Number(innerText);

    window.scrollTo({ top: 0, behavior: 'auto' });

    setCurrentActivePage(pageNumber);
    updateFavoritesListCurrentPage(pageNumber);
  }

  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    updateFavoritesListCurrentPage(currentActivePage + 1);
    setCurrentActivePage(currentActivePage + 1);
  }

  const handlePreviousClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    updateFavoritesListCurrentPage(currentActivePage - 1);
    setCurrentActivePage(currentActivePage - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <PaginationContainer>
        <Previous style={prevStyle} onClick={handlePreviousClick}>{'<'}<PreviousText>{' Prev'}</PreviousText></Previous>
        {currentActivePage <= favoritesListTotalPages ? <PageNumber style={activePageStyle} onClick={handlePageClick}>{currentActivePage}</PageNumber> : null}
        {currentActivePage + 1 <= favoritesListTotalPages ? <PageNumber onClick={handlePageClick}>{currentActivePage + 1}</PageNumber> : null}
        {currentActivePage + 2 <= favoritesListTotalPages ? <PageNumber onClick={handlePageClick}>{currentActivePage + 2}</PageNumber> : null}
        {currentActivePage + 3 <= favoritesListTotalPages ? <PageNumber onClick={handlePageClick}>{currentActivePage + 3}</PageNumber> : null}
        {currentActivePage + 4 <= favoritesListTotalPages ? <PageNumber onClick={handlePageClick}>{currentActivePage + 4}</PageNumber> : null}
        <Next style={nextStyle} onClick={handleNextClick}><NextText>{'Next '}</NextText>{'>'}</Next>
      </PaginationContainer>
      <div>{`Page ${currentActivePage} of ${favoritesListTotalPages}`}</div>
    </div>
  );
}

FavoritesListPagination.propTypes = {
  favoritesListCurrentPage: PropTypes.number.isRequired,
  favoritesListTotalPages: PropTypes.number.isRequired,
  updateFavoritesListCurrentPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesListCurrentPage: state.favoritesList.favoritesListCurrentPage,
  favoritesListTotalPages: state.favoritesList.favoritesListTotalPages,
});

const mapDispatchToProps = { updateFavoritesListCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesListPagination);
