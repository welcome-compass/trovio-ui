"use client";

import clsx from "clsx";

/**
 * JourneyStepper — numbered step indicator for "where you stand". Editorial
 * styling: numbered circles with labels below, a single indigo accent for
 * done/current, neutral for upcoming.
 *
 * Layout: equal flex-1 columns (fully responsive — fits any width down to
 * mobile). Each circle sits between two flex-1 line segments, so the connectors
 * always render and every circle stays centered in its column; the first/last
 * outer segments are transparent.
 *
 * Doctrine (DESIGN.md §3.7): the current node is never the last node — an
 * upcoming step always follows so the journey reads as ongoing.
 *
 *   completed -> filled indigo circle (white number)
 *   current   -> indigo-ringed circle (indigo number); tappable when onCurrentClick set
 *   upcoming  -> neutral outline circle (muted number)
 */
export type JourneyStepStatus = "completed" | "current" | "upcoming";

export interface JourneyStep {
  label: string;
  status: JourneyStepStatus;
}

export function JourneyStepper({
  steps,
  onCurrentClick,
}: {
  steps: JourneyStep[];
  onCurrentClick?: () => void;
}) {
  if (!steps.length) return null;

  const lineClass = (done: boolean) =>
    done
      ? "bg-trovio-primary"
      : "bg-trovio-light-border dark:bg-trovio-dark-border";

  return (
    <div className="flex items-start">
      {steps.map((step, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === steps.length - 1;
        // A connecting line is "done" (indigo) once its preceding step is done.
        const leftDone = idx > 0 && steps[idx - 1].status === "completed";
        const rightDone = step.status === "completed";

        const circleBase =
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors sm:h-10 sm:w-10 sm:text-sm";
        const circle = clsx(
          circleBase,
          step.status === "completed" && "bg-trovio-primary text-white",
          step.status === "current" &&
            "border-2 border-trovio-primary text-trovio-primary",
          step.status === "upcoming" &&
            "border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted",
        );

        const node =
          step.status === "current" && onCurrentClick ? (
            <button
              aria-label={`${step.label}, tap to activate`}
              className={clsx(circle, "cursor-pointer")}
              type="button"
              onClick={onCurrentClick}
            >
              {idx + 1}
            </button>
          ) : (
            <div
              aria-label={`${step.label}, ${step.status}`}
              className={circle}
              role="img"
            >
              {idx + 1}
            </div>
          );

        return (
          <div
            key={step.label + idx}
            className="flex min-w-0 flex-1 flex-col items-center"
          >
            {/* circle flanked by connecting line segments */}
            <div className="flex w-full items-center">
              <div
                className={clsx(
                  "h-px flex-1",
                  isFirst ? "bg-transparent" : lineClass(leftDone),
                )}
              />
              <div className="mx-1.5 shrink-0">{node}</div>
              <div
                className={clsx(
                  "h-px flex-1",
                  isLast ? "bg-transparent" : lineClass(rightDone),
                )}
              />
            </div>
            <span
              className={clsx(
                "mt-2 px-0.5 text-center text-[11px] leading-tight sm:text-sm",
                step.status === "upcoming"
                  ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
                  : "font-medium text-trovio-light-text dark:text-trovio-dark-text",
              )}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
