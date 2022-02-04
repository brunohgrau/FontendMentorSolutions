import Logo from "../../assets/logo.svg";
import { LogoContainer } from "./Header.styled";

// Utils

const Header = () => {
  return (
    <>
      <header>
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
      </header>
    </>
  );
};

export default Header;
