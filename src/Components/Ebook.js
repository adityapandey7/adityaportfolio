import React from "react";
import styled from "styled-components";
import ebook1 from "../Image/BTS-Placement.jpg";
import ebook2 from "../Image/gotjob.jpg";

function Ebook() {
  return (
    <EbookWrapper>
      <Heading> E-Book </Heading>
      <p className="intro">
        I love to express my thought through writing. I started writing to
        improve my communication but this leads me to another good path.
        <br /> <br />I am very much interested in student affairs, and my
        content is basically around them only. Till now, I published two e-books
        along with my friend Kirtha Tirtha Paul. And continuously looking to
        publish more in the future.
      </p>
      <Book1>
        <Text>
          <Title>BTS - Placement</Title>
          <Description>
            Curiosity makes me write this e-book. About everything happening
            around me, especially placement. In this e-book, I and my friend try
            to discuss facts and try to make realize the truth to the student.
          </Description>
          <Author>
            Author - <a href="">Aditya Pandey</a> and
            <a href=""> Kirth Tirtha Paul</a>
          </Author>
          <A href="BTS-PLACEMENT.pdf" download="BTS - PLACEMENT.pdf">
            <button>View Preview</button>{" "}
          </A>
        </Text>
        <Image src={ebook1} />
      </Book1>
      <Book1>
        <Text>
          <Title>Got JOb: What Now?</Title>
          <Description>
            This E-book is the second edition of the first e-book, where we
            focused on fresher and what to do after getting the job. In the end,
            you will be able to understand how your package is decided. How does
            compounding work? And many more.
          </Description>
          <Author>
            Author - <a href="">Aditya Pandey</a> and
            <a href=""> Kirth Tirtha Paul</a>
          </Author>
          <A href="GotJob.pdf" download="Got Job- What Now?.pdf">
            <button>View Preview</button>
          </A>
        </Text>
        <Image src={ebook2} />
      </Book1>
    </EbookWrapper>
  );
}

export default Ebook;

const EbookWrapper = styled.section`
  margin: 50px 0;
  @media screen and (max-width: 1400px) {
    margin: 0;
  }
  .intro {
    margin: 10px 50px;
    padding: 10px 50px;
    @media screen and (max-width: 1400px) {
      margin: 5px 25px;
      padding: 10px 10px;
    }

    @media screen and (max-width: 600px) {
      margin: 0px 20px;
    }
  }
`;
const Description = styled.p`
  padding: 15px 50px;
  text-align: justify;
  @media screen and (max-width: 1400px) {
    padding: 15px;
  }
  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
  @media screen and (max-width: 1000px) {
    padding: 5px;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const Title = styled.h4`
  margin-left: 0px;
  margin-bottom: 5px;
`;
const Book1 = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 50px 50px;
  @media screen and (max-width: 1400px) {
    margin: 15px 25px 15px;
  }
`;
const Heading = styled.h2`
  text-align: center;
  padding: 10px;
  margin: 0px 0 20px 0;
  font-size: 30px;
  @media screen and (max-width: 1400px) {
    font-size: 28px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 26px;
    padding: 8px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 22px;
    padding: 5px;
  }
`;
const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;
const Text = styled.div`
  padding: 0 5px;
  /* width: 90%; */
`;

const A = styled.a`
  padding: 15px 50px;
  button {
    padding: 8px;
    font-size: 14px;
    outline: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    &:hover {
      filter: brightness(120%);
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 1400px) {
    padding: 15px;
  }
  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
  @media screen and (max-width: 1000px) {
    padding: 5px;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const Author = styled.div`
  padding: 10px 50px;
  text-align: justify;
  @media screen and (max-width: 1400px) {
    padding: 15px;
  }
  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
  @media screen and (max-width: 1000px) {
    padding: 5px;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
  a:hover,
  a:active {
    opacity: 0.5;
  }
`;
