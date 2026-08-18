import React, { useRef, useCallback } from "react";
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
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlightRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (rafRef.current) return; // skip if frame already queued
    rafRef.current = requestAnimationFrame(() => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(450px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
      }
      rafRef.current = null;
    });
  }, [spotlightColor]);

  const handleMouseEnter = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  }, []);

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

      {/* Spotlight follower - Direct DOM update, no React re-renders */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
};
