"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Pause,
  Play,
  BarChart3,
  Database,
  Cpu,
  Megaphone,
  Handshake,
  ConciergeBell,
  FolderKanban,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import type { IconComponent } from "@/types";

const domains: { label: string; icon: IconComponent }[] = [
  { label: "BI", icon: BarChart3 },
  { label: "Data", icon: Database },
  { label: "IT", icon: Cpu },
  { label: "Marketing", icon: Megaphone },
  { label: "Sales", icon: Handshake },
  { label: "Hospitality", icon: ConciergeBell },
  { label: "Projects", icon: FolderKanban },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Mirror the <video>'s own play/pause state rather than tracking it
  // separately — the native events are the source of truth, whether the
  // change came from toggleVideo() below or the reduced-motion effect.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  // Auto-pause the ambient background video for visitors who asked for
  // reduced motion, in addition to the manual toggle below — see
  // motion-audits/my-portfolio-2026-09-24.html finding 2.
  useEffect(() => {
    if (shouldReduceMotion) videoRef.current?.pause();
  }, [shouldReduceMotion]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    if (shouldReduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    let ticking = false;
    const update = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.1), 1);
      video.style.transform = `scale(${1.06 + progress * 0.08}) translateY(${progress * 12}px)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldReduceMotion]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/70 to-navy" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center pb-20 pt-28 text-center md:pt-32">
        <motion.span
          {...fadeUp(0)}
          className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-light"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-light" />
          {siteConfig.label}
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="hero-shimmer mx-auto max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          {siteConfig.headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          {siteConfig.supportingText}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-1.5" nativeButton={false} render={<a href="#projects" />}>
            View My Work
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="border-white/25 bg-white/5 text-white hover:border-white hover:bg-white/10 hover:text-white"
            render={<a href="#about" />}
          >
            About Me
          </Button>
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-2.5"
        >
          {domains.map((domain) => (
            <span
              key={domain.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              <domain.icon size={13} className="text-green-light" />
              {domain.label}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.55)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>

      <motion.button
        type="button"
        onClick={toggleVideo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: 0.6 }}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-8 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 md:right-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isPlaying ? (
            <motion.span
              key="pause"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
              className="flex"
            >
              <Pause className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
              className="flex"
            >
              <Play className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </section>
  );
}
