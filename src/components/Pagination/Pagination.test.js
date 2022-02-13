/* eslint-disable jest/valid-title */
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import usePagination from "./hook/usePagination";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("should render the correct text", () => {
    const Component = () => {
      const filter = {
        page: 1,
      };
      const items = {
        count: 2,
      };
      const entity = "planets";
      const onPageLeft = jest.fn();
      const onPageRight = jest.fn();
      const paginator = usePagination({
        filter,
        items,
        entity,
        onPageLeft,
        onPageRight,
      });

      return <Pagination paginator={paginator} />;
    };

    render(<Component />);

    screen.getByText(/1 to 2 of 2 planets/i);
  });
});
