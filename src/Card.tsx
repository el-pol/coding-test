import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImageWrapper = styled.div`
  display: inline-block;
  .product-image {
    width: 100%;
    min-height: 100px;
    height: auto;
    margin: 1rem;
  }
`;
const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .product-name {
    font-size: 24px;
    font-weight: bold;
  }
  .product-price {
    font-size: 36px;
    font-weight: bold;
  }
`;

const PanelWrapper = styled.div`
  background-color: ${(props: PanelProps) =>
    props.isSale ? "#cc3333" : "#009900"};
  color: white;
  display: inline-block;
  .panel-text {
    padding: 0.5rem;
  }
`;

type CardProps = {
  image: string;
  name: string;
  price: string;
  isSale: boolean;
  isExclusive: boolean;
};

// If more booleans are added later, better to change it to a "variant = x | y |z" prop (enum).
type PanelProps = {
  isSale?: boolean;
  isExclusive?: boolean;
};

// The Panel component is in the Card file because it is only used inside the Card component. Could be extracted to be used in other places if needed.
const Panel: FunctionComponent<PanelProps> = props => {
  return (
    <>
      <PanelWrapper isSale={props.isSale}>
        <div className="panel-text">{props.isSale ? "Sale" : "Exclusive"}</div>
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
    <CardWrapper>
      <ProductImageWrapper>
        <img className="product-image" src={image} alt={name} />
        <br />
        {isSale && <Panel isSale />} {isExclusive && <Panel isExclusive />}
      </ProductImageWrapper>
      <ProductDetails>
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
      </ProductDetails>
    </CardWrapper>
  );
};

export default Card;
