"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Briefcase, Layers, CheckCircle2, TrendingUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Emil Kowalski custom ease curve
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const SUMMARY_METRICS = [
    {
        value: "4+ Yrs",
        label: "Engineering Track Record",
        detail: "Continuous delivery across enterprise platforms, high-growth contracts, and cross-functional teams.",
        icon: TrendingUp,
        accent: "text-primary",
    },
    {
        value: "07",
        label: "Key Roles & Contracts",
        detail: "Polymorphlabs, Supertech, Ceptra, Jamila Home, BAgro, TransactShield & AmaliTech.",
        icon: Briefcase,
        accent: "text-accent",
    },
    {
        value: "Web & Mobile",
        label: "Core Platforms",
        detail: "Production cross-platform mobile apps (React Native/Expo) & distributed web applications (Next.js/React).",
        icon: Layers,
        accent: "text-lime",
    },
    {
        value: "100%",
        label: "Production Delivery",
        detail: "On-time feature conception, architectural modernizations, and comprehensive technical documentation.",
        icon: CheckCircle2,
        accent: "text-hot",
    },
];

export function ExperienceSummaryModal() {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape & handle body scroll lock
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* Floating Summary Trigger Button */}
            <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-label="Open Career Summary Snapshot"
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                style={{
                    bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
                    right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
                }}
                className={cn(
                    "fixed z-40 flex items-center gap-2.5 px-4 py-3 rounded-full",
                    "bg-card/90 backdrop-blur-md border border-primary/30 shadow-[0_12px_36px_rgba(0,0,0,0.45)]",
                    "text-foreground text-xs md:text-sm font-semibold tracking-wide select-none",
                    "hover:border-primary hover:bg-card transition-[border-color,background-color,transform] duration-150 ease-out",
                    "active:scale-[0.96] outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                )}
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-mono-label uppercase tracking-widest text-[11px] md:text-xs">
                    Career Snapshot
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
            </motion.button>

            {/* Modal Dialog View */}
            <AnimatePresence>
                {isOpen && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="summary-modal-title"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-md"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 4, transition: { duration: 0.14, ease: "easeIn" } }}
                            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
                            className={cn(
                                "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar",
                                "bg-card/95 border border-border/80 glass-panel rounded-3xl p-6 md:p-8 shadow-2xl",
                                "flex flex-col z-10"
                            )}
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/60">
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="section-tag text-[10px]">Overview</span>
                                        <span className="font-mono-label text-[11px] text-muted-foreground">[TRACK RECORD]</span>
                                    </div>
                                    <h3 id="summary-modal-title" className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display">
                                        CAREER SNAPSHOT
                                    </h3>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-0">
                                        Executive metrics on engineering tenure, platforms, and production delivery.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close summary modal"
                                    className={cn(
                                        "p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-border/60",
                                        "transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.95]"
                                    )}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* 2x2 Metric Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
                                {SUMMARY_METRICS.map((metric) => {
                                    const Icon = metric.icon;
                                    return (
                                        <div
                                            key={metric.label}
                                            className="p-4 md:p-5 rounded-2xl bg-secondary/30 border border-border/70 hover:border-border transition-colors duration-150 flex flex-col justify-between"
                                        >
                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <span className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
                                                    {metric.value}
                                                </span>
                                                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                    <Icon className="w-4 h-4 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-mono-label text-xs uppercase tracking-wider text-primary font-semibold block mb-1">
                                                    {metric.label}
                                                </span>
                                                <p className="text-xs text-muted-foreground leading-relaxed mb-0">
                                                    {metric.detail}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Modal Footer / Fast Actions */}
                            <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                                <span className="font-mono-label text-xs text-muted-foreground text-center sm:text-left">
                                    Ghana · Hybrid & Remote Worldwide
                                </span>
                                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                    <a
                                        href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex-1 sm:flex-none px-4 py-2 rounded-xl border border-border text-xs font-semibold",
                                            "hover:border-primary/50 text-foreground transition-all duration-150 active:scale-[0.98]",
                                            "inline-flex items-center justify-center gap-1.5"
                                        )}
                                    >
                                        <span>Full Resume</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-primary" />
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex-1 sm:flex-none px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold",
                                            "transition-all duration-150 active:scale-[0.98] hover:opacity-95 text-center"
                                        )}
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
