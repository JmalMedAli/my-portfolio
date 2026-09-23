import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

export function Contact() {
  const emailLink = socialLinks.find((link) => link.label === "Email");

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s Build Something Useful.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether it&apos;s a digital product, data project, creative concept or
            business idea, I&apos;m always interested in turning good ideas into
            practical solutions.
          </p>
          {emailLink ? (
            <Button
              size="lg"
              className="mt-8 gap-1.5"
              nativeButton={false}
              render={<a href={emailLink.href} />}
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs font-medium text-muted-foreground">
                  {label}
                </span>
                <span className="block text-sm font-semibold text-foreground">
                  {label === "Location" ? siteConfig.location : href.replace(/^mailto:/, "")}
                </span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
