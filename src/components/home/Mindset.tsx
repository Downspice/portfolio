"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const PRINCIPLES = [
  {
    num: "01",
    title: "INTENTIONAL TOOLING",
    desc: "I don't chase hype. I pick tools that solve the problem, scale with the team, and stay maintainable years from now.",
    color: "text-primary",
  },
  {
    num: "02",
    title: "PERFORMANCE FIRST",
    desc: "60fps on mobile. Core Web Vitals from day one. Speed isn't a feature — it's the foundation.",
    color: "text-accent",
  },
  {
    num: "03",
    title: "CODE QUALITY",
    desc: "Clean, documented, tested. Software that's easy to read, debug, and extend — no shortcuts.",
    color: "text-hot",
  },
  {
    num: "04",
    title: "USER-CENTRIC",
    desc: "Technology serves people. I validate assumptions, iterate on feedback, and ship real value.",
    color: "text-primary",
  },
];

export function Mindset() {
  return (
    <section className="relative py-16 md:py-24 border-y-2 border-border">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          number="04"
          tag="Philosophy"
          title="HOW I MOVE"
          subtitle="Four principles that guide every line of code and every design decision."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-0 border-2 border-border">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}
              className="group p-8 md:p-10 border-b-2 sm:border-r-2 border-border last:border-b-0 sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(4)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 hover:bg-secondary/20 transition-colors duration-150 select-none active:scale-[0.99]"
            >
              <span className={`font-mono-label text-xs ${p.color} tracking-[0.3em]`}>{p.num}</span>
              <h3 className="font-display text-2xl md:text-3xl tracking-wider mt-3 mb-4 group-hover:text-primary transition-colors duration-150">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-0">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Currently building — full bleed banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="mt-16 md:mt-20 border-t-2 border-border bg-secondary/20"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
              </span>
              <span className="section-tag">Currently Building</span>
            </div>
            <div className="md:text-right">
              <h3 className="font-display text-3xl md:text-4xl tracking-wider text-foreground">
                TRIP BOOKING SYSTEM
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl md:ml-auto mb-0">
                SHS student trip booking —{" "}
                <span className="text-foreground">Next.js</span>,{" "}
                <span className="text-foreground">NestJS</span>,{" "}
                <span className="text-foreground">Prisma</span>,{" "}
                <span className="text-accent">Paystack</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
