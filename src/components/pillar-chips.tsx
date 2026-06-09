"use client";

/**
 * PillarChips — the creator's content pillars as a clean, minimal list.
 *
 * Refresh direction (2026-06): near-monochrome. Pillars render as plain rows
 * with a single small neutral dot — no colored pills, no container. Names only;
 * engagement isn't classified pre-activation so we never show numbers here.
 */
export interface PillarChipItem {
  id: string;
  name: string;
  color?: string;
}

export function PillarChips({ pillars }: { pillars?: PillarChipItem[] }) {
  if (!pillars || pillars.length === 0) return null;

  return (
    <ul className="space-y-3.5">
      {pillars.map((pillar) => (
        <li
          key={pillar.id}
          className="flex items-center gap-3 text-base text-trovio-light-text dark:text-trovio-dark-text"
        >
          <span
            aria-hidden
            className="h-2 w-2 shrink-0 rounded-full bg-trovio-light-text-muted/40 dark:bg-trovio-dark-text-muted/40"
          />
          {pillar.name}
        </li>
      ))}
    </ul>
  );
}
