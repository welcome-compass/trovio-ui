"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

export interface EmailMessageProps {
  /** Subject line. Omitted for non-email channels (renders body-only). */
  subject?: string;
  body: string;
  /** Sender display name (e.g. the creator's name or "You"). */
  fromName?: string;
  /** Sender email, shown muted next to the name. */
  fromEmail?: string;
  /** Optional avatar image for the sender; falls back to an initial. */
  fromAvatarUrl?: string;
  /** Recipient label, e.g. "partnerships@glossier.com" or "Glossier team". */
  to?: string;
  /** Small eyebrow above the subject — e.g. the angle name or a "Recommended" tag. */
  tag?: ReactNode;
  /** Action row (Send / Copy / Rewrite). Rendered in the email "footer". */
  actions?: ReactNode;
  /** Emphasize as the primary/recommended draft. */
  highlighted?: boolean;
  className?: string;
}

function initialOf(name?: string): string {
  return (name?.trim()?.[0] ?? "Y").toUpperCase();
}

/**
 * EmailMessage — renders a drafted pitch the way it'll actually land in an
 * inbox: a Gmail-style card with a sender row, subject, body, and an actions
 * footer. Presentation-only; the consumer supplies copy + action buttons.
 */
export function EmailMessage({
  subject,
  body,
  fromName,
  fromEmail,
  fromAvatarUrl,
  to,
  tag,
  actions,
  highlighted,
  className,
}: EmailMessageProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border bg-trovio-light-surface dark:bg-trovio-dark-surface",
        highlighted
          ? "border-trovio-primary shadow-[0_0_0_3px_rgba(102,102,255,0.08)]"
          : "border-trovio-light-border dark:border-trovio-dark-border",
        className,
      )}
    >
      {/* Header — sender identity, like the top of an open email. */}
      <div className="flex items-start gap-3 border-b border-trovio-light-border px-4 py-3 dark:border-trovio-dark-border">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-trovio-primary/12 text-caption font-semibold text-trovio-primary">
          {fromAvatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt="" className="h-full w-full object-cover" src={fromAvatarUrl} />
          ) : (
            initialOf(fromName)
          )}
        </div>
        <div className="min-w-0 flex-1">
          {tag ? <div className="mb-0.5">{tag}</div> : null}
          <div className="flex flex-wrap items-baseline gap-x-1.5">
            <span className="text-caption font-semibold text-trovio-light-text dark:text-trovio-dark-text">
              {fromName ?? "You"}
            </span>
            {fromEmail ? (
              <span className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
                &lt;{fromEmail}&gt;
              </span>
            ) : null}
          </div>
          {to ? (
            <div className="text-micro text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
              to {to}
            </div>
          ) : null}
        </div>
      </div>

      {/* Body — subject then message, as it reads in the inbox. */}
      <div className="px-4 py-3.5">
        {subject ? (
          <p className="mb-2 text-sm font-semibold text-trovio-light-text dark:text-trovio-dark-text">
            {subject}
          </p>
        ) : null}
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-trovio-light-text/90 dark:text-trovio-dark-text/90">
          {body}
        </p>
      </div>

      {actions ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-trovio-light-border px-4 py-2.5 dark:border-trovio-dark-border">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
