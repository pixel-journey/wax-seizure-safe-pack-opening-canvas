"use client";

import { reveals } from "./pack";

export function Demo() {
  const safe = reveals(3, 1_000);
  const fast = reveals(4, 1_000);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Three reveals a second, not four</h1>
      <p className="lede">3 in 1000 ms stays 3. 4 becomes a single reveal. Nothing is animated.</p>
      <p>
        3 shown {safe.shown}. 4 shown {fast.shown}, slowed {String(fast.slowed)}.
      </p>
    </main>
  );
}
