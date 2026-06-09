"use client";

import { PiLockKeyDuotone } from "react-icons/pi";

/**
 * LockChip — the small "locked" badge used on locked feature cards. Shared so
 * the acquainted locked cards (and any future locked surfaces) read identically.
 */
export function LockChip({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-trovio-light-bg px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-trovio-light-text-muted dark:bg-trovio-dark-bg dark:text-trovio-dark-text-muted">
      <PiLockKeyDuotone size={12} />
      {label ?? "Locked"}
    </span>
  );
}
