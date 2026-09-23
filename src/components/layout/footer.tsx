import { navItems } from "@/data/nav";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-heading text-xl font-bold text-foreground">
            {siteConfig.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            BI • Data • IT • Marketing • Hospitality
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="container-page border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
