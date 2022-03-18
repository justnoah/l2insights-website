import React from 'react';
import Helmet from 'react-helmet';

import Styled from './styles';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Styled.GlobalStyle />
    <Styled.Container>
      <Helmet title="L2 Insights" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Styled.Container>
  </>
);

export default Layout;
