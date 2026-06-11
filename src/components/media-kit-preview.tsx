"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

export type MediaKitPreviewProps = {
  /**
   * Live media-kit URL, rendered as a scaled, non-interactive iframe preview.
   * When absent, a branded gradient fallback is shown instead.
   */
  url?: string | null;
  /** Gradient fallback colors when there's no `url`. First color wins. */
  colors?: string[];
  /** Top-right badge, e.g. "Published" / "Draft". */
  badge?: string;
  /** Optional caption overlaid along the bottom (e.g. the creator name). */
  caption?: string | null;
  /**
   * Aspect ratio as width/height. Defaults to a portrait `5/6` because the kit
   * itself is a mobile-optimized one-pager — it fits a rail naturally.
   */
  aspect?: number;
  className?: string;
};

/** Source width the kit renders at before being scaled down to fit. */
const SOURCE_WIDTH = 1100;

/**
 * MediaKitPreview — a scaled, non-interactive thumbnail of a creator's media
 * kit (or a branded gradient when there's no published kit yet). Presentation-
 * only: actions and status text live in the composing surface (e.g. the brand
 * page's media-kit rail). Measures its own width so the preview fills its column
 * at any size, from the desktop rail to the compact mobile bar.
 */
export function MediaKitPreview({
  url,
  colors,
  badge,
  caption,
  aspect = 5 / 6,
  className,
}: MediaKitPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const ro = new ResizeObserver(() => setWidth(el.clientWidth));

    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const height = width > 0 ? Math.round(width / aspect) : 0;
  const scale = width > 0 ? width / SOURCE_WIDTH : 0.25;

  return (
    <div
      ref={ref}
      className={clsx(
        "relative overflow-hidden rounded-xl border border-trovio-light-border dark:border-trovio-dark-border",
        className,
      )}
      style={{ aspectRatio: String(aspect) }}
    >
      {url ? (
        <iframe
          className="pointer-events-none absolute left-0 top-0 origin-top-left"
          src={url}
          style={{
            width: SOURCE_WIDTH,
            height: height > 0 ? Math.ceil(height / scale) : "100%",
            transform: `scale(${scale})`,
          }}
          tabIndex={-1}
          title="Media kit preview"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: colors?.[0]
              ? colors[0]
              : "linear-gradient(150deg, var(--color-trovio-primary-dark) 0%, var(--color-trovio-primary) 80%)",
          }}
        />
      )}

      {badge ? (
        <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[0.6875rem] font-bold text-trovio-light-text">
          {badge}
        </span>
      ) : null}

      {caption ? (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2 text-caption font-semibold text-white">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
