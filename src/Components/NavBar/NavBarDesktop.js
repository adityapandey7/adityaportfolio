import React from "react";
import styled from "styled-components";

import NavLink from "./NavLink";

function NavBarDesktop() {
  return (
    <Nav>
      <NavLink />
    </Nav>
  );
}

export default NavBarDesktop;

const Nav = styled.nav`
  margin: 15px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  outline: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
