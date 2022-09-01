import React from "react";
import styled from "styled-components";
import { MdEmail, MdFilePresent } from "react-icons/md";

function Footer() {
  return (
    <FooterWrapper inlined>
      <div className="content">
        <div className="row">
          <div className="outro">
            <h2>Aditya Pandey</h2>
            <p>Stay Hunger, Stay Foolish, and Stay Focused.</p>
          </div>
          <div className="quickVisit">
            <h4>Quick Visit</h4>
            <ul>
              <li>
                <a
                  href="ADITYA_PANDEY_RESUME.pdf
        "
                  download="ADITYA_PANDEY_RESUME.pdf"
                >
                  <MdFilePresent className="pdfIcon" /> Resume
                </a>
              </li>
              <li>
                <a href="mailto: adityapandey.kv@gmail.com">
                  <MdEmail className="emailIcon" /> adityapandey.kv@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h4>Social</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/kradityapandey/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kradityapandey" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/adityapandey7" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Made by Aditya Pandey</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  margin: 50px 0 0 0;
  height: auto;
  background-color: black;
  color: white;
  .content {
    margin: 15px;
    padding: 15px;
  }
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .outro {
      width: 250px;
      @media screen and (max-width: 1000px) {
        width: 225px;
      }
      @media screen and (max-width: 600px) {
        width: 150px;
      }
      h2 {
        font-size: 22px;
        @media screen and (max-width: 600px) {
          font-size: 18px;
        }
      }
      p {
        margin: 10px 0px;
        font-size: 14px;
        @media screen and (max-width: 600px) {
          font-size: 12px;
        }
      }
    }
    .quickVisit {
      @media screen and (max-width: 600px) {
        h4 {
          font-size: 14px;
        }
      }
      ul {
        margin: 10px;
      }
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: white;
          font-size: 14px;
          .emailIcon,
          .pdfIcon {
            position: relative;
            top: 2px;
          }
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
        }
        a:hover,
        a:active {
          filter: brightness(80%);
        }
      }
    }
    .social {
      @media screen and (max-width: 600px) {
        h4 {
          font-size: 14px;
        }
      }
      ul {
        margin: 10px;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 14px;
        @media screen and (max-width: 600px) {
          font-size: 12px;
        }
      }
      a:hover,
      a:active {
        filter: brightness(80%);
      }
    }
  }
  .footer_bottom {
    width: 100%;
    text-align: center;
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
    p {
      padding: 5px 0 10px 0;
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;
