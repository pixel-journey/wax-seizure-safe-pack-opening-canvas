# Security — pack reveal rate (collapse to one)

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Rate above 3 per second | `shown: 1`, `slowed: true` |
| Rate at equality (3 in 1000 ms) | not slowed, `shown: 3` |
| `reveals(3, 999)` | slowed (`shown: 1`) |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| WCAG area / red | Not measured |
| Animation engine | Host must apply the count |
| Medical claims | Forbidden marketing |
| Live pack contracts | Not called |

## Attack angles

1. Using **clamp-to-3** for pack UX and still flashing three rapid cards.  
2. Labeling the page "seizure safe" from this helper alone.  
3. Treating equality as slowed (tests keep 3 in 1000 as not slowed).  
4. Claiming WCAG conformance from rate only.  
5. Animating excess reveals when `slowed: true`.

## Honesty limits

Nothing is animated. Soft product UX rule only.

| Sibling | Excess behavior |
| --- | --- |
| **This (pack canvas)** | collapse to **shown: 1** |
| [seizure-safe animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | **clamp** to 3/s |
| [reduced-motion](https://github.com/pixel-journey/wax-reduced-motion-dashboard) | frames → 1, duration → 0 |

[WCAG understanding](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) · [docs.wax.io](https://docs.wax.io/).
