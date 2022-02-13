/* eslint-disable jest/valid-title */
import { render } from "@testing-library/react";
import PopulationIcon from "./PopulationIcon";

describe("PopulationIcon component", () => {
  it("should render 3 icons", () => {
    render(<PopulationIcon />);
    const result = document.getElementsByTagName("span");
    expect(result.length).toBe(3);
  });
});
