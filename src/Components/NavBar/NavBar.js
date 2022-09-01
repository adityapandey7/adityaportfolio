import styled from "styled-components";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

function NavBar() {
  return (
    <Nav>
      <NavBarDesktop className="desktop" />
      <NavBarMobile className="mobile" />
    </Nav>
  );
}

export default NavBar;

const Nav = styled.div``;
