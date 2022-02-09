import styled from "styled-components";

export const PricingSection = styled.section`
  width: min(95%, 70.5rem);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 768px) {
    width: min(60%, 70.5rem);
    margin-top: 3rem;
  }
  @media screen and (min-width: 1180px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "HC HC" "CC SC";
    gap: 4rem;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  grid-area: HC;

  & > h2 {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.onefifth};
    @media screen and (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.two};
    }
  }

  & > p {
    color: gray;
    text-align: center;
    font-size: 1rem;
    line-height: 25px;
  }
`;

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  padding: 1rem;
  border-radius: 0.5rem;
  @media screen and (min-width: 1180px) {
    grid-area: CC;
  }
`;

export const SecondaryCardContainer = styled(CardContainer)`
  background: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  color: black;
  @media screen and (min-width: 1180px) {
    margin-top: 0;
    grid-area: SC;
  }
`;

export const CardProducts = styled.div`
  & > h2 {
    text-align: start;
  }

  & > ul {
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.one};
  }

  & > ul > li > span {
    font-size: ${({ theme }) => theme.fontSize.one};
    margin-bottom: 1rem;
  }
`;

export const CardProductsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  line-height: 25px;
  gap: 15px;
  & > span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const CardImageContainer = styled.div`
  & > img {
    margin-top: -2rem;
  }
`;
