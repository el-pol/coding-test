import React, { FunctionComponent } from "react";
import styled from "styled-components";
import mockData from "./products.json";
import Card from "./Card";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const ProductGrid: FunctionComponent = () => {
  return (
    <GridWrapper>
      {mockData.map(product => (
        <Card
          key={product.index}
          image={product.productImage}
          name={product.productName}
          price={product.price}
          isSale={product.isSale}
          isExclusive={product.isExclusive}
        />
      ))}
    </GridWrapper>
  );
};

export default ProductGrid;
