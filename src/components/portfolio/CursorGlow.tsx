import React, { useEffect, useRef } from "react";

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let latestX = -1000;
    let latestY = -1000;

    const updateGlow = () => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(6, 182, 212, 0.08), transparent 80%)`;
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
    />
  );
};

export default CursorGlow;
