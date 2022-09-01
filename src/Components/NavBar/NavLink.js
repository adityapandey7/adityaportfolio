import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegSmileBeam,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaRegSmileWink,
} from "react-icons/fa";

function NavLink() {
  const [show, setShow] = useState(false);
  function showIcon() {
    setShow(!show);
  }
  return (
    <>
      <Logo>PANDEY</Logo>
      <Info>
        <A
          href="ADITYA_PANDEY_RESUME.pdf
        "
          download="ADITYA_PANDEY_RESUME.pdf"
        >
          <P>RESUME</P>
        </A>
        {/* <P>CONTACT</P> */}
      </Info>
      <SocialMedia>
        {show && (
          <a href="https://github.com/adityapandey7" target="_blank">
            <FaGithub className="github" />
          </a>
        )}
        {show ? (
          <FaRegSmileWink className="showMedia" onClick={showIcon} />
        ) : (
          <FaRegSmileBeam className="showMedia" onClick={showIcon} />
        )}
        {show && (
          <a href="https://twitter.com/kradityapandey" target="_blank">
            <FaTwitter className="twitter" />
          </a>
        )}
        {show && (
          <a href="https://www.linkedin.com/in/kradityapandey/" target="_blank">
            <FaLinkedin className="linkedin" />
          </a>
        )}
      </SocialMedia>
    </>
  );
}

export default NavLink;

const Logo = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1.5px 1.5px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;
const P = styled.p`
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    margin: 10px 0;
  }
`;
const SocialMedia = styled.p`
  font-size: 25px;
  position: relative;

  a {
    text-decoration: none;
  }

  .github {
    position: absolute;
    top: 0;
    left: -30px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.9);
      color: blue;
    }
  }

  .twitter {
    position: absolute;
    top: 0;
    left: 30px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.9);
      color: blue;
    }
  }
  .linkedin {
    position: absolute;
    top: 30px;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.9);
      color: blue;
    }
  }
  .showMedia {
    cursor: pointer;
    color: black;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.9);
      color: blue;
    }
  }
`;
const A = styled.a`
  text-decoration: none;
  color: black;
  p:hover {
    border-bottom: 1px solid;
  }
`;
