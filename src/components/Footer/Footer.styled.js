import styled from "styled-components";

export const FooterContainer = styled.div`
  width: min(95%, 70.5rem);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 1180px) {
    width: min(60%, 70.5rem);
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.onefifth};
  }
`;

export const FooterForm = styled.form`
  margin-top: 20px;
  @media screen and (min-width: 1180px) {
    display: flex;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  border-radius: 24px;
  border: 1px solid transparent;
  overflow: hidden;
  /*  width: 320px; */
  width: 320px;
  max-width: 100%;
  color: white;
  margin: 1rem auto;
`;

export const StyledInput = styled.input`
  max-width: 100%;
  width: 320px;
  padding: 12px;
  background-color: #093f68;
  border: none;
  line-height: 25px;
  font-weight: 800;
  color: #fff;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  font-size: 0.9375rem;
  line-height: 25px;
  font-weight: 800;
  padding: 12px 0px;
  color: #093f68;
  background-color: #3ee9e5;
  margin: 1rem auto;
  display: block;
  border-radius: 24px;
  border: 1px solid transparent;
  overflow: hidden;
  width: 320px;
  max-width: 100%;
  @media screen and (min-width: 1180px) {
    width: 220px;
  }
`;
