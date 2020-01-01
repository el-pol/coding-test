import React, { FunctionComponent, useState } from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import ProductGrid from "./ProductGrid";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

const App: FunctionComponent = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const changeSize = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedSize(e.target.value);
  };

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <header>
        <Navbar onChange={changeSize} headingText="Women's tops" />
      </header>
      <main>
        <ProductGrid sizeFilter={selectedSize} />
      </main>
    </>
  );
};

export default App;
