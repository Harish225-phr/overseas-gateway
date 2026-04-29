import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "zoom";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

const variantClass: Record<Variant, string> = {
  up: "reveal",
  left: "reveal reveal-left",
  right: "reveal reveal-right",
  zoom: "reveal reveal-zoom",
};

const Reveal = ({ children, variant = "up", delay = 0, className, as: Tag = "div" }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn(variantClass[variant], visible && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
