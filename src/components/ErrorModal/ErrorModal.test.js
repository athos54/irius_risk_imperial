/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import ErrorModal from "./ErrorModal";

describe("ErrorModal component", () => {
  it("expect render data from props", () => {
    const data = {
      close: () => {},
      errorDescription: "Error description",
    };

    render(<ErrorModal {...data} />);

    expect(screen.getByText(data.errorDescription)).toBeInTheDocument();
  });
});
