# Education — more than three reveals a second becomes one

> **Rung:** `npm test` passes. Nothing is animated. This is not a WCAG audit and not a pack opening.  
> **The test is the rule.** [WCAG 2.2 three flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Clamp-to-maximum is [wax-seizure-safe-animations](https://github.com/pixel-journey/wax-seizure-safe-animations).

Official context: [docs.wax.io](https://docs.wax.io/).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | 3/s stays; 4/s becomes shown=1 |
| Intermediate | Explain equality is not slowed |
| Masterclass | Never mix with clampFlashes |

---

## Beginner — one scene

Slowed when `count * 1000 > 3 * windowMs`. The equal case is **not** slowed. When slowed, `shown` becomes **`1`**, not `3`.

| Call | Locked result |
| --- | --- |
| `reveals(3, 1000)` | `{ shown: 3, slowed: false }` |
| `reveals(4, 1000)` | `{ shown: 1, slowed: true }` |
| `reveals(3, 999)` | `{ shown: 1, slowed: true }` |

```bash
npm test
```

---

## Intermediate

Product UX choice: a pack that would fire too fast shows a **single** safe pose instead of three rapid cards. The animations lab instead **clamps** to the maximum allowed count.

| Lab | Excess behavior |
| --- | --- |
| **This (pack canvas)** | collapse to **shown: 1** |
| [seizure-safe animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | **clamp** to 3/s |

Unsent Atomic Packs HTTP examples are not this rate check.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Use clampFlashes for pack UX | would still show 3 rapid |
| Treat equality as slow | 3 in 1000 is not slowed |
| Call this WCAG conformance | rate only; not a full audit |

---

## Masterclass

### Common mistakes

1. Implementing pack UX with `clampFlashes` and getting three rapid reveals.  
2. Claiming WCAG conformance from this rate only.  
3. Treating `slowed: true` as a medical diagnosis.

### Exercises

1. `reveals(4, 1000).shown`? (**`1`**.)  
2. Is 3 in 1000 slowed? (**No**.)  
3. Same as animations lab? (**No**.)

---

## What this course will not teach

- Live pack contracts
- Area / red flash measurement
- Medical guarantees
