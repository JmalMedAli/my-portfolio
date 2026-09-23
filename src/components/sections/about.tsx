import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { heroStats } from "@/data/site";
import { journeyStages } from "@/data/education";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            kicker="About Me"
            title="More Than One Profession. One Skillset."
          />

          <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I have a background in Management Informatics with a specialization in
              Business Intelligence. That gives me a structured, analytical way of
              looking at problems — whether the problem is a dataset, a business
              process or a customer experience.
            </p>
            <p>
              Alongside that, I have professional experience in hospitality, front
              office operations, customer service, sales, marketing and digital
              communication. I have worked directly with people, not just with
              screens — handling guests, customers, campaigns and commercial targets.
            </p>
            <p>
              I also build personal digital products and web projects on the side.
              My goal is to combine analytical thinking with creativity and
              real-world business understanding — technology that is grounded in
              how businesses and people actually work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ol className="relative border-l border-border pl-8">
            {journeyStages.map((stage) => (
              <li key={stage.id} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary"
                  aria-hidden="true"
                />
                <p className="font-heading text-lg font-bold text-foreground">
                  {stage.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stage.years}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
