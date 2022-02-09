import {
  FooterContainer,
  FooterForm,
  StyledLabel,
  StyledInput,
  StyledButton
} from "./Footer.styled";

// Utils

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h2>Get notified when we launch</h2>

        <FooterForm action="">
          <StyledLabel for="Email Address">
            <StyledInput type="text" placeholder="Email Address" />
          </StyledLabel>

          <StyledButton> Get Notified </StyledButton>
        </FooterForm>
      </FooterContainer>
    </>
  );
};

export default Footer;
