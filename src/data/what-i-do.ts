import { BarChart3, Laptop2, Server, Handshake, Megaphone, ConciergeBell } from "lucide-react";
import type { PrincipleItem, WhatIDoItem } from "@/types";

export const whatIDo: WhatIDoItem[] = [
  {
    id: "data-bi",
    title: "Data & BI",
    description: "Transform data into useful business insights.",
    icon: BarChart3,
  },
  {
    id: "digital-products",
    title: "Digital Products",
    description: "Build practical web applications and digital experiences.",
    icon: Laptop2,
  },
  {
    id: "it-systems",
    title: "IT & Systems",
    description: "Connect technology with real operational needs.",
    icon: Server,
  },
  {
    id: "sales",
    title: "Sales",
    description: "Turn customer interactions into business opportunities.",
    icon: Handshake,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Create campaigns and digital communication strategies.",
    icon: Megaphone,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Deliver customer-focused experiences and operational solutions.",
    icon: ConciergeBell,
  },
];

export const principles: PrincipleItem[] = [
  {
    id: "understand",
    title: "Understand",
    description: "Understand the business, customer and problem first.",
  },
  {
    id: "build",
    title: "Build",
    description: "Turn ideas into practical digital solutions.",
  },
  {
    id: "improve",
    title: "Improve",
    description: "Use data, feedback and experience to continuously improve.",
  },
];
