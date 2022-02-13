/* eslint-disable jest/valid-title */
import { renderHook } from "@testing-library/react-hooks";
import useListPage from "./useListPage";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";
import * as planetService from "services/planetService";

describe("useListPage hook", () => {
  it("if page 1 and handlePageLeft, filter should return page 1", async () => {
    const { result } = renderHook(() => useListPage("planets"));

    await waitFor(() => {
      result.current.setFilter({
        page: 1,
      });
    });

    await waitFor(() => {
      result.current.handlePageLeft();
    });

    expect(result.current.filter).toStrictEqual({ page: 1 });
  });

  it("if page 2 and handlePageLeft, filter should return page 1", async () => {
    const { result } = renderHook(() => useListPage("planets"));

    await waitFor(() => {
      result.current.setFilter({
        page: 2,
      });
    });

    await waitFor(() => {
      result.current.handlePageLeft();
    });

    expect(result.current.filter).toStrictEqual({ page: 1 });
  });

  it("if page 3 and handlePageLeft, filter should return page 2", async () => {
    const { result } = renderHook(() => useListPage("planets"));

    await waitFor(() => {
      result.current.setFilter({
        page: 3,
      });
    });

    await waitFor(() => {
      result.current.handlePageLeft();
    });

    expect(result.current.filter).toStrictEqual({ page: 2 });
  });

  it("if page 1 and handlePageRight, filter should return page 2", async () => {
    const { result } = renderHook(() => useListPage("planets"));

    await waitFor(() => {
      result.current.setFilter({
        page: 1,
      });
    });

    await waitFor(() => {
      result.current.handlePageRight();
    });

    expect(result.current.filter).toStrictEqual({ page: 2 });
  });
});
