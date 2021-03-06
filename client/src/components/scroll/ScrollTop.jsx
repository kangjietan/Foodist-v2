import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    bottom: 6rem;
  }

  @media screen and (max-width: 320px) {
    right: 2rem;
  }
`;

const ButtonContainer = styled.div`
  & svg {
    width: 2rem;
  }
`;

const ScrollTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <Container>
      {
        showScroll
          ?
          <ButtonContainer onClick={scrollTop}>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='far'
              data-icon='arrow-square-up'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='svg-inline--fa fa-arrow-square-up fa-w-14 fa-9x'>
              <path fill='currentColor'
                d='M94.1 245.1l121.4-121.4c4.7-4.7 12.3-4.7 17 0l121.4 121.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.2-.2L250 211.2V372c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V211.2l-67.1 70.3c-4.7 4.9-12.4 5-17.2.2l-19.6-19.6c-4.7-4.7-4.7-12.3 0-17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z'
                className=''>
              </path>
            </svg>
          </ButtonContainer>
          :
          null
      }
    </Container>
  );
}

export default ScrollTop;
