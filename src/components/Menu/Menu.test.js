/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu component", () => {
  it("expect render data from props", () => {
    render(<Menu />);
    screen.getByText(/planets/i);
    screen.getByText(/starships/i);
    screen.getByText(/people/i);
    screen.getByText(/vehicles/i);
    screen.getByText(/Error example/i);
  });
});
