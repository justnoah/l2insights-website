import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Styled from 'pageStyles/index.styles';

const Home = () => (
  <Styled.HomeContainer>
    <h1>L2 Insights</h1>
    <h2>Harnessing Healthcare Data</h2>
    <StaticImage
      className="hero-image"
      src="../assets/data-mountains.jpg"
      alt="data points in the shape of mountains"
    />
  </Styled.HomeContainer>
);

export default Home;
