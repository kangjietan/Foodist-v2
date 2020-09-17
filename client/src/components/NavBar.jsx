import React from 'react';

import styled from 'styled-components';

// Component variables
const transitionSpeed = '600ms';
const textPrimary = '#b6b6b6';
const textSecondary = '#ececec';
const bgPrimary = '#23232e';
const bgSecondary = '#141418';

const NavigationBar = styled.nav`

`;

const NavigationBarNav = styled.ul`

`;

const LinkText = styled.span`

`;

const NavigationLink = styled.a`

`;

const Logo = styled.li`

`;

const NavigationItem = styled.li`

`;

function NavBar() {
  return (
    <NavigationBar>
      <NavigationBarNav>
        <Logo id="logo">
          <NavigationLink>
            <LinkText>Foodist</LinkText>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary">
                </path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary">
                </path>
              </g>
            </svg>
          </NavigationLink>
        </Logo>
        <NavigationItem>
          <NavigationLink>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="home"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z"
                  className="fa-secondary">
                </path>
                <path
                  fill="currentColor"
                  d="M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z"
                  className="fa-primary">
                </path>
              </g>
            </svg>
            <LinkText>Home</LinkText>
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
                  className="fa-secondary" >
                </path>
                <path
                  fill="currentColor" d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
                  className="fa-primary">
                </path>
              </g>
            </svg>
            <LinkText>Search</LinkText>
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="list"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="">
              <g className="fa-group">
                <path fill="currentColor"
                  d="M496 384H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                  className="fa-secondary">
                </path>
                <path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z"
                  className="fa-primary">
                </path>
              </g>
            </svg>
            <LinkText>List</LinkText>
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="random"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="">
              <g className="fa-group">
                <path fill="currentColor"
                  d="M505 359l-80-80c-15-15-41-4.47-41 17v40h-32l-52.78-56.55-53.33 57.14 70.55 75.6a12 12 0 0 0 8.77 3.81H384v40c0 21.46 26 32 41 17l80-80a24 24 0 0 0 0-34zM122.79 96H12a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h84l52.78 56.55 53.33-57.14-70.55-75.6a12 12 0 0 0-8.77-3.81z"
                  className="fa-secondary" >
                </path>
                <path
                  fill="currentColor"
                  d="M505 119a24 24 0 0 1 0 34l-80 80c-15 15-41 4.48-41-17v-40h-32L131.56 412.19a12 12 0 0 1-8.77 3.81H12a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h84L316.44 99.81a12 12 0 0 1 8.78-3.81H384V56c0-21.44 25.94-32 41-17z"
                  className="fa-primary">
                </path>
              </g>
            </svg>
            <LinkText>Shuffle</LinkText>
          </NavigationLink>
        </NavigationItem>
      </NavigationBarNav>
    </NavigationBar>
  );
}

export default NavBar;
