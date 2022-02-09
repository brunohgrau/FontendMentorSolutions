import HeroLeft from "../../assets/illustration-hero-left.svg";
import HeroRight from "../../assets/illustration-hero-right.svg";
import {
  HeroSection,
  LeftImgContainer,
  RightImgContainer,
  TextContainer
} from "./Hero.styled";

// Utils

const Hero = () => {
  return (
    <>
      <HeroSection>
        <LeftImgContainer>
          <img src={HeroLeft} alt="" />
        </LeftImgContainer>
        <TextContainer>
          <h2>Get paid for the work you love to do</h2>
          <p>
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </TextContainer>
        <RightImgContainer>
          <img src={HeroRight} alt="" />
        </RightImgContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
