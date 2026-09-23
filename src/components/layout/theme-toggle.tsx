"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ light, className }: { light?: boolean; className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        light
          ? "border-white/25 text-white hover:border-white hover:text-white"
          : "border-border text-foreground/80 hover:border-primary hover:text-primary",
        className,
      )}
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" />
      <Moon className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}
