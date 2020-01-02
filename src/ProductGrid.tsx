import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
// We need a testing image, since the API does not return real image sources. Uncomment next line and change <Card /> props to test with a real image.
// import TestImage from "./images/product-8.jpg";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
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
  // Replace the image prop with "TestImage" to test product image display.
  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        <GridWrapper data-testid="wrapper">
          {filteredItems(sizeFilter, data).map(product => (
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
      )}
    </>
  );
};

export default ProductGrid;
