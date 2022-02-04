import styled from "styled-components";

export const LogoContainer = styled.div`
  & > img {
    display: block;
    /*  center */
    margin: 2.5rem auto 4rem;

    @media screen and (min-width: 768px) {
      margin-top: 3rem;
      margin-left: 3rem;
    }

    @media screen and (min-width: 1180px) {
      margin-top: 5rem;
      margin-left: 10rem;
    }
  }
`;
