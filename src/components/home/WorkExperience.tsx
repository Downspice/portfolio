"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/experience";
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

// Emil Kowalski custom ease curve
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function WorkExperience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeRole = experiences[activeIndex];
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
        let newIndex: number | null = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "j") {
            e.preventDefault();
            newIndex = (index + 1) % experiences.length;
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "k") {
            e.preventDefault();
            newIndex = (index - 1 + experiences.length) % experiences.length;
        } else if (e.key === "Home") {
            e.preventDefault();
            newIndex = 0;
        } else if (e.key === "End") {
            e.preventDefault();
            newIndex = experiences.length - 1;
        }

        if (newIndex !== null) {
            setActiveIndex(newIndex);
            tabsRef.current[newIndex]?.focus();
        }
    };

    const goToNext = () => {
        const next = (activeIndex + 1) % experiences.length;
        setActiveIndex(next);
        tabsRef.current[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    const goToPrev = () => {
        const prev = (activeIndex - 1 + experiences.length) % experiences.length;
        setActiveIndex(prev);
        tabsRef.current[prev]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    return (
        <section className="pt-4 pb-12 md:pt-6 md:pb-16 px-4 md:px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-35" />
            </div>

            <div className="container max-w-5xl mx-auto space-y-8 md:space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                    <SectionHeader
                        number="02"
                        tag="The Journey"
                        title="EXPERIENCE"
                        subtitle="A timeline of technical leadership, system architecture, and delivering high-impact software across web and mobile."
                        align="center"
                    />
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 min-h-[480px]">
                    {/* Left Sidebar Menu / Mobile Horizontal Tabs */}
                    <div className="w-full md:w-[38%] relative shrink-0">
                        {/* Mobile gradient fade indicating overflow */}
                        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-background to-transparent z-10 md:hidden pointer-events-none" />

                        <div
                            role="tablist"
                            aria-label="Work Experience timeline"
                            aria-orientation="vertical"
                            className="w-full flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory no-scrollbar relative touch-pan-x"
                        >
                            <style jsx global>{`
                                .no-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                                .no-scrollbar {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}</style>
                            <div className="flex flex-row md:flex-col gap-1.5 w-max md:w-full px-1 md:px-0">
                                {experiences.map((role, index) => {
                                    const isActive = index === activeIndex;
                                    const roleIndexStr = String(index + 1).padStart(2, "0");
                                    return (
                                        <button
                                            key={role.id}
                                            ref={(el) => {
                                                tabsRef.current[index] = el;
                                            }}
                                            role="tab"
                                            id={`tab-${role.id}`}
                                            aria-selected={isActive}
                                            aria-controls={`panel-${role.id}`}
                                            tabIndex={isActive ? 0 : -1}
                                            onClick={() => setActiveIndex(index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            className={cn(
                                                "relative flex items-center justify-between text-left px-3.5 py-3 md:px-4 md:py-3.5 rounded-xl min-w-[200px] md:min-w-0 snap-center shrink-0 border z-10 select-none",
                                                "transition-[color,background-color,border-color,transform] duration-150 ease-out",
                                                "active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                                                isActive
                                                    ? "text-primary border-primary/25 shadow-xs"
                                                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40 hover:border-border/40"
                                            )}
                                        >
                                            <div className="flex items-center gap-3 z-10 min-w-0">
                                                <span className={cn(
                                                    "font-mono-label text-[11px] font-semibold transition-colors duration-150",
                                                    isActive ? "text-primary" : "text-muted-foreground/60"
                                                )}>
                                                    {roleIndexStr}
                                                </span>
                                                <div className="flex flex-col min-w-0">
                                                    <span className={cn(
                                                        "font-bold text-sm md:text-[15px] truncate tracking-tight transition-colors duration-150",
                                                        isActive ? "text-primary" : "text-foreground/90"
                                                    )}>
                                                        {role.company}
                                                    </span>
                                                    <span className="text-[11px] font-mono-label text-muted-foreground/80 mt-0.5">
                                                        {role.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <ChevronRight
                                                className={cn(
                                                    "w-3.5 h-3.5 transition-transform duration-150 hidden md:block z-10 shrink-0",
                                                    isActive ? "translate-x-0.5 text-primary opacity-100" : "opacity-0 -translate-x-1"
                                                )}
                                            />

                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-experience-bg"
                                                    className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/25 -z-10"
                                                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Details */}
                    <div className="w-full md:w-[62%] relative flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRole.id}
                                role="tabpanel"
                                id={`panel-${activeRole.id}`}
                                aria-labelledby={`tab-${activeRole.id}`}
                                initial={{ opacity: 0, y: 6, scale: 0.995 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -4, scale: 0.995, transition: { duration: 0.1, ease: "easeIn" } }}
                                transition={{ duration: 0.18, ease: EASE_OUT }}
                                className="h-full flex flex-col"
                            >
                                <div className="p-5 md:p-7 rounded-2xl bg-card/60 border border-border/80 glass-panel shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
                                    <div className="space-y-5 relative z-10">
                                        {/* Header & Meta */}
                                        <div>
                                            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                                                    {activeRole.title}
                                                </h3>
                                                {activeRole.type && (
                                                    <span className="text-[10px] font-mono-label font-semibold px-2 py-0.5 rounded-md bg-primary/15 text-primary border border-primary/25 shrink-0">
                                                        {activeRole.type}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span className="text-foreground/90 font-semibold">{activeRole.company}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                                                    <span className="font-mono-label">{activeRole.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                                                    <span>{activeRole.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-border/60" />

                                        {/* Bullet points with Emil Kowalski short stagger */}
                                        <ul className="space-y-3">
                                            {activeRole.focus.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, y: 4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.18, delay: i * 0.03, ease: EASE_OUT }}
                                                    className="text-muted-foreground text-xs md:text-sm leading-relaxed flex items-start gap-2.5"
                                                >
                                                    <div className="mt-1.5 shrink-0">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary ring-2 ring-primary/20" />
                                                    </div>
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Panel Footer: Quick Role Switcher */}
                                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono-label relative z-10">
                                        <span className="text-muted-foreground">
                                            ROLE {String(activeIndex + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={goToPrev}
                                                aria-label="Previous role"
                                                className="p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150 active:scale-[0.95]"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={goToNext}
                                                aria-label="Next role"
                                                className="p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150 active:scale-[0.95]"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Subtle Ambient Depth Accent */}
                                    <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-primary/10 blur-[70px] pointer-events-none rounded-full" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

