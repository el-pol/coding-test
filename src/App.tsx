import React, { FunctionComponent } from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import ProductGrid from "./ProductGrid";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <main>
        <ProductGrid />
      </main>
    </>
  );
};

export default App;
