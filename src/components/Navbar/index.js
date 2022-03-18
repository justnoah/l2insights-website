import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Styled from './styles';

const Navbar = () => (
  <Styled.NavContainer>
    <Styled.Navbar>
      <Link className="logo-link" to="/">
        <StaticImage src="../../assets/logo.svg" />
      </Link>
      <Styled.LinksContainer>
        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/contact">Contact</Link>
      </Styled.LinksContainer>
    </Styled.Navbar>
  </Styled.NavContainer>
);

export default Navbar;
