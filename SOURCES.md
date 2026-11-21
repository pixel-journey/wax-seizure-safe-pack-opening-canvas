# Sources

| Source | Use |
| --- | --- |
| [WCAG 2.2 three flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) | Understanding |
| [seizure-safe-animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | **Clamp** to max (different product) |
| [reduced-motion dashboard](https://github.com/pixel-journey/wax-reduced-motion-dashboard) | Preference flag, different product |
| [docs.wax.io](https://docs.wax.io/) | WAX / pack product context |

## Product facts locked by tests

| Call | Result |
| --- | --- |
| `reveals(3, 1000)` | `{ shown: 3, slowed: false }` |
| `reveals(4, 1000)` | `{ shown: 1, slowed: true }` |
| `reveals(3, 999)` | `{ shown: 1, slowed: true }` |

- Slowed when `count * 1000 > 3 * windowMs`.
- Equality **not** slowed.
- Excess → **`shown: 1`**, not 3.
- Nothing is animated. Not a medical claim. Not WCAG conformance.
