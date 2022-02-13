/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("should render on screen", () => {
    render(<Spinner />);
    screen.getByTestId("spinner");
  });
});
