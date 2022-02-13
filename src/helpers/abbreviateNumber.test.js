/* eslint-disable jest/valid-title */
import { abbreviateNumber } from "./abbreviateNumber";

describe("abbreviateNumber helper", () => {
  it("100 should return 100", () => {
    const result = abbreviateNumber(100);
    expect(result).toBe(100);
  });

  it("100000 should return 100.0k", () => {
    const result = abbreviateNumber(100000);
    expect(result).toBe("100.0k");
  });

  it("1000000 should return 1.0M", () => {
    const result = abbreviateNumber(1000000);
    expect(result).toBe("1.0M");
  });

  it("1000000000 should return 1.0B", () => {
    const result = abbreviateNumber(1000000000);
    expect(result).toBe("1.0B");
  });
});
