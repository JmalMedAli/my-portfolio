import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  surface?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  surface = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-y scroll-mt-20",
        surface && "bg-surface",
        className,
      )}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}
