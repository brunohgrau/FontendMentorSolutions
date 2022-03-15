import styled from "styled-components";
import "./pricing.css";
import FooterBackground from "../assets/home/bg-pattern-footer.svg";
import { useNavigate, useParams } from "react-router-dom";

const FooterContainer = styled.section`
  /*   Container */
  position: relative;
  padding-bottom: 10.25rem;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 48rem) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 64rem) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media (min-width: 90rem) {
    padding-left: 10.25rem;
    padding-right: 10.25rem;
  }

  @media (min-width: 90rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem 7.5rem;
    grid-template-areas:
      "countdown-heading ."
      "countdown-timer countdown-button";

    justify-content: start;
  }

  /* Background */

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 78rem;
    background-color: #25293a;
    background-image: url(${FooterBackground});
    background-size: cover;
    background-position: center 8.25rem;
    background-repeat: no-repeat;
    z-index: -1;
    @media (min-width: 48rem) {
      height: 60rem;
      background-size: 91rem;
      background-position: center -1rem;
    }

    @media (min-width: 90rem) {
      height: 41rem;
      background-size: 127rem;
      background-position: -44rem -36rem;
    }
  }
`;

const CountdownContainer = styled.div`
  @media (min-width: 90rem) {
    text-align: left;
    padding-bottom: 0.5rem;
  }

  & > h2 {
    display: block;
    padding-bottom: 1.125rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.3125rem;
    color: white;
    @media (min-width: 90rem) {
      grid-area: countdown-heading;
      padding-bottom: 0;
    }
  }

  & > span {
    color: #5175ff;
  }

  a > {
  }
`;

const ClockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
  gap: 0.75rem;
  margin: auto;
  padding-bottom: 2.5rem;
  max-width: 28rem;

  @media (min-width: 90rem) {
    grid-area: countdown-timer;
    margin: 0;
  }

  & > div {
    border-radius: 0.25rem;
    text-align: center;
    background-color: #333950;
    @media (min-width: 48rem) {
      max-width: 6.25rem;
      border-radius: 0.75rem;
    }

    & > span {
      display: block;
      padding: 0.75rem 1rem 0 1rem;
      text-align: center;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 700;
      color: white;
      @media (max-width: 23.375rem) {
        font-size: 1.75rem;
        padding: 0.75rem 0.5rem 0 0.5rem;
      }

      @media (min-width: 48rem) {
        padding-top: 2rem;
        font-size: 3.5rem;
      }
    }

    & > p {
      display: block;
      padding-bottom: 0.75rem;
      font-size: 0.75rem;
      line-height: 1.75rem;
      font-weight: 700;
      opacity: 0.5;
      color: white;
      @media (min-width: 48rem) {
        font-size: 1rem;
      }
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate({ pathname: `/signup` });
  };

  return (
    <>
      <FooterContainer>
        <CountdownContainer>
          <h2>
            Coming <span>4 Nov 2020</span>
          </h2>
          <ClockContainer>
            <div>
              <span>47</span>
              <p>days</p>
            </div>
            <div>
              <span>07</span>
              <p>hours</p>
            </div>
            <div>
              <span>56</span>
              <p>min</p>
            </div>
            <div>
              <span>14</span>
              <p>sec</p>
            </div>
          </ClockContainer>
        </CountdownContainer>
        <a
          /* href="/sign-up.html" */
          class="btn btn--cta--darkbg home-countdown__button"
          onClick={() => onClickHandler()}
        >
          Get Started
        </a>
      </FooterContainer>
    </>
  );
};

export default Footer;
