"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white dark:bg-(--card-bg) p-6 shadow-lg transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 text-gray-500 cursor-pointer hover:text-gray-900"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
