import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 100px;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const ProductName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const ProductPrice = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  background-color: ${(props: PanelProps) =>
    props.isSale ? "#cc3333" : "#009900"};
  color: white;
  width: max-content;
`;
const PanelText = styled.p`
  padding: 1rem;
  text-align: center;
  margin: 0;
`;

type CardProps = {
  image: string;
  name: string;
  price: string;
  isSale: boolean;
  isExclusive: boolean;
};

// If more booleans are added later, recommended to change the prop into a "variant = x | y | z" (TS enum).
type PanelProps = {
  isSale?: boolean;
  isExclusive?: boolean;
};

// The Panel component is in the Card file because it is only used inside the Card component. Could be extracted to be used in other places if needed.
const Panel: FunctionComponent<PanelProps> = props => {
  return (
    <>
      <PanelWrapper isSale={props.isSale}>
        <PanelText data-testid="panel-text">
          {props.isSale ? "Sale" : "Exclusive"}
        </PanelText>
      </PanelWrapper>
    </>
  );
};

const Card: FunctionComponent<CardProps> = ({
  image,
  name,
  price,
  isSale,
  isExclusive
}) => {
  // Panel component accounts for cases where an item is on sale and is exclusive as well (not in the API, but could happen "in real life").
  return (
    <CardWrapper data-testid="product-card">
      <ProductImageWrapper>
        <ProductImage data-testid="product-image" src={image} alt={name} />
        <br />
        {isSale && <Panel isSale />} {isExclusive && <Panel isExclusive />}
      </ProductImageWrapper>
      <ProductDetails data-testid="product-card-details">
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductDetails>
    </CardWrapper>
  );
};

export default Card;
