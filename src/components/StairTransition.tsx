"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

function getRouteLabel(pathname: string): string {
  if (pathname === "/") return "HOME";
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment.replace(/-/g, " ").toUpperCase();
}

export default function StairTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const routeLabel = getRouteLabel(pathname);

  if (prefersReducedMotion) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <>
      {/* Brutalist horizontal wipe — slides left to reveal page */}
      <motion.div
        key={`wipe-${pathname}`}
        className="fixed inset-0 z-[9999] pointer-events-none bg-background overflow-hidden"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 0.32,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.02,
        }}
      >
        {/* Gold leading edge */}
        <div className="absolute right-0 inset-y-0 w-[3px] bg-primary" />
        {/* Brutalist offset shadow */}
        <div className="absolute right-0 inset-y-0 w-1 translate-x-1 bg-primary/40" />

        {/* Oversized route watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-16 md:pr-24 overflow-hidden">
          <motion.span
            className="font-display text-[18vw] md:text-[14vw] leading-none text-foreground/[0.04] select-none tracking-wider whitespace-nowrap"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {routeLabel}
          </motion.span>
        </div>

        {/* Scanline texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
          }}
        />

        {/* Corner label */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <span className="font-mono-label text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            JA · {routeLabel}
          </span>
        </div>
      </motion.div>

      {/* Page content enters with smooth settle */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
