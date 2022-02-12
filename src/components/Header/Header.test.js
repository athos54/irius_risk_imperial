/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Card component", () => {
  it("expect render data from props", () => {
    render(<Header />);
    screen.getByText(/Imperial destroyers center/i);
  });
});
