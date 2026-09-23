import { GraduationCap, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" surface>
      <SectionHeading kicker="Education" title="Academic Foundation in Business Intelligence" />

      <Reveal delay={0.1} className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="flex gap-4 rounded-2xl border border-border bg-card p-7">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Degree
            </p>
            <p className="mt-1 font-heading text-lg font-bold text-foreground">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{education.country}</p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl border border-border bg-card p-7">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Specialization
            </p>
            <p className="mt-1 font-heading text-lg font-bold text-foreground">
              {education.specialization}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Focused on turning data into decisions.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
