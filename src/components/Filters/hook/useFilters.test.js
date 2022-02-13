/* eslint-disable jest/valid-title */
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFilters from "./useFilters";

describe("Filters component", () => {
  it("toggleOrder with order asc should call with order desc", async () => {
    const setFilter = jest.fn();
    const filter = {
      order: "asc",
    };

    const { result } = renderHook(() => useFilters({ filter, setFilter }));

    result.current.toggleOrder();

    expect(setFilter).toHaveBeenCalledWith({ order: "desc" });
  });

  it("toggleOrder with order desc should call with order asc", async () => {
    const setFilter = jest.fn();
    const filter = {
      order: "desc",
    };

    const { result } = renderHook(() => useFilters({ filter, setFilter }));

    result.current.toggleOrder();

    expect(setFilter).toHaveBeenCalledWith({ order: "asc" });
  });

  it("handleSelectChange should call setFilter with {ordering: [value]}", async () => {
    const setFilter = jest.fn();
    const filter = {};

    const { result } = renderHook(() => useFilters({ filter, setFilter }));

    result.current.handleSelectChange({ target: { value: 3 } });

    expect(setFilter).toHaveBeenCalledWith({ ordering: 3 });
  });

  it("handleSearchChange sould set timer", async () => {
    const setFilter = jest.fn();
    const filter = {
      search: "something",
    };

    const { result } = renderHook(() => useFilters({ filter, setFilter }));
    await waitFor(() => {
      result.current.handleSearchChange("mySearchValue");
    });
    expect(result.current.timer).not.toBe(null);
  });
});
