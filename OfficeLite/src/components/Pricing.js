import styled from "styled-components";
import "./pricing.css";

const SectionContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 6.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }

  @media screen and (min-width: 64rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: 90rem) {
    gap: 1.75rem;
    margin-bottom: 5.5rem;
    padding-left: 10.25rem;
    padding-right: 10.25rem;
  }
`;

const Card = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  border-radius: 0.75rem;
  text-align: center;
  background-color: ${(props) => (props.secondary ? "#5175ff" : "white")};
  color: ${(props) => (props.secondary ? "white" : "#333950")};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 47.9375rem) {
    /*   max-width: 27rem; */
    margin: auto;
  }

  @media (min-width: 48rem) and (max-width: 63.9375rem) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 2.75rem auto 3.5rem;
    grid-template-areas:
      "info ."
      "info features"
      "button .";
    padding: 3rem 0 3rem 3rem;
    text-align: left;
  }

  @media screen and (min-width: 64rem) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  /*   Header  */

  & > div {
    @media (min-width: 48rem) and (max-width: 63.9375rem) {
      grid-area: info;
    }

    & > h2 {
      margin: 0;
      padding-bottom: 2.5rem;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.75rem;
      @media (min-width: 48rem) and (max-width: 63.9375rem) {
        padding-bottom: 1rem;
      }
    }
    & > span {
      display: block;
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 4rem;
      padding-bottom: 0.5rem;
    }

    & > p {
      display: block;
      font-size: 1rem;
      line-height: 1.75rem;
      padding-bottom: 3.5rem;

      @media (min-width: 48rem) and (max-width: 63.9375rem) {
        padding-bottom: 0;
      }
    }
  }

  /*   Features */
  & > ul {
    margin: 0;
    padding-left: 0;
    padding-bottom: 2rem;
    list-style: none;
    font-size: 1rem;
    line-height: 1.75rem;
    @media (min-width: 48rem) and (max-width: 63.9375rem) {
      grid-area: features;
      padding-bottom: 0;
    }
    &:not(:last-child) {
      padding-bottom: 1rem;
    }
  }

  /*   Button  */

  & > a {
    display: inline-block;
    height: 3.5rem;
    width: 10.75rem;
    margin-top: 1.5rem;
    border-radius: 1.75rem;
    text-align: center;
    font-weight: 700;
    line-height: 3.5rem;
    transition: all 200ms ease-in-out;
    color: #5175ff;

    background-color: ${(props) =>
      props.secondary ? "white" : "rgba(81, 117, 255, 0.15)"};

    @media (min-width: 48rem) and (max-width: 63.9375rem) {
      grid-area: button;
    }
  }
`;

const Pricing = () => {
  return (
    <>
      <SectionContainer>
        <Card>
          <div>
            <h2>Basic</h2>
            <span>Free</span>
            <p>Up to 5 users for free</p>
          </div>
          <ul>
            <li>Basic document collaboration</li>
            <li>2 gb storage</li>
            <li>Great security and support</li>
          </ul>
          <a href="/sign-up.html">Try for Free</a>
        </Card>
        <Card secondary>
          <div>
            <h2>Pro</h2>
            <span>$9.99</span>
            <p>Per user, billed monthly</p>
          </div>
          <ul>
            <li>All essential integrations</li>
            <li>50 gb storage</li>
            <li>More control and insights</li>
          </ul>
          <a href="/sign-up.html">Try for Free</a>
        </Card>
        <Card>
          <div>
            <h2>Ultimate</h2>
            <span>$19.99</span>
            <p>Per user, billed monthly</p>
          </div>
          <ul>
            <li>Robust work management</li>
            <li>100 gb storage</li>
            <li>VIP support</li>
          </ul>
          <a href="/sign-up.html" class="btn btn--blue pricing__card__button">
            Try for Free
          </a>
        </Card>
      </SectionContainer>
    </>
  );
};

export default Pricing;
