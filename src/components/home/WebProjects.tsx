"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Globe, LayoutDashboard, X, Maximize2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import Image from "next/image";

interface ProjectItem {
    title: string;
    subtitle: string;
    description: string;
    stack: string[];
    image: string;
    link: string;
    category: "Ventos Suite" | "Personal Web Projects";
    colors: {
        accent: string;
    };
}

const CATEGORIES = ["All", "Ventos Suite", "Personal Web Projects"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

const projects: ProjectItem[] = [
    // Ventos Suite
    {
        title: "Ventos POS",
        subtitle: "Local-First Desktop Register",
        description: "High-performance native desktop point-of-sale client built with Flutter for macOS, Windows, and Linux. Delivers sub-millisecond barcode scanning, universal ESC/POS thermal printing, automatic cash drawer triggers, split payments, and staff PIN fast-switching with offline-first local SQLite and cloud GraphQL sync.",
        stack: ["Flutter", "Dart", "GraphQL", "SQLite"],
        image: "/ventos-pos.png",
        link: "https://github.com/Downspice/ventos-platform",
        category: "Ventos Suite",
        colors: {
            accent: "#fdb72e", // Ventos Saffron Gold
        }
    },
    {
        title: "Ventos Web",
        subtitle: "Store Operations & Web POS",
        description: "Modern browser-based retail terminal and store operations hub. Features cashier checkout, appointment & service bookings, real-time multi-store inventory variants, customer credit ledgers, returns, and automatic synchronization with the distributed commerce mesh.",
        stack: ["React", "TypeScript", "Vite", "GraphQL", "Tailwind CSS"],
        image: "/ventos-web.png",
        link: "https://github.com/Downspice/ventos-web",
        category: "Ventos Suite",
        colors: {
            accent: "#3b82f6", // Blue
        }
    },
    {
        title: "Ventos Admin",
        subtitle: "Executive Hub & Store Telemetry",
        description: "Enterprise control plane for multi-location retail operators. Provides cash drawer blind audits, shift commission splits, role-based permission tiers (RBAC), multi-register setups, financial P&L reporting, and real-time store velocity telemetry.",
        stack: ["React", "TypeScript", "Vite", "GraphQL", "Tailwind CSS"],
        image: "/ventos-admin.png",
        link: "https://github.com/Downspice/ventos-admin",
        category: "Ventos Suite",
        colors: {
            accent: "#8b5cf6", // Purple
        }
    },
    // Independent Personal Projects
    {
        title: "Awer Ticketing",
        subtitle: "Issue Tracking System",
        description: "A comprehensive ticketing platform featuring drag-and-drop task management, seamless issue submission, and efficient team categorization.",
        stack: ["Next.js", "React", "PostgreSQL"],
        image: "/awer-ticketing.png",
        link: "https://awer-ticketing.vercel.app/",
        category: "Personal Web Projects",
        colors: {
            accent: "#3b82f6", // Blue
        }
    },
    {
        title: "Awer Votes",
        subtitle: "Real-time Voting Platform",
        description: "A secure voting application with real-time election tracking and analytics powered by WebSockets for instant data synchronization.",
        stack: ["Next.js", "React", "PostgreSQL"],
        image: "/awer-votes.png",
        link: "https://awer-votes.vercel.app/",
        category: "Personal Web Projects",
        colors: {
            accent: "#6366f1", // Indigo
        }
    },
    {
        title: "Employee Management",
        subtitle: "HR Management System",
        description: "An internal HR tool for attendance tracking, salary generation, and detailed reporting statistics for administrative teams.",
        stack: ["Next.js", "React", "PostgreSQL"],
        image: "/employee-management.png",
        link: "https://awer-hr-system-test.vercel.app/",
        category: "Personal Web Projects",
        colors: {
            accent: "#0d9488", // Teal
        }
    },
    {
        title: "Trip (Personal Version)",
        subtitle: "Travel Management System",
        description: "A fully customizable travel management system for SHS students to book trips and for parents to book visits to their wards securely. \n\nNote: To see the admin side, go to https://trip-web-indol-nu.vercel.app/admin with contact me for the login details",
        stack: ["Next.js", "NestJS", "React", "PostgreSQL", "Prisma"],
        image: "/trip-management.png",
        link: "https://trip-web-indol-nu.vercel.app/",
        category: "Personal Web Projects",
        colors: {
            accent: "#8b5cf6", // Violet
        }
    }
];

export function WebProjects() {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    // Escape key listener & body scroll lock
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedProject(null);
            }
        };

        const origOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = origOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section className="relative py-16 md:py-24 px-4 bg-background overflow-hidden">
            <BackgroundOrbs />
            
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] left-[5%] text-primary"
                >
                    <TechIcon name="GraphQL" className="w-16 h-16" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] right-[8%] text-primary"
                >
                    <TechIcon name="Flutter" className="w-20 h-20" />
                </motion.div>
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div className="space-y-4">
                            <h3 className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Now for my</h3>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Personal Projects</h2>
                            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                                Full-stack systems, desktop clients, and modern commerce applications featuring the complete Ventos Suite.
                            </p>
                        </div>

                        {/* Category filter pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            {CATEGORIES.map((cat) => {
                                const count = cat === "All"
                                    ? projects.length
                                    : projects.filter(p => p.category === cat).length;
                                const isActive = activeCategory === cat;

                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                                            isActive
                                                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm"
                                                : "bg-secondary/30 text-muted-foreground border-border/50 hover:bg-secondary/60 hover:text-foreground"
                                        }`}
                                    >
                                        {cat} <span className="opacity-60 ml-1">({count})</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                            >
                                <CardTilt>
                                    <div
                                        className="group h-full relative flex flex-col bg-secondary/20 rounded-[2rem] border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer backdrop-blur-sm shadow-sm"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        {/* Project Visual */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-background/50">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                                                    <Maximize2 className="w-5 h-5" />
                                                </div>
                                            </div>

                                            {/* Category Tag Overlay */}
                                            <div className="absolute top-3 left-3 z-10">
                                                <span 
                                                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase backdrop-blur-md border shadow-sm"
                                                    style={{
                                                        backgroundColor: project.category === "Ventos Suite" ? "rgba(253, 183, 46, 0.18)" : "rgba(255, 255, 255, 0.12)",
                                                        color: project.category === "Ventos Suite" ? "#fdb72e" : "#ffffff",
                                                        borderColor: project.category === "Ventos Suite" ? "rgba(253, 183, 46, 0.4)" : "rgba(255, 255, 255, 0.2)"
                                                    }}
                                                >
                                                    {project.category}
                                                </span>
                                            </div>
                                            
                                            {/* Tech Icons Overlay */}
                                            <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                                                {project.stack.slice(0, 3).map(s => (
                                                    <div key={s} className="p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-sm" title={s}>
                                                        <TechIcon name={s} className="w-3.5 h-3.5" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6 md:p-8 flex flex-col flex-1">
                                            <div className="mb-3">
                                                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors tracking-tight">{project.title}</h4>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{project.subtitle}</span>
                                            </div>
                                            
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 whitespace-pre-line line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-col gap-3 mt-auto">
                                                <Button 
                                                    asChild
                                                    className="w-full rounded-2xl gap-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                                                    style={{ backgroundColor: project.colors.accent }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        {project.link.includes("github.com") ? (
                                                            <>View on GitHub <Github className="w-4 h-4" /></>
                                                        ) : (
                                                            <>Visit Live Site <Globe className="w-4 h-4" /></>
                                                        )}
                                                    </a>
                                                </Button>
                                                <div className="flex items-center gap-2 justify-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                                                    <LayoutDashboard className="w-3 h-3" />
                                                    <span>{project.stack.slice(0, 2).join(" + ")}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover accent light */}
                                        <div 
                                            className="absolute -bottom-12 -right-12 w-32 h-32 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                            style={{ backgroundColor: project.colors.accent }}
                                        />

                                        {/* Glow ring */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/5 rounded-[2rem] pointer-events-none transition-colors duration-500" />
                                    </div>
                                </CardTilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Preview Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            initial={{ scale: 0.96, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.97, opacity: 0, y: 6, transition: { duration: 0.14, ease: "easeIn" } }}
                            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
                            className="bg-background w-full max-w-5xl rounded-3xl overflow-hidden relative shadow-2xl overflow-y-auto max-h-[90vh] border border-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close modal"
                                className="absolute top-4 right-4 z-10 p-2 bg-black/30 hover:bg-black/60 active:scale-[0.92] rounded-full text-white backdrop-blur-md transition-[background-color,transform] duration-150 cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-2/3 relative aspect-video lg:aspect-auto min-h-[280px] bg-secondary/30">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/3 p-8 md:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span 
                                            className="text-xs font-bold uppercase tracking-widest"
                                            style={{ color: selectedProject.colors.accent }}
                                        >
                                            {selectedProject.subtitle}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">{selectedProject.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line">
                                        {selectedProject.description}
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Tech Stack</span>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.stack.map(s => (
                                                    <div key={s} className="px-2.5 py-1 rounded-full bg-secondary/50 border border-border/50 flex items-center gap-1.5 text-xs font-medium">
                                                        <TechIcon name={s} className="w-3.5 h-3.5" />
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 mt-auto">
                                        <Button 
                                            size="lg"
                                            className="w-full rounded-2xl gap-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                                            style={{ backgroundColor: selectedProject.colors.accent }}
                                            onClick={() => window.open(selectedProject.link, '_blank')}
                                        >
                                            {selectedProject.link.includes("github.com") ? (
                                                <>View on GitHub <Github className="w-4 h-4" /></>
                                            ) : (
                                                <>Visit Live Site <ExternalLink className="w-4 h-4" /></>
                                            )}
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            size="lg" 
                                            className="w-full rounded-2xl text-muted-foreground"
                                            onClick={() => setSelectedProject(null)}
                                        >
                                            Close Preview
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function CardTilt({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="flex flex-col h-full"
        >
            <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full">
                {children}
            </div>
        </motion.div>
    );
}