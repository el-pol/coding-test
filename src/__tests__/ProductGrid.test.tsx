import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import ProductGrid from "../ProductGrid";
import mockData from "../products.json";

global.fetch = require("jest-fetch-mock");
// Temporary fix to solve a bug with TypeScript (https://github.com/jefflau/jest-fetch-mock/issues/82)
const fetchAny = fetch as any;

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

console.error = jest.fn();

test("<ProductGrid />", async () => {
  const url = `${process.env.REACT_APP_API_URL}`;
  fetchAny.mockResponseOnce(JSON.stringify(mockData));

  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <ProductGrid sizeFilter="" />
  );

  await waitForElement(() => getByTestId("wrapper"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getAllByTestId("product-card").length).toBe(mockData.length);
  expect(fetchAny).toHaveBeenCalledWith(url);
  expect(fetchAny).toHaveBeenCalledTimes(1);
});

test("<ProductGrid /> API fail", async () => {
  fetchAny.mockReject(new Error("fake error message"));

  const { getByTestId, queryByTestId } = render(<ProductGrid sizeFilter="" />);
  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("wrapper"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(queryByTestId("error")).toBeTruthy();
  expect(fetchAny).toHaveBeenCalledTimes(1);
});

test("<ProductGrid /> displays filtered items", async () => {
  const url = `${process.env.REACT_APP_API_URL}`;
  fetchAny.mockResponseOnce(JSON.stringify(mockData));

  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <ProductGrid sizeFilter="S" />
  );

  const smallItemsLength = mockData.filter(item => item.size.includes("S"))
    .length;

  await waitForElement(() => getByTestId("wrapper"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getAllByTestId("product-card").length).toBe(smallItemsLength);
  expect(fetchAny).toHaveBeenCalledWith(url);
  expect(fetchAny).toHaveBeenCalledTimes(1);
});
