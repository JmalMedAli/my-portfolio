import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";
import { ExperienceCard } from "@/components/sections/experience-card";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        kicker="Experience"
        title="Across Hospitality, Marketing and Sales"
        description="Hover or tap a role to see what it actually involved."
      />

      <div className="mt-12 space-y-5">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.08}>
            <ExperienceCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
