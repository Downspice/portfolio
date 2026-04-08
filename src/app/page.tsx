import { Hero } from "@/components/home/Hero";
import { Mindset } from "@/components/home/Mindset";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Hero />
      
      {/* Featured Teaser section */}
      <section className="py-24 px-4 border-y border-border/50 bg-muted/20">
        <div className="container max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Full-Stack Capability. <br/><span className="text-primary">Design-First Thinking.</span></h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Explore my engineering philosophy, technical stack, and high-fidelity mockups through the new dedicated sections.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <TeaserCard title="UI Mockups" description="High-fidelity Figma designs for mobile and web systems." href="/mockups" />
            <TeaserCard title="Web Projects" description="Robust full-stack applications with PostgreSQL & Next.js." href="/projects" />
            <TeaserCard title="Experience" description="A deep dive into my professional engineering history." href="/experience" />
          </div>
        </div>
      </section>

      <Mindset />
      <ClosingCTA />
    </main>
  );
}

function TeaserCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group p-8 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 text-left flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 flex items-center text-primary font-semibold gap-2 group-hover:translate-x-1 transition-transform">
        Explore <ChevronRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
