import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
`;

const Footer = styled.footer`
  max-width: 1200px;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .email-link {
    color: hsl(0, 0%, 100%);
  }
`;

const BrandContainer = styled.div`
  width: 128px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
    }

    .company-title {
      font-family: 'Advent Pro';
      font-size: 1.125rem;
      color: hsl(0, 0%, 100%);
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: 32px;
    margin-left: 16px;
  }
`;

export default {
  FooterContainer,
  Footer,
  BrandContainer,
  IconsContainer,
};
