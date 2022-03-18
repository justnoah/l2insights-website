import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(0, 0%, 100%);
    font-family: 'Quicksand', 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  background-color: hsl(204, 70%, 75%);

  main {
    padding: 0 16px;
    width: 1200px;
    margin: auto;
    min-height: calc(100vh - 72px - 80px);
  }
`;

export default { GlobalStyle, Container };
