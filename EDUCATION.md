# Education — more than three reveals a second becomes one

> **Rung:** `npm test` passes. Nothing is animated. This is not a WCAG audit and not a pack opening.  
> **The test is the rule.** The three-flashes understanding document is [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). This function does not measure flashes, area, or brightness.

## Predict, then run

Slowed when `count * 1000 > 3 * windowMs`. The equal case is not slowed. When it is slowed, `shown` becomes `1`, not `3`.

| Call | Locked result |
| --- | --- |
| `reveals(3, 1000)` | `{ shown: 3, slowed: false }` |
| `reveals(4, 1000)` | `{ shown: 1, slowed: true }` |
| `reveals(3, 999)` | `{ shown: 1, slowed: true }` |

Count must be an integer from 1 to 50. The window must be an integer from 1 to 60000 milliseconds.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this rate check. A tested unbox memo is a different lab: [wax-atomicassets-v2-action-previews](https://github.com/pixel-journey/wax-atomicassets-v2-action-previews).
