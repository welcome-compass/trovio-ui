"use client";

import { typeScale, fonts } from "../tokens/design-tokens";

/**
 * TypeSpecimen — renders the Trovio type scale (Barlow) + font weights + the
 * accent face, from the canonical token module. Each row shows the live sample
 * rendered with its real Tailwind class plus the class string for reference.
 */
export function TypeSpecimen() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          Type scale — {fonts.sans.family}
        </h3>
        <div className="space-y-6">
          {typeScale.map((t) => (
            <div
              key={t.name}
              className="border-b border-trovio-light-border pb-6 last:border-0 dark:border-trovio-dark-border"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-trovio-primary">
                  {t.name}
                </span>
                <span className="text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                  {t.usage}
                </span>
                <span className="font-mono text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                  {t.class}
                </span>
              </div>
              <p className={`${t.class} text-trovio-light-text dark:text-trovio-dark-text`}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          Weights — {fonts.sans.family}
        </h3>
        <div className="space-y-2">
          {fonts.sans.weights.map((w) => (
            <p
              key={w}
              className="text-2xl text-trovio-light-text dark:text-trovio-dark-text"
              style={{ fontWeight: w }}
            >
              {w} — The quick brown fox jumps over the lazy dog
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          Accent — {fonts.accent.family}{" "}
          <span className="text-sm font-normal text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            (logo / brand moments only)
          </span>
        </h3>
        <p
          className="text-3xl text-trovio-primary"
          style={{ fontFamily: "var(--font-accent), cursive" }}
        >
          Made for creators
        </p>
      </section>
    </div>
  );
}
