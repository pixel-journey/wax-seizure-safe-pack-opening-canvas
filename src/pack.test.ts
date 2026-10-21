import { describe, expect, it } from "vitest";
import { reveals } from "./pack";

describe("pack reveals", () => {
  it("slows anything faster than 3 per second", () => {
    expect(reveals(3, 1_000)).toEqual({ shown: 3, slowed: false });
    expect(reveals(4, 1_000)).toEqual({ shown: 1, slowed: true });
  });
});
