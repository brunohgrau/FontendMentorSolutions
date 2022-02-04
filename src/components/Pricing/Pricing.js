import {
  PricingSection,
  HeaderContainer,
  CardContainer,
  CardProducts,
  CardProductsItem,
  CardImageContainer,
  SecondaryCardContainer
} from "./Pricing.styled";

import PricingLogo1 from "../../assets/icon-free.svg";
import PricingLogo2 from "../../assets/icon-paid.svg";

// Utils

const Pricing = () => {
  return (
    <>
      <PricingSection>
        <HeaderContainer>
          <h2>Our pricing plans</h2>
          <p>
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </HeaderContainer>
        <CardContainer>
          <CardImageContainer>
            <img src={PricingLogo1} alt="" />
          </CardImageContainer>
          <div className="card__info">
            <h3>Dip your toe</h3>
            <p>
              Just getting started? No problem at all! Our free plan will take
              you a long way.
            </p>
          </div>

          <CardProducts>
            <h2>Free</h2>
            <ul>
              <CardProductsItem>
                <span>✓</span>
                Unlimited products
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                Basic analytics
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                Limited marketplace exposure
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                10% fee per transaction
              </CardProductsItem>
            </ul>
          </CardProducts>
        </CardContainer>
        <SecondaryCardContainer>
          <CardImageContainer>
            <img src={PricingLogo2} alt="" />
          </CardImageContainer>
          <div className="card__info">
            <h3>Dive right in</h3>
            <p>
              Ready for the big time? Our paid plan will help you take your
              business to the next level.
            </p>
          </div>

          <CardProducts>
            <h2>$25.00 /month</h2>
            <ul>
              <CardProductsItem>
                <span>✓</span>
                Custom domain
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                Advanced analytics and reports
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                High marketplace visibility
              </CardProductsItem>
              <CardProductsItem>
                <span>✓</span>
                5% fee per transaction
              </CardProductsItem>
            </ul>
          </CardProducts>
        </SecondaryCardContainer>
      </PricingSection>
    </>
  );
};

export default Pricing;
