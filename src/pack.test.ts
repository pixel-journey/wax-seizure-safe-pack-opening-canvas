import { describe, expect, it } from "vitest";
import { reveals } from "./pack";

describe("pack reveals", () => {
  it("slows anything faster than 3 per second", () => {
    expect(reveals(3, 1_000)).toEqual({ shown: 3, slowed: false });
    expect(reveals(4, 1_000)).toEqual({ shown: 1, slowed: true });
    expect(reveals(3, 999)).toEqual({ shown: 1, slowed: true });
  });

  it("equality is not slowed (3 in 1000)", () => {
    // count * 1000 > 3 * windowMs → 3000 > 3000 is false
    expect(reveals(3, 1000).slowed).toBe(false);
    expect(reveals(3, 1000).shown).toBe(3);
  });

  it("when slowed, shown collapses to 1 not 3", () => {
    expect(reveals(10, 1000)).toEqual({ shown: 1, slowed: true });
  });

  it("refuses count outside 1..50", () => {
    expect(() => reveals(0, 1000)).toThrow(/count/);
    expect(() => reveals(51, 1000)).toThrow(/count/);
    expect(() => reveals(1.5, 1000)).toThrow(/count/);
  });

  it("refuses windowMs outside 1..60000", () => {
    expect(() => reveals(1, 0)).toThrow(/windowMs/);
    expect(() => reveals(1, 60_001)).toThrow(/windowMs/);
    expect(() => reveals(1, 1.5)).toThrow(/windowMs/);
  });
});
