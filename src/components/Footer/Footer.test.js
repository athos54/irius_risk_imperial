/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Card component", () => {
  it("expect render data from props", () => {
    render(<Footer />);
    screen.getByText(/by athos orío/i);
  });
});
