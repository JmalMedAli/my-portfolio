import { BarChart3, Code2, Megaphone, ConciergeBell, Palette } from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "data-bi",
    title: "Data & Business Intelligence",
    icon: BarChart3,
    skills: [
      "Business Intelligence",
      "Data Analysis",
      "Data Visualization",
      "Reporting",
      "Business Analysis",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    icon: Code2,
    skills: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Git",
      "AI-Assisted Development",
    ],
  },
  {
    id: "marketing-sales",
    title: "Marketing & Sales",
    icon: Megaphone,
    skills: [
      "Digital Marketing",
      "Social Media",
      "Sales",
      "Customer Engagement",
      "Campaigns",
      "Upselling",
      "Customer Relationship Management",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: ConciergeBell,
    skills: [
      "Front Office Operations",
      "Guest Relations",
      "Customer Service",
      "PMS",
      "OnQ",
      "Hilton Honors",
      "Service Recovery",
    ],
  },
  {
    id: "creative",
    title: "Creative",
    icon: Palette,
    skills: [
      "UI/UX",
      "Digital Design",
      "Branding",
      "Content Creation",
      "Visual Communication",
    ],
  },
];
