/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("expect render title of page", () => {
    render(<Header />);
    screen.getByText(/Imperial destroyers center/i);
  });
});
