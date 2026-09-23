import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  return (
    <Section id="projects" surface>
      <SectionHeading
        kicker="Projects"
        title="Digital Products, Built End to End"
        description="Selected projects across sports, travel and hospitality — designed and built as real products, not exercises."
      />

      <div className="mt-14 space-y-10">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <ProjectCard project={project} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
