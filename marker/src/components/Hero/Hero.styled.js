import styled from "styled-components";

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  /*  gap: 20px; */
  grid-template-areas:
    "LIC RIC"
    "TC TC";
  width: min(95%, 70.5rem);

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "LIC TC RIC";
    width: min(100%, 70.5rem);
  }

  @media screen and (min-width: 1180px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "LIC TC TC RIC";
    gap: 12rem;
  }
`;

export const LeftImgContainer = styled.div`
  grid-area: LIC;
  @media screen and (min-width: 768px) {
    margin-left: -10rem;
  }
  @media screen and (min-width: 1180px) {
    margin-left: -20rem;
  }
`;
export const RightImgContainer = styled.div`
  grid-area: RIC;
  @media screen and (min-width: 768px) {
    margin-right: -10rem;
  }
  @media screen and (min-width: 1180px) {
    margin-right: -40rem;
  }
`;
export const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  grid-area: TC;

  & > h2 {
    text-align: center;
    /*   padding: 1rem 3rem; */
    font-size: ${({ theme }) => theme.fontSize.two};

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
      padding: 0.25rem;
      font-weight: 800;
      line-height: 40px;
    }

    @media screen and (min-width: 1180px) {
      font-size: 3.5rem;
      line-height: 60px;
      padding: 0;
    }
  }

  & > p {
    /*  padding: 1rem; */
    font-size: ${({ theme }) => theme.fontSize.one};
    line-height: 25px;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: justify;
    }
  }
`;
