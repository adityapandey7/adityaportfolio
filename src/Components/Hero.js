import React from "react";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import namaste from "../Image/namaste.png";

// Attribute -   <a
// href="https://www.flaticon.com/free-icons/namaste"
// title="namaste icons"
// >Namaste icons created by Freepik - Flaticon </a>

function Hero() {
  const Detail = "Frontend Developer and ethusiasm marketer.";
  return (
    <>
      <NavBar />
      <Heading>
        <Background1>Aditya</Background1>
        <Info>
          <Namaste title="Namaste">
            नमस्ते
            <img src={namaste} alt="Namaste" title="Namaste" />
          </Namaste>
          <Im>I'm Aditya Pandey</Im>
          <Span>{Detail}</Span>
        </Info>
        <Background2>Pandey</Background2>
      </Heading>
    </>
  );
}

export default Hero;

const Heading = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1000px) {
    min-height: 70vh;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    min-height: 60vh;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    min-height: 45vh;
    text-align: center;
  }
`;
const Namaste = styled.span`
  font-size: 18px;
  font-weight: 550;
  img {
    height: 25px;
    width: 25px;
    margin-left: 5px;
    @media screen and (max-width: 800px) {
      height: 20px;
      width: 20px;
    }
  }
  @media screen and (max-width: 1200px) {
    font-size: 17px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`;
const Im = styled.h1`
  font-size: 55px;
  line-height: normal;
  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
    text-align: center;
  }
`;
const Info = styled.div`
  padding: 10px;
  position: relative;
`;
const Span = styled.p`
  font-size: 15px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    text-align: center;
  }
`;
const Background1 = styled.h1`
  font-size: 150px;
  position: absolute;
  top: 70px;
  left: 30px;
  color: white;
  opacity: 0.3;
  user-select: none;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    font-size: 100px;
    top: 80px;
    left: 35px;
    opacity: 0.2;
  }
  @media screen and (max-width: 1000px) {
    opacity: 0;
  }
`;
const Background2 = styled.h1`
  font-size: 150px;
  position: absolute;
  bottom: 70px;
  right: 30px;
  color: white;
  opacity: 0.3;
  user-select: none;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    font-size: 100px;
    bottom: 80px;
    right: 35px;
    opacity: 0.2;
  }
  @media screen and (max-width: 1000px) {
    opacity: 0;
  }
`;
