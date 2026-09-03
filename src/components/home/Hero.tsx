"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";
import { Marquee } from "@/components/Marquee";
import Image from "next/image";
import Link from "next/link";

const SKILLS = [
  "REACT NATIVE", "NEXT.JS", "TYPESCRIPT", "EXPO", "POSTGRESQL",
  "NESTJS", "PRISMA", "FIGMA", "EXPRESS", "TAILWIND",
];

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden isolate">
        {/* Right-half background photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-y-0 right-0 w-full sm:w-[60%] md:w-[55%] lg:w-1/2 z-0"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <Image
              src="/JOSEPH.JPG"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top md:object-[center_20%] grayscale"
              priority
            />
          </div>
          {/* Blend into left content area — lighter so photo stays visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-background from-15% via-background/40 via-35% to-transparent" />
        </motion.div>

        {/* Ambient blobs — left side only */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />
        </div>

        <div className="flex-1 container max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-8 flex flex-col justify-center relative z-10">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <span className="section-tag">Accra, Ghana</span>
          </motion.div>

          {/* Name + role — left half */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl lg:max-w-2xl space-y-2"
          >
            <h1 className="font-display leading-[0.85]">
              <span className="block text-foreground glitch-text" data-text="JOSEPH">JOSEPH</span>
              <span className="block text-primary glitch-text" data-text="AWER">AWER</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="font-mono-label text-sm md:text-base text-muted-foreground uppercase tracking-widest">
                Software Developer
              </span>
              <span className="text-border">|</span>
              <span className="font-mono-label text-sm md:text-base text-accent uppercase tracking-widest">
                Full-Stack · Mobile
              </span>
            </div>
          </motion.div>

          {/* Bottom row — bio + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 md:mt-16 max-w-xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8 items-end border-t-2 border-border pt-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-0">
              Building performant apps with{" "}
              <span className="text-foreground font-semibold">Expo</span>,{" "}
              <span className="text-foreground font-semibold">React</span> &{" "}
              <span className="text-foreground font-semibold">Next.js</span>.
              Code with culture. Ship with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0 lg:justify-end">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  View Projects
                </Button>
              </Link>
              <a
                href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full gap-2">
                  <TechIcon name="Resume" className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills marquee ticker */}
      <Marquee items={SKILLS} speed="fast" variant="chips" />
    </>
  );
}
