import { Hero } from "@/components/home/Hero";
import { Mindset } from "@/components/home/Mindset";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SECTIONS = [
  {
    num: "01",
    title: "PROJECTS",
    tag: "The Work",
    desc: "Full-stack apps, enterprise systems, and high-fidelity UI mockups.",
    href: "/projects",
    accent: "primary",
  },
  {
    num: "02",
    title: "EXPERIENCE",
    tag: "The Journey",
    desc: "Professional history across Ghana's tech landscape — contracts, leadership, impact.",
    href: "/experience",
    accent: "accent",
  },
  {
    num: "03",
    title: "STACK",
    tag: "The Tools",
    desc: "Mobile, frontend, backend, and infrastructure — intentional tooling choices.",
    href: "/stack",
    accent: "hot",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />

      {/* Featured sections — editorial hip-hop grid */}
      <section className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <SectionHeader
            number="00"
            tag="Explore"
            title="THE COLLECTION"
            subtitle="Dive into the work, the journey, and the tools that power everything I build."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border">
            {SECTIONS.map((section, i) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-border last:border-r-0 last:border-b-0 hover:bg-secondary/30 transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.99] select-none min-h-[280px] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-label text-xs text-muted-foreground/50">{section.num}</span>
                  <span className="section-tag block mt-2 mb-4">{section.tag}</span>
                  <h3 className="font-display text-4xl md:text-5xl tracking-wider group-hover:text-primary transition-colors duration-150">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed mb-0">
                    {section.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 font-mono-label text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-150">
                  Enter
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </div>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-primary transition-[width] duration-300 ease-out" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Mindset />
      <ClosingCTA />
    </main>
  );
}
