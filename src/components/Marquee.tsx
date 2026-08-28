"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "normal" | "fast";
  className?: string;
  separator?: string;
}

export function Marquee({ items, speed = "normal", className, separator = "✦" }: MarqueeProps) {
  const content = items.join(` ${separator} `);
  const doubled = `${content} ${separator} ${content} ${separator}`;

  return (
    <div className={cn("overflow-hidden border-y-2 border-border bg-secondary/30 py-3", className)}>
      <div
        className={cn(
          "flex whitespace-nowrap font-display text-2xl md:text-4xl tracking-wider text-foreground/80",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        <span className="px-4">{doubled}</span>
        <span className="px-4" aria-hidden="true">{doubled}</span>
      </div>
    </div>
  );
}
