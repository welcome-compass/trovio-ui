/**
 * Compact number formatting for stat displays (followers, posts, etc.).
 *
 *   24300   -> "24.3K"
 *   312     -> "312"
 *   1200000 -> "1.2M"
 *   null    -> "—"
 *
 * Single source of truth so StatStrip and the crisp locked Media Kit card
 * render identical strings. One decimal place, trailing ".0" dropped.
 */
export function formatCompactNumber(n?: number | null): string {
  if (n == null || !Number.isFinite(n)) return "—";

  const abs = Math.abs(n);

  if (abs < 1000) return String(Math.round(n));

  const units: { value: number; suffix: string }[] = [
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ];

  for (const { value, suffix } of units) {
    if (abs >= value) {
      const scaled = (n / value).toFixed(1).replace(/\.0$/, "");

      return `${scaled}${suffix}`;
    }
  }

  return String(Math.round(n));
}
