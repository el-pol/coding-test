import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "./Card";
import mockData from "./products.json";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

type ProductGridProps = {
  sizeFilter: string;
};

const ProductGrid: FunctionComponent<ProductGridProps> = ({ sizeFilter }) => {
  const filteredItems = mockData.filter(item => item.size.includes(sizeFilter));
  return (
    <GridWrapper>
      {filteredItems.map(product => (
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
