import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";

function Contact() {
  function send() {
    window.open("mailto:adityapandey.kv@gmail.com");
  }

  return (
    <ContactWrapper>
      <h2>Let's have a chat.</h2>
      <p>
        I’m always looking for opportunities to expand upon my skills and am
        currently seeking a full-time junior front-end developer position or
        internship. I’d love to hear from you if you have any questions, or
        looking for a network, or would like to chat about any projects I can
        help with.
      </p>
      <Button onClick={send}>
        <MdEmail className="emailIcon" /> Contact Me
      </Button>
    </ContactWrapper>
  );
}

export default Contact;

const ContactWrapper = styled.div`
  margin: 50px 50px;
  h2 {
    text-align: center;
    padding: 15px;
    @media screen and (max-width: 1000px) {
      padding: 10px;
      font-size: 26px;
    }
    @media screen and (max-width: 600px) {
      font-size: 22px;
    }
  }
  p {
    padding: 10px 50px;
    font-size: 16px;
    @media screen and (max-width: 1000px) {
      padding: 10px 20px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1000px) {
    margin: 25px 25px;
  }
  @media screen and (max-width: 600px) {
    margin: 10px 10px;
  }
`;
const Button = styled.button`
  position: relative;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 10px;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
  .emailIcon {
    position: relative;
    top: 2px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
