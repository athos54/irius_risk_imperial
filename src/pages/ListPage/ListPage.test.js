/* eslint-disable jest/valid-title */
import {
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import ListPage from "./ListPage";

describe("ListPage component", () => {
  it("expect render data from props", async () => {
    const data = {
      entity: "planets",
      titleKey: "name",
      subtitleKey: "climate",
      descriptionKey: "population",
      descriptionString: (population) => population,
      otherKey: "other",
      otherString: (text) => text,
    };

    render(<ListPage {...data} />);

    await waitFor(() => {
      screen.findByText(/PLANETS/i);
    });
  });
});
