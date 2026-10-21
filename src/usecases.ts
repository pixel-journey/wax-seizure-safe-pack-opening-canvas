import { ATOMIC_ORIGIN, atomicAssets } from "./api";
import { reveals } from "./pack";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const fast = reveals(4, 1_000);

export const USE_CASES: UseCase[] = [
  {
    title: "Owned assets are not a pack animation",
    detail: `4 reveals in 1000 ms become ${fast.shown} shown. 3 in 1000 ms stay 3. The asset request is not sent.`,
    request: atomicAssets(ATOMIC_ORIGIN, "alice", "pixeljourney"),
    transaction: null,
  },
  {
    title: "Nothing is opened on chain",
    detail: "A slowed pack does not build a reveal action.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (!fast.slowed || fast.shown !== 1 || reveals(3, 1_000).slowed) throw new Error("pack");
}
