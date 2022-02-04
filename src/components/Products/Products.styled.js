import styled from "styled-components";

export const ProductsSection = styled.section`
  width: min(95%, 70.5rem);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: min(80%, 70.5rem);
    margin-top: 3rem;
  }

  @media screen and (min-width: 1180px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: min(90%, 70.5rem);
    margin-top: 3rem;
  }
`;

export const ProductContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "IMG TXT";
  }

  @media screen and (min-width: 1180px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "IMG"
      "TXT";
  }
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 124px;
  margin: 1rem auto;
  background: #093f69;
  display: flex;
  place-content: center;
  align-items: center;
  border-radius: 45px;
  @media screen and (min-width: 768px) {
  }
  & > img {
    display: block;
    margin: 0 auto;
    grid-area: IMG;
    @media screen and (min-width: 768px) {
    }
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: TXT;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 1rem 3rem;
    font-size: ${({ theme }) => theme.fontSize.onefourth};
    @media screen and (min-width: 768px) {
      padding: 0;
    }
  }

  & > p {
    color: gray;
    padding: 1rem;
    font-size: 1rem;
    line-height: 25px;
    text-align: center;
  }
`;
