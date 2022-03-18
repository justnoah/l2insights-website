import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Styled from './styles';

const Footer = () => (
  <Styled.FooterContainer>
    <Styled.Footer>
      <Styled.BrandContainer>
        <Link to="/">
          <p className="company-title">L2 Insights</p>
          <StaticImage src="../../assets/logo.svg" alt="company-logo" />
        </Link>
      </Styled.BrandContainer>
      <Link className="email-link" to="mailto:info@l2insights.com">
        info@l2insights.com
      </Link>
      <Styled.IconsContainer>
        <Link to="https://www.facebook.com/">
          <StaticImage src="../../assets/fb-icon.svg" alt="facebook icon" />
        </Link>
        <Link to="https://www.twitter.com/">
          <StaticImage src="../../assets/tw-icon.svg" alt="twitter icon" />
        </Link>
        <Link to="https://www.instagram.com/">
          <StaticImage src="../../assets/ig-icon.svg" alt="instagram icon" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/l2-insights-inc-0352ab187/"
          target="_blank"
        >
          <StaticImage src="../../assets/li-icon.svg" alt="linkedin icon" />
        </Link>
      </Styled.IconsContainer>
    </Styled.Footer>
  </Styled.FooterContainer>
);

export default Footer;
