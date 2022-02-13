/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList component", () => {
  it("expect render data from props", () => {
    const data = {
      items: {
        results: [
          {
            name: "earth",
            climate: "hot",
            population: "population",
            other: "other",
          },
        ],
      },
      entity: "planets",
      titleKey: "name",
      subtitleKey: "climate",
      descriptionKey: "population",
      descriptionString: (population) => population,
      otherKey: "other",
      otherString: (text) => text,
    };

    render(<CardList {...data} />);

    expect(screen.getByText(data.items.results[0].name)).toBeInTheDocument();
    expect(screen.getByText(data.items.results[0].climate)).toBeInTheDocument();
    expect(
      screen.getByText(data.items.results[0].population)
    ).toBeInTheDocument();
  });
});
