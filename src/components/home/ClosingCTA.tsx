"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ClosingCTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="section-tag block mb-6">Let&apos;s Build</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.9] glitch-text" data-text="LET'S WORK">
            LET&apos;S WORK
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-0">
            New projects, collaborations, or just talking tech — my line&apos;s always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full min-w-[200px]">
                Get In Touch
              </Button>
            </Link>
            <a
              href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full min-w-[200px]">
                View Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
