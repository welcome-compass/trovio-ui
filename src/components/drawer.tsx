"use client";

import type { ReactNode } from "react";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { PiXBold } from "react-icons/pi";
import clsx from "clsx";

import { SectionLabel } from "./section-label";

/**
 * Drawer (Component) — a right-side slide-over panel over a dimming scrim.
 *
 * Desktop: ~480px panel anchored right. Mobile (< sm): full-screen sheet.
 * Used e.g. for the Message Crafter ("Draft a pitch") flow so crafting happens
 * in context without losing the underlying list. Presentation-only: open
 * state and behavior live in the consumer.
 */
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  eyebrow?: ReactNode;
  /** Extra content under the title row (e.g. channel/pillar pickers). */
  headerExtra?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  eyebrow,
  headerExtra,
  footer,
  children,
}: DrawerProps) {
  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <button
        aria-label="Close"
        className="absolute inset-0 bg-trovio-light-text/30 backdrop-blur-[1px] dark:bg-black/50"
        type="button"
        onClick={onClose}
      />
      <div
        className={clsx(
          "absolute inset-y-0 right-0 flex w-full flex-col bg-trovio-light-surface shadow-2xl dark:bg-trovio-dark-surface",
          "sm:max-w-[480px]",
        )}
        role="dialog"
      >
        <div className="border-b border-trovio-light-border px-6 py-5 dark:border-trovio-dark-border">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
              <div className="text-section mt-0.5 text-trovio-light-text dark:text-trovio-dark-text">
                {title}
              </div>
            </div>
            <button
              aria-label="Close"
              className="mt-1 shrink-0 text-trovio-light-text-muted hover:text-trovio-light-text dark:text-trovio-dark-text-muted"
              type="button"
              onClick={onClose}
            >
              <PiXBold className="h-5 w-5" />
            </button>
          </div>
          {headerExtra ? <div className="mt-4">{headerExtra}</div> : null}
        </div>

        <div className="flex-1 overflow-auto px-6 py-5">{children}</div>

        {footer ? (
          <div className="border-t border-trovio-light-border px-6 py-4 dark:border-trovio-dark-border">
            {footer}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
