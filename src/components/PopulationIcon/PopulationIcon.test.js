/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import PopulationIcon from "./PopulationIcon";

describe("PopulationIcon component", () => {
  it("should render the correct text", () => {
    render(<PopulationIcon />);
    const result = document.getElementsByTagName("span");
    expect(result.length).toBe(3);
  });
});
