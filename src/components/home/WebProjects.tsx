"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, LayoutDashboard, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";

const projects = [
    {
        title: "Awer Ticketing",
        subtitle: "Issue Tracking System",
        description: "A comprehensive ticketing platform featuring drag-and-drop task management, seamless issue submission, and efficient team categorization.",
        stack: ["Next.js", "React", "PostgreSQL"],
        image: "/awer-ticketing.png",
        link: "https://awer-ticketing.vercel.app/",
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
        link: "https://employee-management-jamila.vercel.app/",
        colors: {
            accent: "#0d9488", // Teal
        }
    }
];

export function WebProjects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section className="py-24 px-4 bg-background">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div className="space-y-4">
                            <h3 className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Now for my</h3>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Personal Web Projects</h2>
                        </div>
                        <p className="text-muted-foreground text-lg max-w-md hidden md:block">
                            Full-stack applications built with modern frameworks and robust database management.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-secondary/20 rounded-[2rem] border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-500 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Visual */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                                
                                {/* Tech Icons Overlay */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.stack.map(s => (
                                        <div key={s} className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm">
                                            <TechIcon name={s} className="w-4 h-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{project.subtitle}</span>
                                </div>
                                
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
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
                                            Visit Live Site <Globe className="w-4 h-4" />
                                        </a>
                                    </Button>
                                    <div className="flex items-center gap-2 justify-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                                        <LayoutDashboard className="w-3 h-3" />
                                        <span>PostgreSQL + Next.js</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover accent light */}
                            <div 
                                className="absolute -bottom-12 -right-12 w-32 h-32 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                style={{ backgroundColor: project.colors.accent }}
                            />
                        </motion.div>
                    ))}
                </div>
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
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-background w-full max-w-5xl rounded-3xl overflow-hidden relative shadow-2xl overflow-y-auto max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-2/3 relative aspect-video lg:aspect-auto">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                                    <h4 
                                        className="text-sm font-bold uppercase tracking-widest mb-2"
                                        style={{ color: selectedProject.colors.accent }}
                                    >
                                        {selectedProject.subtitle}
                                    </h4>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight line-height-[1.1]">{selectedProject.title}</h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Built With</span>
                                            <div className="flex gap-2">
                                                {selectedProject.stack.map(s => (
                                                    <div key={s} className="px-3 py-1 rounded-full bg-muted flex items-center gap-2 text-xs font-medium">
                                                        <TechIcon name={s} className="w-3.5 h-3.5" />
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col gap-3">
                                        <Button 
                                            size="lg"
                                            className="w-full rounded-2xl gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                            style={{ backgroundColor: selectedProject.colors.accent }}
                                            onClick={() => window.open(selectedProject.link, '_blank')}
                                        >
                                            Visit Live Site
                                            <ExternalLink className="w-4 h-4" />
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
