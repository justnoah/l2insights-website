import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;

  h1 {
    font-size: 6rem;
    font-family: 'Advent Pro';
    color: hsl(0, 0%, 100%);
    position: absolute;
    left: 48px;
    z-index: 1;
  }

  h2 {
    position: absolute;
    top: 130px;
    left: 56px;
    z-index: 1;
    color: hsl(0, 0%, 80%);
    font-size: 1.75rem;
  }

  .hero-image {
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    max-width: 100vw;
    height: 50vh;
    object-fit: cover;
  }
`;

export default {
  HomeContainer,
};
