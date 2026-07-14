"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import clsx from "clsx";

/**
 * Carousel (Primitive) — a generic horizontal scroll-snap rail with directional
 * edge-fades, arrow controls, and a slim progress indicator. Presentation-only
 * and content-agnostic: it knows nothing about what it scrolls, so it works for
 * any row of fixed-width items (creator cards, media kits, campaigns, …).
 *
 * Chrome is self-managing: fades, arrows, and the progress bar appear only when
 * there is actually more to scroll, and the arrows disable at each end. The
 * scroll-state math is encapsulated here so consumers never re-implement it.
 *
 * For layouts that place the prev/next controls outside the rail (e.g. in a
 * section header), pass `showArrows={false}` and drive scrolling through the
 * imperative `ref` (`scrollPrev` / `scrollNext`) using live state from
 * `onScrollStateChange`.
 */
export interface CarouselScrollState {
  canLeft: boolean;
  canRight: boolean;
  scrollable: boolean;
}

export interface CarouselHandle {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export interface CarouselProps {
  children: React.ReactNode;
  /** Gap between items, in px. Default 14. */
  gap?: number;
  /**
   * The color the edge-fades blend into — MUST match the surrounding page
   * background or the fade will look like a smudge. Default `var(--background)`
   * (the theme-aware HeroUI surface token, flips for dark mode).
   */
  fadeColor?: string;
  /** Render the built-in overlay arrows. Default true. Auto-hidden when content fits. */
  showArrows?: boolean;
  /** Render the slim progress indicator. Default true. */
  showProgress?: boolean;
  /**
   * When false, suppresses all chrome (arrows/fades/progress) regardless of
   * scrollability — use while the rail is loading skeletons. Default true.
   */
  chromeActive?: boolean;
  /** Accessible label for the scroll region (e.g. the section name). */
  ariaLabel?: string;
  /** Fires on every scroll-state change — use to drive externally-placed controls. */
  onScrollStateChange?: (state: CarouselScrollState) => void;
  className?: string;
}

const arrowClass =
  "absolute top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg border border-trovio-light-border bg-trovio-light-surface text-trovio-light-text-muted shadow-sm transition-colors hover:bg-trovio-light-bg hover:text-trovio-light-text disabled:pointer-events-none disabled:opacity-30 dark:border-trovio-dark-border dark:bg-trovio-dark-surface dark:text-trovio-dark-text-muted dark:hover:bg-trovio-dark-bg";

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(function Carousel(
  {
    children,
    gap = 14,
    fadeColor = "var(--background)",
    showArrows = true,
    showProgress = true,
    chromeActive = true,
    ariaLabel,
    onScrollStateChange,
    className,
  },
  ref,
) {
  const railRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CarouselScrollState>({
    canLeft: false,
    canRight: false,
    scrollable: false,
  });
  const [thumb, setThumb] = useState({ width: 0, offset: 0 });

  const update = useCallback(() => {
    const rail = railRef.current;

    if (!rail) return;

    if (!chromeActive) {
      const next = { canLeft: false, canRight: false, scrollable: false };

      setState(next);
      setThumb({ width: 0, offset: 0 });
      onScrollStateChange?.(next);

      return;
    }

    const max = rail.scrollWidth - rail.clientWidth;
    const x = rail.scrollLeft;
    const scrollable = max > 4;
    const canLeft = scrollable && x > 2;
    const canRight = scrollable && x < max - 2;
    const next = { canLeft, canRight, scrollable };

    setState(next);
    onScrollStateChange?.(next);

    if (scrollable) {
      const width = Math.max((rail.clientWidth / rail.scrollWidth) * 100, 12);
      const prog = max > 0 ? x / max : 0;

      setThumb({ width, offset: prog * (100 - width) });
    } else {
      setThumb({ width: 0, offset: 0 });
    }
  }, [chromeActive, onScrollStateChange]);

  const scrollByDir = useCallback((dir: 1 | -1) => {
    const rail = railRef.current;

    if (!rail) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    rail.scrollBy({
      left: dir * rail.clientWidth * 0.85,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  useImperativeHandle(
    ref,
    () => ({ scrollPrev: () => scrollByDir(-1), scrollNext: () => scrollByDir(1) }),
    [scrollByDir],
  );

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    rail.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => update());

    ro.observe(rail);
    update();

    return () => {
      rail.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [update]);

  // Recompute when the set of children changes (async populate, filtering, …).
  useEffect(() => {
    update();
  }, [children, update]);

  const showChrome = chromeActive && state.scrollable;

  return (
    <div className={className}>
      <div className="relative">
        {/* edge fades — present only when there's more to scroll that way */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-11 transition-opacity duration-200"
          style={{
            background: `linear-gradient(90deg, ${fadeColor} 20%, transparent)`,
            opacity: showChrome && state.canLeft ? 1 : 0,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-11 transition-opacity duration-200"
          style={{
            background: `linear-gradient(270deg, ${fadeColor} 20%, transparent)`,
            opacity: showChrome && state.canRight ? 1 : 0,
          }}
        />

        {showArrows && showChrome && (
          <>
            <button
              aria-label="Scroll left"
              className={clsx(arrowClass, "left-1")}
              disabled={!state.canLeft}
              type="button"
              onClick={() => scrollByDir(-1)}
            >
              <PiCaretLeftBold size={14} />
            </button>
            <button
              aria-label="Scroll right"
              className={clsx(arrowClass, "right-1")}
              disabled={!state.canRight}
              type="button"
              onClick={() => scrollByDir(1)}
            >
              <PiCaretRightBold size={14} />
            </button>
          </>
        )}

        <div
          ref={railRef}
          aria-label={ariaLabel}
          className="flex overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          style={{ gap, scrollSnapType: "x proximity", paddingTop: 8, paddingBottom: 8 }}
        >
          {React.Children.map(children, (child) => (
            <div className="shrink-0" style={{ scrollSnapAlign: "start" }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showProgress && showChrome && (
        <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-trovio-light-border dark:bg-trovio-dark-border">
          <div
            className="h-full rounded-full bg-trovio-light-text-muted/30 transition-[width,margin] duration-100 dark:bg-trovio-dark-text-muted/30"
            style={{ width: `${thumb.width}%`, marginLeft: `${thumb.offset}%` }}
          />
        </div>
      )}
    </div>
  );
});
