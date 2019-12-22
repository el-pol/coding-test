import React from "react";
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
    font-weight: bold;
  }
  .product-price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const PanelWrapper = styled.div`
  background-color: ${(props: IPanelProps) =>
    props.isSale ? "#cc3333" : "#009900"};
  color: white;
  display: inline-block;
  .panel-text {
    padding: 0.5rem;
  }
`;

interface ICardProps {
  image: string;
  name: string;
  price: string;
  isSale: boolean;
  isExclusive: boolean;
}

// If more booleans are added later, better to change it to a "variant = x | y |z" prop (enum).
interface IPanelProps {
  isSale?: boolean;
  isExclusive?: boolean;
}

// The Panel component is in the Card file because it is only used inside the Card component. Could be extracted to be used in other places if needed.
const Panel = (props: IPanelProps) => {
  return (
    <>
      <PanelWrapper isSale={props.isSale}>
        <div className="panel-text">{props.isSale ? "Sale" : "Exclusive"}</div>
      </PanelWrapper>
    </>
  );
};

const Card = ({ image, name, price, isSale, isExclusive }: ICardProps) => {
  // Panel component accounts for cases where an item is on sale and is exclusive as well (not in the API, but could happen "in real life").
  return (
    <CardWrapper>
      <ProductImageWrapper>
        <img className="product-image" src={image} alt={name} />
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
