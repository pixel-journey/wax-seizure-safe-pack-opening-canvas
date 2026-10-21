/**
 * How many reveals to show. More than 3 per second becomes one.
 * Nothing is animated.
 */

export function reveals(count: number, windowMs: number): { shown: number; slowed: boolean } {
  if (!Number.isInteger(count) || count < 1 || count > 50) throw new Error("count must be an integer from 1 to 50");
  if (!Number.isInteger(windowMs) || windowMs < 1 || windowMs > 60_000) throw new Error("windowMs must be an integer from 1 to 60000");
  const tooFast = count * 1_000 > 3 * windowMs;
  return tooFast ? { shown: 1, slowed: true } : { shown: count, slowed: false };
}
