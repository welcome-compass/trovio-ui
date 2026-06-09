"use client";

import type { ReactNode } from "react";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * ClampText (Primitive) — line-clamped text with a built-in expand affordance.
 *
 * Design rule: truncated text must always be reachable. This renders its
 * children clamped to `lines`, and when (and only when) the content actually
 * overflows, shows a "More" toggle to expand inline. Use it anywhere copy can
 * run long (brand match rationales, notes, descriptions) instead of a bare
 * `line-clamp-*` / `truncate`.
 */
export interface ClampTextProps {
  children: ReactNode;
  /** Max lines while collapsed. Default 3. */
  lines?: number;
  moreLabel?: string;
  lessLabel?: string;
  className?: string;
  /** Class for the More/Less toggle button. */
  toggleClassName?: string;
}

export function ClampText({
  children,
  lines = 3,
  moreLabel = "More",
  lessLabel = "Less",
  className,
  toggleClassName,
}: ClampTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const check = () => {
      // +1 tolerates sub-pixel rounding so we don't show a no-op toggle.
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };

    check();
    const ro = new ResizeObserver(check);

    ro.observe(el);

    return () => ro.disconnect();
  }, [children, lines, expanded]);

  return (
    <div className={className}>
      <div
        ref={ref}
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: lines,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }
        }
      >
        {children}
      </div>
      {(overflows || expanded) && (
        <button
          className={clsx(
            "mt-1 cursor-pointer text-caption font-semibold text-trovio-primary",
            toggleClassName,
          )}
          type="button"
          onClick={(e) => {
            // Keep row/card-level click handlers from firing.
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
