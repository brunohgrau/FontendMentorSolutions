import styled from "styled-components";
import Logo from "../assets/shared/logo.svg";
import HeaderIlustration1 from "../assets/home/bg-pattern-header.svg";
import Ilustration1 from "../assets/home/illustration-charts.svg";
import "./pricing.css";

const HeaderContainer = styled.header`
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

const SignupContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 3rem;
  padding-right: 3rem;

  @media screen and (min-width: 48rem) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (min-width: 64rem) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 10.25rem;
    padding-right: 10.25rem;
  }
`;
const SignupIntro = styled.div`
  margin-bottom: 4rem;
  /*  text-align: center; */

  @media (min-width: 48rem) {
    margin-bottom: 6.5rem;
  }

  @media (min-width: 64rem) {
    /*   padding-left: 6.5rem; */
    padding-right: 6.5rem;
  }

  @media (min-width: 90rem) {
    flex: 50%;
    margin-bottom: 0;
    padding: 0;
    padding-right: 2.75rem;
    text-align: left;
  }

  .signup__header {
    padding-bottom: 4rem;

    @media (min-width: 48rem) {
      padding-top: 1.5rem;
      padding-bottom: 2.5rem;
    }

    @media (min-width: 90rem) {
      padding-top: 2.5rem;
    }

    & > h1 {
      margin: 0;
      padding-bottom: 1rem;

      font-size: 2rem;
      font-weight: 700;
      line-height: 3rem;
      color: #333950;

      @media (min-width: 64rem) {
        font-size: 3rem;
        line-height: 3.5rem;
      }

      @media (min-width: 90rem) {
        padding-bottom: 1.5rem;
        font-size: 3.5rem;
        line-height: 4rem;
      }
    }

    & > span {
      font-size: 1rem;
      line-height: 1.625rem;
      color: #747b95;

      @media (min-width: 64rem) {
        padding-right: 1rem;
        padding-bottom: 2rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }

  .countdown-clock {
    & > h2 {
      display: block;
      margin-top: 4rem;
      /*      padding-bottom: 1.125rem; */
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 700;
      line-height: 3rem;
      letter-spacing: 0.3125rem;

      @media (min-width: 90rem) {
        text-align: left;
        padding-bottom: 0.5rem;
      }
      & > span {
        color: #5175ff;
      }
    }
  }

  .countdown-clock__timer {
    display: -ms-grid;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
    gap: 0.75rem;
    margin: auto;
    padding-bottom: 2.5rem;
    max-width: 28rem;

    @media (min-width: 90rem) {
      margin: 0;
    }
  }

  .countdown-clock__card {
    border-radius: 0.25rem;
    text-align: center;
    background-color: rgba(81, 117, 255, 0.15);
    @media (min-width: 48rem) {
      max-width: 8.25rem;
      border-radius: 0.75rem;
    }
  }

  .countdown-clock__number {
    display: block;
    padding: 0.75rem 1rem 0 1rem;
    text-align: center;
    font-size: 1rem;
    line-height: 3rem;
    font-weight: 700;
    @media (max-width: 23.375rem) {
      font-size: 1.75rem;
      padding: 0.75rem 0.5rem 0 0.5rem;
    }

    @media (min-width: 48rem) {
      padding-top: 2rem;
      font-size: 2rem;
    }
  }
`;

const SignupInfo = styled.div`
  padding-bottom: 5.5rem;

  @media (min-width: 90rem) {
    flex: 50%;
    margin-right: 0;
    padding-bottom: 0;
  }

  & > form {
    max-width: 27.75rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: white;
    margin: 0 auto;
    box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);

    @media (min-width: 90rem) {
      margin-right: 0;
      padding: 2.5rem;
    }

    .form__group {
      position: relative;
    }

    .custom-select {
      position: relative;
    }
  }
`;

const Hero = () => {
  return (
    <div class="body--signup">
      <HeaderContainer class="header header--signup container">
        <a href="/index.html" aria-label="Home" class="header__logo">
          <img src={Logo} alt="Officelite logo" />
        </a>
      </HeaderContainer>
      <main>
        <SignupContainer>
          <SignupIntro>
            <div class="signup__header">
              <h1>Work smarter. Save time.</h1>
              <span>
                Easily manage your projects. Get on the list and receive in-app
                perks available only to early subscribers. We are moving into
                final development and getting ready for official launch soon.
              </span>
            </div>
            <div class="countdown-clock">
              <h2>
                Coming <span>4 Nov 2020</span>
              </h2>
              <div className="countdown-clock__timer">
                <div class="countdown-clock__card ">
                  <span class="countdown-clock__number countdown-clock--blue__number js-days-left">
                    47
                  </span>
                  <span class="countdown-clock__text countdown-clock--blue__text">
                    days
                  </span>
                </div>
                <div class="countdown-clock__card ">
                  <span class="countdown-clock__number countdown-clock--blue__number js-hours-left">
                    07
                  </span>
                  <span class="countdown-clock__text countdown-clock--blue__text">
                    hours
                  </span>
                </div>
                <div class="countdown-clock__card ">
                  <span class="countdown-clock__number countdown-clock--blue__number js-minutes-left">
                    56
                  </span>
                  <span class="countdown-clock__text countdown-clock--blue__text">
                    min
                  </span>
                </div>
                <div class="countdown-clock__card ">
                  <span class="countdown-clock__number countdown-clock--blue__number js-seconds-left">
                    14
                  </span>
                  <span class="countdown-clock__text countdown-clock--blue__text">
                    sec
                  </span>
                </div>
              </div>
            </div>
          </SignupIntro>
          <SignupInfo>
            <form action="/">
              <div>
                <label for="name" class="hidden-visually">
                  Enter name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form__control js-form-name"
                  placeholder="Name"
                  autocomplete="name"
                  required
                />
              </div>
              <div>
                <label for="email" class="hidden-visually">
                  Enter email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="form__control js-form-email"
                  placeholder="Email"
                  autocomplete="email"
                  required
                />
              </div>

              <div>
                <label for="tel" class="hidden-visually">
                  Telephone number
                </label>
                <input
                  id="tel"
                  type="tel"
                  name="telNo"
                  class="form__control"
                  placeholder="Phone number"
                  autocomplete="tel"
                />
              </div>
              <div>
                <label for="company" class="hidden-visually">
                  Company name
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  class="form__control"
                  placeholder="Company"
                  autocomplte="organization"
                />
              </div>

              <button type="submit" class="btn form__submit">
                Get on the list
              </button>
            </form>
          </SignupInfo>
        </SignupContainer>
      </main>
    </div>
  );
};

export default Hero;
