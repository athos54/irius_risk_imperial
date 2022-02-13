/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("should render the correct text", () => {
    render(<Spinner />);
    screen.getByTestId("spinner");
  });
});
