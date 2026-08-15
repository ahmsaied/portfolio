import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 250,
  duration = 8,
  delay = 0,
  colorFrom = "#06b6d4",
  colorTo = "#3b82f6",
}) => {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        className
      )}
    >
      <div
        className="absolute aspect-square w-[var(--size)] animate-border-beam bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          offsetPath: "rect(0 auto auto 0 round 1rem)",
          animationDelay: "var(--delay)",
          animationDuration: "var(--duration)",
        }}
      />
    </div>
  );
};

export default BorderBeam;
