import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  screen
} from "@testing-library/react";
import App from "../App";
afterEach(() => {
  cleanup();
});

test("<App />", async () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("render")).toBeInTheDocument();
});
