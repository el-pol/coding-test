import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../Navbar";

afterEach(() => {
  cleanup();
});

test("<Navbar />", async () => {
  const text = "my text";

  const { getByTestId, getByText } = render(
    <Navbar headingText={text} onChange={jest.fn()} />
  );

  expect(getByTestId("navbar-text")).toBeTruthy();
  expect(getByTestId("navbar-text")).toHaveTextContent(text);
  expect(getByText(/filter by size:/i)).toBeInTheDocument();
  expect(getByTestId("size-select")).toMatchSnapshot();
});
