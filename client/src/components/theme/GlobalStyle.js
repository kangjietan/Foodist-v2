import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  root {
    font-size: 16px;
    font-family: "Open Sans";
  }

  body {
    color: black;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #6649b8;
  }

  main {
    margin-left: 5rem;
    padding: 1rem;
  }

  .fa-primary {
    color: #ff7eee;
  }

  .fa-secondary {
    color: #df49a6;
  }

  .fa-primary,
  .fa-secondary {
    transition: 600ms;
  }

  @media only screen and (max-width: 600px) {
    main {
      margin: 0;
    }
  }
`;

export default GlobalStyle;
