"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Design } from "@/types";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type DesignLightboxProps = {
  designs: Design[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export function DesignLightbox({ designs, index, onIndexChange }: DesignLightboxProps) {
  const open = index !== null;
  const design = index !== null ? designs[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onIndexChange(((index ?? 0) + 1) % designs.length);
      } else if (event.key === "ArrowLeft") {
        onIndexChange(((index ?? 0) - 1 + designs.length) % designs.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, index, designs.length, onIndexChange]);

  if (!design) return null;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onIndexChange(null)}>
      <DialogContent className="max-h-[92vh] w-[95vw] max-w-5xl overflow-hidden rounded-2xl p-0 sm:max-w-5xl">
        <DialogTitle className="sr-only">{design.title}</DialogTitle>
        <div className="grid max-h-[92vh] grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-square bg-surface md:aspect-auto">
            <Image
              src={design.image}
              alt={design.title}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>

          <div className="flex flex-col p-7 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {design.category}
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
              {design.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {design.description}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Tools
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {design.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8">
              <span className="text-xs text-muted-foreground">
                {(index ?? 0) + 1} / {designs.length}
              </span>
              <div className="flex gap-2">
                <Button
                  size="icon-sm"
                  variant="outline"
                  aria-label="Previous design"
                  onClick={() => onIndexChange(((index ?? 0) - 1 + designs.length) % designs.length)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon-sm"
                  variant="outline"
                  aria-label="Next design"
                  onClick={() => onIndexChange(((index ?? 0) + 1) % designs.length)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
