import React from "react";
import styled from "styled-components";
import aditya from "../Image/Aditya.png";

function MyStory() {
  return (
    <Story>
      <Text>
        <Title>About Me</Title>
        <Description>
          Hi there! <br /> <br />
          I’m Aditya Pandey and currently, I am a Frontend Developer. And
          working hard to become a full stack developer.
          <br />
          <br />
          My journey as a coder is not different from others, but my goal is. As
          a developer and student, I am continuously working towards the student
          community.
          <br />
          <br />
          Having some previous experience and the more I try to dig, the more I
          got interested. It is some kind of dopamine that demand more each
          time. Working as a web developer is thrilled which I want to pursue
          without any doubt.
          <br />
          <br />
          To accompany my coding knowledge, I have also done a marketing and
          designing course. Which is a great asset to understanding more about
          business and clients.
          <br />
          <br />
          Having the knowledge and skills to make a website is a great
          experience and especially how new technology is adaptable and forced
          me to learn.
          <br /> <br />I am an effective communicator, collaborator, and good
          thinker and I hope these skills along with my continued education in
          the field will boost my capability as a web dev and help me to
          accomplice my dream and bring life on the web effectively and
          creatively.
        </Description>
      </Text>

      <Image src={aditya} alt="Hero-image" />
    </Story>
  );
}

export default MyStory;

const Story = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 50px;
  @media screen and (max-width: 1200px) {
    /* margin: 30px 20px; */
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 800px) {
    margin: 30px 20px;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 600px) {
    margin: 30px 20px;
  }
`;
const Image = styled.img`
  margin: auto auto;
  height: 350px;
  width: 350px;
  border: none;
  border-radius: 8px;
  @media screen and (max-width: 1400px) {
    height: 300px;
    width: 300px;
    margin: auto;
  }
  @media screen and (max-width: 1300px) {
    height: 280px;
    width: 280px;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    height: 300px;
    width: 300px;
    margin: auto;
  }
  @media screen and (max-width: 800px) {
    height: 250px;
    width: 250px;
    margin: 5px auto;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;
const Description = styled.p`
  text-align: justify;
  padding: 15px 50px;
  font-size: 17px;
  @media screen and (max-width: 1400px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 10px 10px;
  }
`;
const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;
const Text = styled.div`
  text-align: center;
`;
