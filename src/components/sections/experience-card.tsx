"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 transition-colors md:p-7",
        "hover:border-primary/50",
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
              {item.role}
            </h3>
            {item.current ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Current
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {item.company} — {item.location}
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              open && "rotate-180 text-primary",
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="overflow-hidden"
      >
        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {item.focus.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
