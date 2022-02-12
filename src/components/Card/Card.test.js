/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("expect render data from props", () => {
    const data = {
      img: "https://picsum.photos/200/300",
      title: "myTitle",
      subtitle: "mySubtitle",
      description: "myDescription",
      other: "myOther",
    };

    render(<Card {...data} />);

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByText(data.subtitle)).toBeInTheDocument();
    expect(screen.getByText(data.description)).toBeInTheDocument();
    expect(screen.getByText(data.other)).toBeInTheDocument();
  });

  it("expect render default image if img not exists", async () => {
    const data = {
      img: "https://notexists.com/200/300",
      title: "myTitle",
      subtitle: "mySubtitle",
      description: "myDescription",
      other: "myOther",
    };

    render(<Card {...data} />);

    const image = screen.getByRole("img");
    fireEvent.error(image);

    expect(image.src.indexOf("assets/not_found.jpeg")).toBeGreaterThan(-1);
  });
});
