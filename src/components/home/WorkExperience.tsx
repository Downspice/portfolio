"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/experience";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WorkExperience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeRole = experiences[activeIndex];

    return (
        <section className="py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container max-w-5xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Experience</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A timeline of technical leadership, system architecture, and delivering impact across diverse environments.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[500px]">
                    {/* Left Sidebar Menu */}
                    <div className="w-full md:w-1/3 relative group/nav">
                        {/* Scroll indicator for mobile */}
                        <div className="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-background to-transparent z-20 md:hidden pointer-events-none" />
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 md:hidden text-primary pointer-events-none flex flex-col items-center gap-1"
                        >
                            <ChevronRight className="w-5 h-5" />
                            <span className="text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">Swipe</span>
                        </motion.div>

                        <div className="w-full flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar relative">
                            <style jsx global>{`
                                .no-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                                .no-scrollbar {
                                    -ms-overflow-style: none;  /* IE and Edge */
                                    scrollbar-width: none;  /* Firefox */
                                }
                            `}</style>
                            <div className="flex flex-row md:flex-col gap-3 w-max md:w-full px-2 md:px-0">
                                {experiences.map((role, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <button
                                            key={role.id}
                                            onClick={() => setActiveIndex(index)}
                                            className={cn(
                                                "relative flex items-center justify-between text-left p-4 md:p-5 rounded-2xl transition-all duration-300 min-w-[220px] md:min-w-0 snap-center shrink-0 border border-transparent z-10",
                                                isActive 
                                                    ? "text-primary shadow-sm" 
                                                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:border-border/50"
                                            )}
                                        >
                                            <div className="flex flex-col gap-1 z-10">
                                                <span className={cn("font-bold text-sm md:text-base transition-colors", isActive ? "text-primary" : "")}>{role.company}</span>
                                                <span className="text-xs font-medium opacity-80">{role.period}</span>
                                            </div>
                                            <ChevronRight className={cn("w-4 h-4 transition-transform duration-300 hidden md:block z-10", isActive ? "translate-x-1" : "opacity-0 -translate-x-2")} />
                                            
                                            {isActive && (
                                                <motion.div 
                                                    layoutId="active-experience-bg"
                                                    className="absolute inset-0 bg-primary/5 rounded-2xl border border-primary/10 -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Details */}
                    <div className="w-full md:w-2/3 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRole.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <div className="p-8 md:p-10 rounded-[2.5rem] bg-secondary/10 border border-border/50 glass-panel shadow-xl flex flex-col h-full relative overflow-hidden group">
                                    {/* Shimmering border glow effect via pseudo-element illusion */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
                                    
                                    <div className="space-y-6 relative z-10">
                                        <div>
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                                                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                                                    {activeRole.title}
                                                </h3>
                                                {activeRole.type && (
                                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0 self-start">
                                                        {activeRole.type}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground mt-4 font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-primary/70" />
                                                    <span className="text-foreground/80">{activeRole.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-primary/70" />
                                                    {activeRole.period}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-primary/70" />
                                                    {activeRole.location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-border/50" />

                                        <ul className="space-y-4">
                                            {activeRole.focus.map((item, i) => (
                                                <motion.li 
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="text-muted-foreground leading-relaxed flex items-start gap-4"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                                                        <ChevronRight className="w-3 h-3 text-primary" />
                                                    </div>
                                                    <span className="text-sm md:text-base">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Decorator */}
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
