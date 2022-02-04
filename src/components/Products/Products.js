import styled from "styled-components";
import Passions from "../../assets/illustration-passions.svg";
import Financial from "../../assets/illustration-financial-freedom.svg";
import Lifestyle from "../../assets/illustration-lifestyle.svg";
import Work from "../../assets/illustration-work-anywhere.svg";
import {
  ProductsSection,
  ProductContainer,
  ImageContainer,
  TextContainer
} from "./Products.styled";

// Utils

const Products = () => {
  return (
    <>
      <ProductsSection>
        <ProductContainer>
          <ImageContainer>
            <img src={Passions} alt="" />
          </ImageContainer>
          <TextContainer>
            <h2>Indulge your passions</h2>
            <p>
              Your passions shouldn't be just for the weekend. Earn a living
              doing what you love.
            </p>
          </TextContainer>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <img src={Financial} alt="" />
          </ImageContainer>
          <TextContainer>
            <h2>Gain financial freedom</h2>
            <p>
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </p>
          </TextContainer>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <img src={Lifestyle} alt="" />
          </ImageContainer>
          <TextContainer>
            <h2>Choose your lifestyle</h2>
            <p>
              Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
              your week.
            </p>
          </TextContainer>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <img src={Work} alt="" />
          </ImageContainer>
          <TextContainer>
            <h2>Work from anywhere</h2>
            <p>
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </p>
          </TextContainer>
        </ProductContainer>
      </ProductsSection>
    </>
  );
};

export default Products;
