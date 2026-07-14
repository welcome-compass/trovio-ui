"use client";

import type { ReactNode } from "react";

import {
  PiPencilSimple,
  PiTrash,
  PiPause,
  PiPlay,
} from "react-icons/pi";
import clsx from "clsx";

import { ClampText } from "./clamp-text";
import { TrovioBadge } from "./trovio-badge";
import { TrovioButton } from "./trovio-button";

/** Conversation lifecycle, mirroring the brands-API conversation status. */
export type ConversationStatus = "active" | "paused" | "archived" | "rejected";

/** Badge status + label per conversation status. */
const STATUS_BADGE: Record<
  ConversationStatus,
  { status: "success" | "warning" | "archived" | "error"; label: string }
> = {
  active: { status: "success", label: "Active" },
  paused: { status: "warning", label: "Paused" },
  archived: { status: "archived", label: "Archived" },
  rejected: { status: "error", label: "Rejected" },
};

/**
 * ConversationCard — one conversation in a brand's manage-conversations list:
 * the theme name, its description (the section blurb creators get matched
 * against), a status badge, and the Edit / Pause·Resume / Remove actions.
 *
 * The conversation is a brand's unit of intent ("a theme, not a campaign"), so
 * this is its presentation analog to CreatorCard on the Explore surface.
 *
 * Presentation-only: it holds no state. The consumer owns the data and reacts
 * to the callbacks; each action button renders only when its handler is given,
 * so the card is valid read-only (no handlers) or fully editable. `isBusy`
 * disables the actions while a mutation is in flight.
 */
export interface ConversationCardProps {
  /** Theme name — the card's heading. */
  name: string;
  /** The conversation description / blurb. Clamped with an inline expand. */
  description: string;
  /** Lifecycle status; drives the badge. Omit to hide the badge. */
  status?: ConversationStatus;
  /** Lines the description clamps to before a "More" toggle. Default 2. */
  descriptionLines?: number;

  /** Show an Edit button wired to this handler. */
  onEdit?: () => void;
  /** Show a Remove button wired to this handler. */
  onDelete?: () => void;
  /**
   * Show a Pause/Resume button wired to this handler. The label follows
   * `status` (Pause when active, Resume when paused); hidden for
   * archived/rejected conversations.
   */
  onTogglePause?: () => void;

  /** Disable the action buttons (e.g. while saving/deleting). */
  isBusy?: boolean;
  /** Extra content rendered below the description (e.g. metadata). */
  children?: ReactNode;
  className?: string;
}

export function ConversationCard({
  name,
  description,
  status,
  descriptionLines = 2,
  onEdit,
  onDelete,
  onTogglePause,
  isBusy = false,
  children,
  className,
}: ConversationCardProps) {
  const badge = status ? STATUS_BADGE[status] : null;
  // Pause/Resume only makes sense for a live conversation.
  const canTogglePause =
    Boolean(onTogglePause) && (status === "active" || status === "paused");
  const paused = status === "paused";
  const showActions = Boolean(onEdit || onDelete || canTogglePause);

  return (
    <article
      aria-label={name}
      className={clsx(
        "flex flex-col gap-3 rounded-2xl border border-trovio-light-border bg-trovio-light-surface p-5 shadow-sm transition-colors dark:border-trovio-dark-border dark:bg-trovio-dark-surface",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <h3 className="min-w-0 flex-1 text-base font-semibold text-trovio-light-text dark:text-trovio-dark-text">
          {name}
        </h3>
        {badge && (
          <TrovioBadge className="shrink-0" status={badge.status}>
            {badge.label}
          </TrovioBadge>
        )}
      </div>

      {description && (
        <ClampText
          className="text-caption leading-normal text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
          lines={descriptionLines}
        >
          {description}
        </ClampText>
      )}

      {children}

      {showActions && (
        <div className="mt-0.5 flex flex-wrap gap-2">
          {onEdit && (
            <TrovioButton
              className="gap-1.5"
              isDisabled={isBusy}
              size="sm"
              variant="secondary"
              onClick={onEdit}
            >
              <PiPencilSimple size={14} />
              Edit
            </TrovioButton>
          )}
          {canTogglePause && (
            <TrovioButton
              className="gap-1.5"
              isDisabled={isBusy}
              size="sm"
              variant="tertiary"
              onClick={onTogglePause}
            >
              {paused ? <PiPlay size={14} /> : <PiPause size={14} />}
              {paused ? "Resume" : "Pause"}
            </TrovioButton>
          )}
          {onDelete && (
            <TrovioButton
              aria-label="Remove conversation"
              className="ml-auto gap-1.5 text-trovio-error hover:text-trovio-error"
              isDisabled={isBusy}
              size="sm"
              variant="tertiary"
              onClick={onDelete}
            >
              <PiTrash size={14} />
              Remove
            </TrovioButton>
          )}
        </div>
      )}
    </article>
  );
}
