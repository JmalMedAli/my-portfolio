import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand-icons";

const iconFor = (label: string) => {
  if (label.toLowerCase().includes("github")) return GithubIcon;
  return ArrowUpRight;
};

export function ProjectCard({ project, reversed }: { project: Project; reversed?: boolean }) {
  return (
    <article className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
      <div
        className={cn(
          "relative aspect-[4/3] lg:aspect-auto",
          reversed && "lg:order-2",
        )}
      >
        <Image
          src={project.image}
          alt={`${project.name} product mockup`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div className={cn("flex flex-col justify-center p-8 md:p-10", reversed && "lg:order-1")}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            {project.category}
          </span>
          {project.isConcept ? (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
              Concept
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/90">{project.highlight}</p>

        <ul className="mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = iconFor(link.label);
            return (
              <Button
                key={link.label}
                variant={link.label === "Live Demo" ? "default" : "outline"}
                size="sm"
                className="gap-1.5"
                nativeButton={false}
                render={
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  />
                }
              >
                {link.label}
                <Icon className="h-4 w-4" />
              </Button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
