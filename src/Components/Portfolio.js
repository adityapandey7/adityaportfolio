import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import pro1 from "../Image/pokemon.jpg";
import pro2 from "../Image/paper_rock.jpg";
import pro3 from "../Image/password.jpg";
import pro4 from "../Image/calculator.jpg";
import pro5 from "../Image/quote.jpg";
import pro6 from "../Image/crypto.jpg";
import Project from "./Project";

const PortfolioDetail = [
  {
    id: nanoid(),
    heading: "Pokémon Card",
    text: "This project is mainly focused on how to load Pokémon data with good UI. Users can view a list of Pokémon and their details also they can load more.  This project is created using React js.",
    link: "https://pokemon-378ec.web.app/",
    live_code: "https://github.com/adityapandey7/pokemon_card",
    image_src: `${pro1}`,
    alt: "pokemon",
  },
  {
    id: nanoid(),
    heading: "Rock-Paper-Scissor",
    text: "We all know how this game helps us to get out of the situation, many times. In this, I take help from random math function to play with the computer. HTML, CSS, and JavaScript are used in this application.",
    link: "https://rock-paper-scissors-aditya.netlify.app/",
    live_code: "https://github.com/adityapandey7/rock-paper-scissors",
    image_src: `${pro2}`,
    alt: "rock-paper game",
  },
  {
    id: nanoid(),
    heading: "Generate Random Password",
    text: "This project is quite interesting to generate random passwords depending on the provided option. This application is made with React Js and another third-party library is used.",
    link: "https://react-app-f3b55.web.app/",
    live_code: "https://github.com/adityapandey7/password_generator",
    image_src: `${pro3}`,
    alt: "generate-password",
  },
  {
    id: nanoid(),
    heading: "Basic Calculator",
    text: "This is a simple calculator built using HTML, CSS, and JavaScript. Understanding JavaScript is a fundamental goal. Users can easily perform the basic calculation.",
    link: "https://basic-calculator-aditya.netlify.app/",
    live_code: "https://github.com/adityapandey7/calculator",
    image_src: `${pro4}`,
    alt: "calculator",
  },
  {
    id: nanoid(),
    heading: "Quote Generator",
    text: "Using API is an interesting part of this project. Every time a new quote is generated, also sharing option is given through Twitter. Understanding of async function is the main goal of this project.",
    link: "https://generate-quote-aditya.netlify.app/",
    live_code: "https://github.com/adityapandey7/quote-generator",
    image_src: `${pro5}`,
    alt: "quote generator",
  },
  {
    id: nanoid(),
    heading: "Crypto Currency",
    text: "A live application is quite interesting, in this third API is called to collect data for crypto coins and through this API live data is used.",
    link: "https://crypto-currency-aditya.web.app/",
    live_code: "https://github.com/adityapandey7/crypto_currency",
    image_src: `${pro6}`,
    alt: "crypto-currency",
  },
];

function Portfolio(props) {
  return (
    <PortfolioWrapper>
      <Heading>Portfolio</Heading>
      <Showcase>
        {PortfolioDetail.map((portfolio) => (
          <Project
            id={portfolio.id}
            heading={portfolio.heading}
            text={portfolio.text}
            link={portfolio.link}
            live_code={portfolio.live_code}
            image_src={portfolio.image_src}
            alt={portfolio.alt}
          />
        ))}
      </Showcase>
    </PortfolioWrapper>
  );
}

export default Portfolio;

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  @media screen and (max-width: 1200px) {
    padding: 25px 0;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;
const Heading = styled.h2`
  font-size: 30px;
  padding: 15px;
  @media screen and (max-width: 600px) {
    font-size: 26px;
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;
const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 20px 0;
  padding: 10px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    margin: 10px 0;
    padding: 0;
  }
`;
