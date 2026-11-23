# AI handoff — pack reveal budget

## Non-negotiables

1. Slowed when `count * 1000 > 3 * windowMs`. Equality is **not** slowed.
2. `reveals(3, 1000)` → `{ shown: 3, slowed: false }`.
3. `reveals(4, 1000)` → `{ shown: 1, slowed: true }`.
4. `reveals(3, 999)` → `{ shown: 1, slowed: true }`.
5. Excess becomes **`shown: 1`**, not 3. The sibling animation lab **clamps to the max** instead. Do not merge them.
6. Nothing is animated. Not a medical claim. Not WCAG conformance.

## Prompt seeds

- "4 reveals in 1000 ms — shown count and slowed flag."
- "3 reveals in 999 ms versus 1000 ms."
- "Contrast collapse-to-1 here with clampFlashes in wax-seizure-safe-animations."

## Do not

- Clamp excess to 3 and still cite these tests.
- Claim a medical or WCAG certificate.
