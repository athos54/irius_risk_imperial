/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu component", () => {
  it("expect render data from props", () => {
    render(<Menu />);
    screen.getByText(/planets/i);
    screen.getByText(/starships/i);
    screen.getByText(/people/i);
    screen.getByText(/vehicles/i);
  });
});
