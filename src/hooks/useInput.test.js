/* eslint-disable jest/valid-title */
import {
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useInput from "./useInput";

describe("useInput hook", () => {
  it("if change with '' value should be ''", async () => {
    const { result } = renderHook(() => useInput());

    await waitFor(() => {
      result.current.onChange({ target: { value: "" } });
    });

    expect(result.current.value).toBe("");
  });

  it("if change with 'hello world' value should be 'hello world'", async () => {
    const { result } = renderHook(() => useInput());

    await waitFor(() => {
      result.current.onChange({ target: { value: "hello world" } });
    });

    expect(result.current.value).toBe("hello world");
  });

  it("if change with 'hello world' and call clear value should be ''", async () => {
    const { result } = renderHook(() => useInput());

    await waitFor(() => {
      result.current.onChange({ target: { value: "hello world" } });
      result.current.clear();
    });

    expect(result.current.value).toBe("");
  });
});
