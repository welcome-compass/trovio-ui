"use client";

import React from "react";
import { Modal } from "@heroui/react";

export interface TrovioModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback invoked when the modal should close (backdrop click, ESC, close button, etc.) */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Modal content */
  children: React.ReactNode;
  /** Optional footer with action buttons */
  footer?: React.ReactNode;
  /** Size of the modal */
  size?: "sm" | "md" | "lg";
  /** Whether the modal can be dismissed by clicking backdrop (default: true) */
  isDismissable?: boolean;
  /** Whether ESC key can dismiss the modal (default: false) */
  isKeyboardDismissDisabled?: boolean;
  /** Scroll behavior - inside or outside (default: inside) */
  scroll?: "inside" | "outside";
  /**
   * Modal placement on screen.
   * Defaults to "auto": centered on desktop (sm+), bottom sheet on mobile.
   */
  placement?: "auto" | "top" | "center" | "bottom";
  /** Hide the header and close button for full-bleed content (e.g. banner images). Title is still used for aria-label. */
  hideHeader?: boolean;
}

// Size mapping for HeroUI Modal.Dialog (min-width on desktop prevents scrunching)
const sizeClasses = {
  sm: "sm:min-w-sm sm:max-w-sm",
  md: "sm:min-w-md sm:max-w-md",
  lg: "sm:min-w-lg sm:max-w-lg",
} as const;

/**
 * TrovioModal component using HeroUI v3 Modal with Trovio branding.
 * Features backdrop, close button, customizable content/footer, and full accessibility.
 */
export const TrovioModal: React.FC<TrovioModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  isDismissable = true,
  isKeyboardDismissDisabled = false,
  scroll = "inside",
  placement = "auto",
  hideHeader = false,
}) => {
  return (
    <Modal.Backdrop
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      isOpen={isOpen}
      variant="blur"
      onOpenChange={(nextIsOpen) => {
        if (!nextIsOpen) onClose();
      }}
    >
      <Modal.Container placement={placement} scroll={scroll}>
        <Modal.Dialog
          aria-label={title}
          className={`${sizeClasses[size]} ${hideHeader ? "!p-0 !gap-0 [&_[data-slot=modal-close-trigger]]:hidden [&_[data-slot=modal-body]]:!p-0 [&_[data-slot=modal-header]]:!hidden [&_[data-slot=modal-footer]]:!px-5 [&_[data-slot=modal-footer]]:!pb-5" : ""}`}
        >
          {/* IMPORTANT: Keep Header/Body/Footer as direct children of Dialog so HeroUI's
            `scroll="inside"` works (Body flexes + becomes scrollable). */}
          <Modal.CloseTrigger />

          {!hideHeader && (
            <Modal.Header>
              <Modal.Heading className="text-xl font-bold text-trovio-light-text dark:text-trovio-dark-text">
                {title}
              </Modal.Heading>
            </Modal.Header>
          )}

          <Modal.Body className="text-sm text-trovio-light-text-muted dark:text-trovio-dark-text-muted">
            {children}
          </Modal.Body>

          {footer && (
            <Modal.Footer className="flex justify-end gap-3">
              {footer}
            </Modal.Footer>
          )}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
