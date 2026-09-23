"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="skills" surface>
      <SectionHeading
        kicker="Skills"
        title="A Toolkit Across Data, Tech, Business and People"
        description="Grouped by the areas I actually work in — not a list of percentages."
      />

      <Reveal delay={0.1} className="mt-12">
        <Tabs value={active} onValueChange={(value) => setActive(value as string)}>
          <TabsList
            className="h-auto flex-wrap gap-2 bg-transparent p-0"
            style={{ height: "auto" }}
          >
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                style={{ height: "auto" }}
                className={cn(
                  "h-auto gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-none",
                  "data-active:border-primary data-active:bg-primary data-active:text-primary-foreground",
                )}
              >
                <category.icon size={16} />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  );
}
