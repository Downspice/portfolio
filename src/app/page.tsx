import { Hero } from "@/components/home/Hero";
import { Mindset } from "@/components/home/Mindset";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTilt } from "@/components/CardTilt";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Hero />
      
      {/* Featured Teaser section */}
      <section className="relative py-24 px-4 border-y border-border/50 bg-muted/10 overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pb-2">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Full-Stack Capability.</span> <br/>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Design-First Thinking.</span>
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Explore my engineering philosophy, technical stack, and high-fidelity mockups through the new dedicated sections.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <TeaserCard title="UI Mockups" description="High-fidelity Figma designs for mobile and web systems." href="/projects" />
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
    <CardTilt>
      <Link href={href} className="group relative p-8 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 text-left flex flex-col justify-between h-full overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="relative z-10 mt-12 flex items-center text-primary font-semibold gap-2 group-hover:translate-x-1 transition-transform">
          Explore <ChevronRight className="w-4 h-4" />
        </div>
        
        {/* Shimmering border glow effect via pseudo-element illusion */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
        
        {/* Radial background flare on hover */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </Link>
    </CardTilt>
  );
}
