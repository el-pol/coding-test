import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import ProductGrid from "../ProductGrid";
import mockData from "../products.json";

global.fetch = require("jest-fetch-mock");
afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<ProductGrid />", async () => {
  fetch.mockResponseOnce(JSON.stringify(mockData));

  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <ProductGrid sizeFilter="" />
  );

  await waitForElement(() => getByTestId("wrapper"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getAllByTestId("product").length).toBe(mockData.length);
});

test("<ProductGrid /> API fail", async () => {
  fetch.mockReject(new Error("fake error message"));

  const { getByTestId, queryByTestId } = render(<ProductGrid sizeFilter="" />);
  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("wrapper"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(queryByTestId("error")).toBeTruthy();
});
