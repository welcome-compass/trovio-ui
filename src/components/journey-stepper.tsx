"use client";

/**
 * JourneyStepper — numbered step indicator for "where you stand". Simple,
 * editorial styling (matches the mock): larger numbered circles + labels below,
 * a single indigo accent for done/current, neutral for upcoming.
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

  return (
    <div className="flex items-start">
      {steps.map((step, idx) => {
        const showConnector = idx < steps.length - 1;

        const circleBase =
          "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors";
        const circle =
          step.status === "completed"
            ? `${circleBase} bg-trovio-primary text-white`
            : step.status === "current"
              ? `${circleBase} border-2 border-trovio-primary text-trovio-primary`
              : `${circleBase} border border-trovio-light-border text-trovio-light-text-muted dark:border-trovio-dark-border dark:text-trovio-dark-text-muted`;

        const node =
          step.status === "current" && onCurrentClick ? (
            <button
              aria-label={`${step.label}, tap to activate`}
              className={`${circle} cursor-pointer`}
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
            className={`flex items-start ${showConnector ? "flex-1" : ""}`}
          >
            <div className="flex w-24 flex-col items-center gap-2">
              {node}
              <span
                className={`text-center text-sm leading-tight ${
                  step.status === "upcoming"
                    ? "text-trovio-light-text-muted dark:text-trovio-dark-text-muted"
                    : "font-medium text-trovio-light-text dark:text-trovio-dark-text"
                }`}
              >
                {step.label}
              </span>
            </div>

            {showConnector && (
              <div className="mt-5 flex-1">
                <div
                  className={`h-px w-full ${
                    step.status === "completed"
                      ? "bg-trovio-primary"
                      : "bg-trovio-light-border dark:bg-trovio-dark-border"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
