import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";
import Navbar from "../Navbar";
afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<Navbar />", async () => {
  const text = "my text";

  const { getByTestId, getAllByTestId, queryByTestId, getByText } = render(
    <Navbar headingText={text} onChange={jest.fn()} />
  );

  expect(getByTestId("navbar-text")).toBeTruthy();
  expect(getByTestId("navbar-text")).toHaveTextContent(text);
  expect(getByText(/filter by size:/i)).toBeInTheDocument();
  expect(getByTestId("size-select")).toMatchSnapshot();
});

// test("<ProductGrid /> API fail", async () => {
//   fetch.mockReject(new Error("fake error message"));

//   const { getByTestId, queryByTestId } = render(<ProductGrid sizeFilter="" />);
//   expect(getByTestId("loading")).toBeTruthy();
//   await waitForElement(() => getByTestId("wrapper"));
//   expect(queryByTestId("loading")).toBeFalsy();
//   expect(queryByTestId("error")).toBeTruthy();
// });
