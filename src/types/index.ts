import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  focus: string[];
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: IconComponent;
  skills: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technology: string[];
  features: string[];
  highlight: string;
  image: string;
  isConcept?: boolean;
  links: ProjectLink[];
};

export type DesignCategory = "UI" | "Branding" | "Marketing" | "Web" | "Creative";

export type Design = {
  id: string;
  title: string;
  category: DesignCategory;
  description: string;
  tools: string[];
  image: string;
  width: number;
  height: number;
};

export type WhatIDoItem = {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
};

export type PrincipleItem = {
  id: string;
  title: string;
  description: string;
};

export type TimelineStage = {
  id: string;
  label: string;
  years: string;
};
