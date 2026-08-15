import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./BorderBeam";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderGlow?: boolean;
  withBorderBeam?: boolean;
  beamDuration?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  spotlightColor = "rgba(6, 182, 212, 0.15)",
  borderGlow = true,
  withBorderBeam = false,
  beamDuration = 10,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d111a]/75 backdrop-blur-xl transition-all duration-300",
        borderGlow && "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]",
        className
      )}
      {...props}
    >
      {/* Optional Traveling Laser Border Beam */}
      {withBorderBeam && (
        <BorderBeam size={200} duration={beamDuration} colorFrom="#06b6d4" colorTo="#3b82f6" />
      )}

      {/* Spotlight follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};
