"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentThemeId = setTimeout(() => {
      setCurrentTheme(
        theme === "dark" || resolvedTheme === "dark" ? "dark" : "light"
      );
    }, 0);

    const id = setTimeout(() => setMounted(true), 0);

    return () => {
      clearTimeout(id);
      clearTimeout(currentThemeId);
    };
  }, [theme, resolvedTheme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-10 rounded-full p-1 flex items-center cursor-pointer"
    >
      {/* Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-full transition-colors duration-300
          ${currentTheme === "dark" ? "bg-gray-800" : "bg-yellow-300"}
        `}
      ></div>

      {/* Sliding circle */}
      <div
        className={`
          relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center
          shadow-md transform transition-transform duration-300
          ${currentTheme === "dark" ? "translate-x-10" : "translate-x-0"}
        `}
      >
        {/* Icon inside circle */}
        <span
          className={`transition-transform duration-300 ${
            currentTheme === "dark" ? "translate-y-1" : "-translate-y-1"
          }`}
        >
          {currentTheme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </button>
  );
}
