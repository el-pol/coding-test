import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "../Card";

afterEach(() => {
  cleanup();
});

test("<Card />", async () => {
  const cardPropsMock = {
    image: "product-image.jpg",
    name: "Test name",
    price: "20$",
    isSale: false,
    isExclusive: true
  };

  const { getByTestId, queryByTestId } = render(<Card {...cardPropsMock} />);

  const productDetails = queryByTestId("product-card-details");
  const panelText = queryByTestId("panel-text");
  const productImage = queryByTestId("product-image");

  expect(getByTestId("product-card")).toBeTruthy();
  expect(productDetails).toBeTruthy();
  expect(productDetails).toHaveTextContent(cardPropsMock.name);
  expect(productDetails).toHaveTextContent(cardPropsMock.price);
  expect(productImage).toBeTruthy();
  expect(productImage).toHaveAttribute("src", cardPropsMock.image);
  expect(productImage).toHaveAttribute("alt", cardPropsMock.name);
  expect(panelText).toBeTruthy();
  expect(panelText).toHaveTextContent(/exclusive/i);
});
