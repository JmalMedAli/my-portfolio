"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { designs } from "@/data/designs";
import { DesignLightbox } from "@/components/sections/design-lightbox";

export function Designs() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(designs.map((d) => d.category)))],
    [],
  );
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? designs : designs.filter((d) => d.category === filter)),
    [filter],
  );

  return (
    <Section id="designs">
      <SectionHeading
        kicker="Selected Designs"
        title="A Visual Look Into How I Create"
        description="Branding, campaign design and UI concepts from real work — the creative side of the job."
      />

      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((design, i) => (
            <motion.button
              key={design.id}
              layout
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl border border-border text-left"
              style={{ aspectRatio: `${design.width} / ${design.height}` }}
            >
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/85 via-navy/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-green-light">
                  {design.category}
                </span>
                <span className="mt-1 font-heading text-base font-bold text-white">
                  {design.title}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <DesignLightbox designs={filtered} index={activeIndex} onIndexChange={setActiveIndex} />
    </Section>
  );
}
