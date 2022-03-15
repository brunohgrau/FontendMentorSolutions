import styled from "styled-components";
import Logo from "../assets/shared/logo.svg";
import HeaderIlustration1 from "../assets/home/bg-pattern-header.svg";
import Ilustration1 from "../assets/home/illustration-charts.svg";

const LogoContainer = styled.header`
  position: relative;
  padding: 2.875rem 1.5rem 5rem;
  text-align: center;

  @media screen and (min-width: 767px) {
    padding: 4.5rem 2.5rem 6.5rem;
    text-align: left;
  }

  @media screen and (min-width: 1100px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 10.25rem;
    padding-right: 10.25rem;
  }
`;

const IlustrationContainer1 = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 288px;
    background-image: url(${HeaderIlustration1});
    background-size: 458px;
    background-repeat: no-repeat;
    background-position: center -170px;
    z-index: -1;

    @media screen and (min-width: 48rem) {
      height: 502px;
      background-size: 666px;
      background-position: 373px -164px;
    }

    @media screen and (min-width: 64rem) {
      height: 715px;
      background-size: 1134px;
      background-position: 480px -464px;
    }

    @media screen and (min-width: 90rem) {
      background-position: 661px -419px;
    }
  }
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "content";
  justify-items: center;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content image";
    padding-left: 2.5rem;
  }

  @media screen and (min-width: 1100px) {
    padding-left: 7rem;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 10.25rem;
  }

  .hero-content {
    grid-area: content;
    padding-left: 1rem;
    padding-right: 1rem;

    @media screen and (min-width: 767px) {
      display: flex;
      flex-direction: column;
      padding-top: 5rem;
      padding-left: 0;
    }
    @media screen and (min-width: 1100px) {
      padding-top: 3.75rem;
    }

    @media screen and (min-width: 1280px) {
      padding-right: 2rem;
    }

    & > h1 {
      /*   margin: 0; */
      padding-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 3rem;
      color: #333950;

      @media screen and (min-width: 767px) {
        font-size: 3rem;
        line-height: 3.5rem;
        text-align: left;
      }
      @media screen and (min-width: 1100px) {
        font-size: 3.5rem;
        line-height: 4rem;
      }

      @media screen and (min-width: 1280px) {
        font-size: 4rem;
        line-height: 4.5rem;
      }
    }

    & > span {
      display: block;
      font-size: 1rem;
      line-height: 1.625rem;
      color: #747b95;
      padding-bottom: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      text-align: justify;
      @media screen and (min-width: 767px) {
        padding-bottom: 2rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: left;
        margin-left: 0;
        margin-right: 0;
      }
    }

    & > button {
      display: inline-block;
      height: 3.5rem;
      width: 10.75rem;
      border-radius: 1.75rem;
      font-weight: 700;
      line-height: 3.5rem;
      text-decoration: none;
      transition: all 200ms ease-in-out;
      color: white;
      background-color: #5175ff;
    }
  }
  .hero-image {
    position: relative;
    grid-area: image;
    padding-top: 4rem;
    padding-bottom: 4rem;

    @media screen and (min-width: 767px) {
      padding-bottom: 0;
    }

    & > img {
      height: 20rem;
      width: auto;
      object-fit: contain;
      place-items: center;
      @media screen and (min-width: 767px) {
        height: 23rem;
      }

      @media screen and (min-width: 1100px) {
        height: 38rem;
      }
    }
  }
`;

const Hero = () => {
  return (
    <>
      <IlustrationContainer1></IlustrationContainer1>
      <LogoContainer>
        <img src={Logo} alt="Officelite logo" />
      </LogoContainer>
      <HeroContainer>
        <div className="hero-content">
          <h1>A simple solution to complex tasks is coming soon</h1>
          <span>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </span>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
          <img src={Ilustration1} alt="" />
        </div>
      </HeroContainer>
    </>
  );
};

export default Hero;
