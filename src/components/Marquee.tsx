"use client";

import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/TechIcon";

interface MarqueeProps {
  items: string[];
  speed?: "normal" | "fast";
  className?: string;
  variant?: "chips" | "classic" | "footer";
}

export function Marquee({
  items,
  speed = "normal",
  className,
  variant = "classic",
}: MarqueeProps) {
  const loop = [...items, ...items];
  const animationClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  if (variant === "chips") {
    return (
      <div
        className={cn(
          "relative overflow-hidden border-y-[3px] border-primary bg-primary select-none",
          className
        )}
      >
        <div className="absolute left-0 inset-y-0 z-10 flex items-center bg-primary pl-4 md:pl-8 pr-6 border-r-2 border-primary-foreground/20">
          <span className="font-mono-label text-[10px] md:text-xs uppercase tracking-[0.35em] text-primary-foreground whitespace-nowrap">
            Stack //
          </span>
        </div>

        <div className="py-3 md:py-4 pl-28 md:pl-40">
          <div className={cn("flex w-max", animationClass)}>
            {loop.map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center shrink-0">
                <span className="inline-flex items-center gap-2 font-mono-label text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-primary-foreground border border-primary-foreground/25 bg-primary-foreground/10 px-3 md:px-4 py-1.5 mx-2 md:mx-3">
                  <TechIcon name={item} className="w-3.5 h-3.5 shrink-0 opacity-90" />
                  {item}
                </span>
                <span className="font-display text-primary-foreground/25 text-xl leading-none px-1">
                  ×
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />
      </div>
    );
  }

  if (variant === "footer") {
    const row1 = items.filter((_, i) => i % 2 === 0);
    const row2 = items.filter((_, i) => i % 2 === 1);
    const loop1 = [...row1, ...row1];
    const loop2 = [...row2, ...row2];

    return (
      <div
        className={cn(
          "relative overflow-hidden border-y-2 border-border bg-background select-none",
          className
        )}
      >
        {/* Static edge label */}
        <div className="absolute right-0 inset-y-0 z-10 flex items-center bg-background pl-6 pr-4 md:pr-8 border-l-2 border-border">
          <span className="font-mono-label text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-primary whitespace-nowrap">
            For the Culture
          </span>
        </div>

        <div className="py-4 md:py-5 pr-36 md:pr-44 space-y-2 md:space-y-3">
          {/* Row 1 — display type, scrolls left */}
          <div className={cn("flex w-max animate-marquee-slow")}>
            {loop1.map((item, i) => (
              <div key={`r1-${item}-${i}`} className="flex items-center shrink-0">
                <span className="font-display text-2xl md:text-4xl tracking-wider text-primary px-4 md:px-6">
                  {item}
                </span>
                <span className="font-mono-label text-[10px] text-muted-foreground/40 px-1">//</span>
              </div>
            ))}
          </div>

          {/* Row 2 — mono type, scrolls right */}
          <div className={cn("flex w-max animate-marquee-reverse-slow")}>
            {loop2.map((item, i) => (
              <div key={`r2-${item}-${i}`} className="flex items-center shrink-0">
                <span className="font-mono-label text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground border border-border px-3 py-1 mx-2 md:mx-3">
                  {item}
                </span>
                <span className="text-accent text-xs leading-none">★</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    );
  }

  const content = items.join(" // ");
  const doubled = `${content} // ${content} //`;

  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 border-border bg-secondary/30 py-3",
        className
      )}
    >
      <div
        className={cn(
          "flex whitespace-nowrap font-mono-label text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground",
          animationClass
        )}
      >
        <span className="px-6">{doubled}</span>
        <span className="px-6" aria-hidden="true">
          {doubled}
        </span>
      </div>
    </div>
  );
}
