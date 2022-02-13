/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should render my name", () => {
    render(<Footer />);
    screen.getByText(/by athos orío/i);
  });
});
