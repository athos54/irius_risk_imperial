/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import { useState } from "react";
import Filters from "./Filters";

describe("Filters component", () => {
  it("should have an input and select", async () => {
    const Component = () => {
      const [filter, setFilter] = useState({ search: "" });
      const data = {
        filter,
        setFilter,
        options: [{ value: 1, label: "myLabel" }],
      };
      return <Filters {...data} />;
    };

    render(<Component />);

    screen.getByRole("textbox");
    screen.getByRole("combobox");
  });
});
