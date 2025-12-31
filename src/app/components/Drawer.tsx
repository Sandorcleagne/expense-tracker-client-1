"use client";
import { CircleX } from "lucide-react";
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.3)]"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-background shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <CircleX />
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
