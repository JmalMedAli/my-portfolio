import type { TimelineStage } from "@/types";

export const education = {
  degree: "Licence Nationale en Informatique de Gestion",
  specialization: "Business Intelligence",
  country: "Tunisia",
};

export const journeyStages: TimelineStage[] = [
  { id: "education", label: "Education", years: "Informatique de Gestion — BI" },
  { id: "marketing-sales", label: "Marketing & Sales", years: "2019 — 2024" },
  { id: "hospitality", label: "Hospitality", years: "2024 — Present" },
  { id: "technology", label: "Technology & Projects", years: "Ongoing" },
];
