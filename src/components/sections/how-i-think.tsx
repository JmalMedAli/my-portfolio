import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { principles } from "@/data/what-i-do";

export function HowIThink() {
  return (
    <Section id="how-i-think" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative">
        <Reveal className="max-w-xl">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
            <span className="h-1.5 w-1.5 rounded-full bg-green-light" aria-hidden="true" />
            How I Think
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A Simple Process Behind Every Project
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {principles.map((principle, index) => (
            <Reveal key={principle.id} delay={index * 0.1}>
              <div className="relative pl-2">
                <span className="font-heading text-5xl font-bold text-white/10 md:text-6xl">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                  {principle.description}
                </p>
                {index < principles.length - 1 ? (
                  <span
                    className="absolute right-[-1.5rem] top-6 hidden h-px w-12 bg-green-light/40 md:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
