# wax-seizure-safe-pack-opening-canvas

> **Trust label:** `educational-reference`  
> **Status:** Course-format upgrade (2026-11-26)  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Teach a **pack reveal rate gate** — more than three reveals per second collapses to a single safe pose — without animating anything or claiming WCAG conformance.

## Locked scene

Slowed when `count * 1000 > 3 * windowMs`. Equality is **not** slowed. When slowed, `shown` becomes **1**, not 3.

| Call | Result |
| --- | --- |
| `reveals(3, 1000)` | `{ shown: 3, slowed: false }` |
| `reveals(4, 1000)` | `{ shown: 1, slowed: true }` |
| `reveals(3, 999)` | `{ shown: 1, slowed: true }` |

```ts
import { reveals } from "./src/pack";
reveals(4, 1000);
// { shown: 1, slowed: true }
```

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/pack.ts` | Pure rate gate |
| `src/pack.test.ts` | Locked claims (bounds, equality, collapse) |
| `src/usecases.ts` | HTTP shapes built and not sent |
| `src/Demo.tsx` | Offline page |
| [EDUCATION.md](EDUCATION.md) | Beginner → Intermediate → Masterclass course |

## Quick start

```bash
npm install
npm test
npm run dev
```

## Not the same as the animations lab

| Lab | Excess behavior |
| --- | --- |
| **This (pack canvas)** | collapse to **shown: 1** |
| [wax-seizure-safe-animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | **clamp** to 3/s |

Using `clampFlashes` for pack UX would still show three rapid cards. This lab deliberately collapses.

## Boundaries

- Nothing is animated
- Not a live `atomicpacksx` unbox
- Not a WCAG audit or medical guarantee
- count 1..50 · windowMs 1..60000

## Related

- [wax-seizure-safe-animations](https://github.com/pixel-journey/wax-seizure-safe-animations)
- [wax-reduced-motion-dashboard](https://github.com/pixel-journey/wax-reduced-motion-dashboard)
- [WCAG 2.2 three flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)

## License

MIT — Pixel Journey
