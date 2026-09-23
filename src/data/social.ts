import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import type { IconComponent } from "@/types";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
  /** Set to false once the real URL/value replaces the placeholder below. */
  isPlaceholder: boolean;
};

// TODO: Replace placeholder values with real contact details.
export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:hello@mohamedalijmal.com",
    icon: Mail,
    isPlaceholder: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamedalijmal",
    icon: LinkedinIcon,
    isPlaceholder: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/mohamedalijmal",
    icon: GithubIcon,
    isPlaceholder: true,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Doha,Qatar",
    icon: MapPin,
    isPlaceholder: false,
  },
];
