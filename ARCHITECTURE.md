# Architecture — pack reveal rate gate

## Pure core

`reveals(count, windowMs)` lives in `src/pack.ts`.

```
count:     integer 1..50
windowMs:  integer 1..60000

tooFast = count * 1000 > 3 * windowMs

if tooFast → { shown: 1, slowed: true }
else       → { shown: count, slowed: false }
```

Equality (`3 * 1000 === 3 * 1000`) is **not** slowed.

## Contrast with animations lab

| Module | Excess path |
| --- | --- |
| This pack gate | collapse shown → 1 |
| `wax-seizure-safe-animations` clampFlashes | keep at most 3 per window |

Do not swap the helpers: pack UX that clamps still shows three rapid cards.

## What is not in the tree

- Canvas animation or flash measurement
- Atomic Packs / AtomicAssets contract calls
- WCAG conformance claims
- Browser media-query reads

## UI

`Demo.tsx` is offline. It does not open a socket and it does not sign.

## Verification

`npm test` locks the equality boundary, collapse-to-1, and input bounds.
