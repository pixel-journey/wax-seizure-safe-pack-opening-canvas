# Sources

| Source | Use |
| --- | --- |
| [WCAG 2.2 three flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) | Understanding |
| [seizure-safe-animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | **Clamp** to max (different product) |

## Product facts locked by tests

- Slowed when `count * 1000 > 3 * windowMs`.
- Equality not slowed: `reveals(3, 1000)` → shown 3.
- Excess → **`shown: 1`**, not 3.
