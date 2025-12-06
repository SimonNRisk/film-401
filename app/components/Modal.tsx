"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-parchment border-4 border-sepia/30 rounded shadow-2xl p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sepia hover:text-sepia-light transition-colors text-2xl leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Body */}
        <div className="text-sepia text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

