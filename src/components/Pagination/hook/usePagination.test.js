/* eslint-disable jest/valid-title */
import { renderHook } from "@testing-library/react-hooks";
import usePagination from "./usePagination";

describe("usePagination hook", () => {
  it("if you are on page 1 you cant click page left", async () => {
    const filter = {
      page: 1,
    };
    const items = {
      count: 2,
    };
    const entity = "planets";
    const onPageLeft = jest.fn();
    const onPageRight = jest.fn();

    const { result } = renderHook(() =>
      usePagination({
        filter,
        items,
        entity,
        onPageLeft,
        onPageRight,
      })
    );

    result.current.handleClickLeft();

    expect(onPageLeft).not.toHaveBeenCalled();
  });

  it("if you are on page 2 you can click page left", async () => {
    const filter = {
      page: 2,
    };
    const items = {
      count: 12,
    };
    const entity = "planets";
    const onPageLeft = jest.fn();
    const onPageRight = jest.fn();

    const { result } = renderHook(() =>
      usePagination({
        filter,
        items,
        entity,
        onPageLeft,
        onPageRight,
      })
    );

    result.current.handleClickLeft();

    expect(onPageLeft).toHaveBeenCalled();
  });

  it("you can click page right", async () => {
    const filter = {
      page: 1,
    };
    const items = {
      count: 12,
    };
    const entity = "planets";
    const onPageLeft = jest.fn();
    const onPageRight = jest.fn();

    const { result } = renderHook(() =>
      usePagination({
        filter,
        items,
        entity,
        onPageLeft,
        onPageRight,
      })
    );

    result.current.handleClickRight();

    expect(onPageRight).toHaveBeenCalled();
  });

  it("if max is equal total, you cant click page right", async () => {
    const filter = {
      page: 2,
    };
    const items = {
      count: 12,
    };
    const entity = "planets";
    const onPageLeft = jest.fn();
    const onPageRight = jest.fn();

    const { result } = renderHook(() =>
      usePagination({
        filter,
        items,
        entity,
        onPageLeft,
        onPageRight,
      })
    );

    result.current.handleClickRight();

    expect(onPageRight).not.toHaveBeenCalled();
  });
});
