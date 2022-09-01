import React from "react";
import styled from "styled-components";

function Project(props) {
  return (
    <Maincontainer>
      <Back className="back">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <A href={props.link} target="_blank">
          <Button className="preview">Live Preview</Button>
        </A>
        <A href={props.live_code} target="_blank">
          <Button className="code">View Code</Button>
        </A>
      </Back>
      <Front className="front">
        <Image>
          <img src={props.image_src} alt={props.alt} />
          <h2>{props.heading}</h2>
        </Image>
      </Front>
    </Maincontainer>
  );
}

export default Project;

const Maincontainer = styled.div`
  width: 302px;
  height: 299px;
  float: left;
  position: relative;
  @media screen and (max-width: 1200px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
  .front {
    position: absolute;
    transform: perspective(600px) rotateY(0deg);

    width: 302px;
    height: 290px;
    @media screen and (max-width: 1200px) {
      height: 250px;
      width: 250px;
    }
    @media screen and (max-width: 600px) {
      height: 200px;
      width: 200px;
    }

    backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
    transition: transform 0.5s linear 0s;
  }
  .back {
    position: absolute;
    transform: perspective(600px) rotateY(180deg);
    background: #262626;
    color: #fff;
    width: 302px;
    height: 290px;
    border-radius: 10px;
    padding: 5px;
    backface-visibility: hidden; /* cant see the backside elements as theyre turning around */
    transition: transform 0.5s linear 0s;
    @media screen and (max-width: 100px) {
      height: 250px;
      width: 250px;
    }
    @media screen and (max-width: 600px) {
      height: 200px;
      width: 200px;
    }
  }
  &:hover > .front {
    transform: perspective(600px) rotateY(-180deg);
  }

  &:hover > .back {
    transform: perspective(600px) rotateY(0deg);
  }
`;
const Back = styled.div`
  h2 {
    position: absolute;
    margin-bottom: 5px;
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
  p {
    position: absolute;
    top: 50px;
    font-size: 15px;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
const Front = styled.div`
  h2 {
    position: absolute;
    padding: 10px;
    bottom: 5px;
    color: #000;
    @media screen and (max-width: 600px) {
      padding: 5px;
      font-size: 18px;
    }
  }
`;
const Image = styled.div`
  width: 302px;
  height: 299px;
  @media screen and (max-width: 1200px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const A = styled.a`
  text-decoration: none;
  position: relative;
  top: 80%;
`;
const Button = styled.button`
  outline: none;
  border-radius: 4px;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: brightness(50%);
  }
`;
