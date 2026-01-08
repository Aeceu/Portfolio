"use client";
import { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-muted-foreground hover:text-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <BiSolidMoon size="1.2em" /> : <BiSolidSun size="1.2em" />}
    </button>
  );
}
