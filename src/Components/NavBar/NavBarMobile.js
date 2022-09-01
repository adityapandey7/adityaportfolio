import React, { useState } from "react";
import styled from "styled-components";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import NavLink from "./NavLink";

function NavBarMobile() {
  const [open, setOpen] = useState(false);

  const hamburgerOpen = (
    <CgMenuRound className="hamburger" onClick={() => setOpen(!open)} />
  );

  const hamburgerClose = (
    <CgCloseO className="hamburger" onClick={() => setOpen(!open)} />
  );

  return (
    <Nav>
      {open ? hamburgerClose : hamburgerOpen}
      {open && <NavLink />}
    </Nav>
  );
}

export default NavBarMobile;

const Nav = styled.nav`
  margin: 15px 0;
  padding: 10px;
  outline: none;
  display: none;

  .hamburger {
    height: 30px;
    width: 30px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
