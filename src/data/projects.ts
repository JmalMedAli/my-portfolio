import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "matchfinder",
    name: "MatchFinder",
    category: "Sports / SaaS / Community",
    description:
      "A football field and player matching platform designed around the Tunisian local football community.",
    technology: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Connecting players with football opportunities",
      "Field booking and availability",
      "Player and team matching",
      "Community-driven listings",
    ],
    highlight: "Connecting players with football opportunities.",
    image: "/images/projects/matchfinder.jpg",
    links: [{ label: "Live Demo", href: "https://ija-kawer.vercel.app/login" }],
  },
  {
    id: "yalla",
    name: "Yalla",
    category: "Travel / AI / Digital Product",
    description: "A travel planning MVP designed for Tunisian travelers.",
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Travel budget guides",
      "TND-based planning",
      "AI itinerary planning",
      "WhatsApp-friendly outputs",
      "Visa information",
      "PDF planning",
    ],
    highlight: "AI-assisted travel planning, built around real Tunisian travel needs.",
    image: "/images/projects/yalla.jpg",
    links: [{ label: "Live Demo", href: "https://yalla-livid.vercel.app" }],
  },
  {
    id: "hospitality-digital-concepts",
    name: "Hospitality Digital Concepts",
    category: "Hospitality / Digital Experience",
    description:
      "Concepts and ideas developed around improving hotel guest experience and hotel operations.",
    technology: ["UI/UX Design", "Product Concepts"],
    features: [
      "Guest information systems",
      "Digital hotel guides",
      "Virtual room / showroom concepts",
      "Guest communication",
      "Internal operational tools",
    ],
    highlight: "Concepts inspired by real front office experience — not official products.",
    image: "/images/projects/hospitality-digital-concepts.svg",
    isConcept: true,
    links: [{ label: "Case Study", href: "#" }],
  },
];
