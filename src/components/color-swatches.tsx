"use client";

import {
  brandColors,
  semanticColors,
  lightColors,
  darkColors,
} from "../tokens/design-tokens";

/**
 * ColorSwatches — renders the Trovio color tokens from the canonical token
 * module (config/design-tokens.ts). Swatch fill uses the literal hex so it's
 * always accurate; the label documents the token name, value, and the Tailwind
 * class to use in code.
 */
function Swatch({
  name,
  value,
  twClass,
}: {
  name: string;
  value: string;
  twClass: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-trovio-light-border dark:border-trovio-dark-border">
      <div className="h-20 w-full" style={{ backgroundColor: value }} />
      <div className="space-y-0.5 bg-trovio-light-surface p-3 dark:bg-trovio-dark-surface">
        <p className="text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {name}
        </p>
        <p className="font-mono text-xs text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
          {value}
        </p>
        <p className="font-mono text-xs text-trovio-primary">{twClass}</p>
      </div>
    </div>
  );
}

function Group({
  title,
  entries,
}: {
  title: string;
  entries: { name: string; value: string; twClass: string }[];
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold text-trovio-light-text dark:text-trovio-dark-text">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {entries.map((e) => (
          <Swatch key={e.name} {...e} />
        ))}
      </div>
    </section>
  );
}

export function ColorSwatches() {
  return (
    <div className="space-y-10">
      <Group
        entries={Object.entries(brandColors).map(([k, v]) => ({
          name: k,
          value: v,
          twClass: `bg-trovio-${k}`,
        }))}
        title="Brand"
      />
      <Group
        entries={Object.entries(semanticColors).map(([k, v]) => ({
          name: k,
          value: v,
          twClass: `bg-trovio-${k}`,
        }))}
        title="Semantic"
      />
      <Group
        entries={Object.entries(lightColors).map(([k, v]) => ({
          name: k,
          value: v,
          twClass: `bg-trovio-light-${k}`,
        }))}
        title="Light surfaces & text"
      />
      <Group
        entries={Object.entries(darkColors).map(([k, v]) => ({
          name: k,
          value: v,
          twClass: `bg-trovio-dark-${k}`,
        }))}
        title="Dark surfaces & text"
      />
    </div>
  );
}
