# Security — pack reveal rate

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Rate above 3 per second | `shown: 1`, `slowed: true` |
| Rate at equality | not slowed |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| WCAG area / red | Not measured |
| Animation engine | Host must apply the count |
| Medical claims | Forbidden marketing |

## Attack angles

1. Using clamp-to-3 for pack UX and still flashing rapidly.  
2. Labeling the page "seizure safe" from this helper alone.

## Honesty limits

Nothing is animated. [WCAG understanding](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) · [animations clamp lab](https://github.com/pixel-journey/wax-seizure-safe-animations).
