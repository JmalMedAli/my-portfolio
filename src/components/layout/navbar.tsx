"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const overHero = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className={cn(
            "font-heading text-lg font-bold tracking-tight transition-colors",
            overHero ? "text-white" : "text-foreground",
          )}
        >
          Mohamed Ali Jmal
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                overHero
                  ? "text-white/75 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle light={overHero} />
          <Button size="sm" className="gap-1.5" nativeButton={false} render={<a href="#contact" />}>
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle light={overHero} />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              size="icon-sm"
              variant="outline"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                overHero && "border-white/25 bg-white/5 text-white hover:border-white hover:bg-white/10 hover:text-white",
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>{siteConfig.label}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
                <Button
                  onClick={() => setMobileOpen(false)}
                  nativeButton={false}
                  render={<a href="#contact" />}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setMobileOpen(false)}
                  nativeButton={false}
                  render={<a href={siteConfig.cvUrl} download />}
                >
                  Download CV
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
