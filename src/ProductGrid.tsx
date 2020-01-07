import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
// We need a testing image, since the API does not return real image sources.
import TestImage from "./images/product-8.jpg";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  @media screen and (min-width: 350px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

type ProductGridProps = {
  sizeFilter: string;
};

type DataResponseItem = {
  index: number;
  isSale: boolean;
  isExclusive: false;
  price: string;
  productImage: string;
  productName: string;
  size: string[];
};

const ProductGrid: FunctionComponent<ProductGridProps> = ({ sizeFilter }) => {
  // For a real app, all the data fetching logic could be extracted into a custom hook, and even a separate file.
  const [data, setData] = useState<DataResponseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, the API URL & key should be hidden.
        const result = await fetch(`${process.env.REACT_APP_API_URL}`);
        const responseData = await result.json();
        setData(responseData);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  // If the size filter is empty, we will display all the items. If the input array was large, the function could be memoized to optimize the performance.
  const filteredItems = (
    filter: string,
    inputArray: DataResponseItem[]
  ): DataResponseItem[] => {
    if (filter === "") {
      return inputArray;
    } else {
      return inputArray.filter(item => item.size.includes(sizeFilter));
    }
  };
  return (
    <>
      {isError && <div data-testid="error">Something went wrong...</div>}
      {isLoading ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        <GridWrapper data-testid="wrapper">
          {filteredItems(sizeFilter, data).map(product => (
            <Card
              key={product.index}
              image={TestImage}
              name={product.productName}
              price={product.price}
              isSale={product.isSale}
              isExclusive={product.isExclusive}
            />
          ))}
        </GridWrapper>
      )}
    </>
  );
};

export default ProductGrid;
