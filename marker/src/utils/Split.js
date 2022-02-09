import styled from "styled-components";

export const Split1 = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 40rem) {
    flex-direction: row;
    & > * {
      flex-basis: 100%;
    }
    & > * + * {
      margin-left: 2rem;
    }
  }
`;

export const Split2 = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
