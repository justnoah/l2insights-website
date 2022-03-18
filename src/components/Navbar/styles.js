import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  padding-left: 8px;
  max-width: 1200px;
  margin: auto;
  height: 72px;

  .logo-link {
    display: flex;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
    }
  }

  a:hover {
    text-decoration: none;
    font-weight: 700;
    color: hsl(204, 90%, 84%);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;

  a {
    color: hsl(0, 0%, 100%);
    margin-left: 16px;
  }
`;

export default { NavContainer, Navbar, LinksContainer };
