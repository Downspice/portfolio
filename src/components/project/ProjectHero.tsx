"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";

export function ProjectHero({ project }: { project: CaseStudy }) {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 blur-3xl rounded-full -translate-y-1/4 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-secondary/10 blur-3xl rounded-full translate-y-1/4 -translate-x-1/4" />
            </div>

            <div className="container max-w-5xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="inline-block mb-8">
                        <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary gap-2 text-muted-foreground">
                            <ArrowLeft className="w-4 h-4" /> Back to Projects
                        </Button>
                    </Link>
                </motion.div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground border-l-2 border-primary/20 pl-4">
                            <div>
                                <span className="block font-medium text-foreground">Role</span>
                                {project.role}
                            </div>
                            <div>
                                <span className="block font-medium text-foreground">Timeline</span>
                                {project.timeline}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="w-full aspect-video rounded-xl overflow-hidden glass-panel border-none shadow-2xl relative"
                    >
                        {/* Placeholder for real image */}
                        <div className="absolute inset-0 bg-linear-to-br from-secondary/50 to-background flex items-center justify-center text-muted-foreground">
                            <span className="text-lg">Project Hero Image ({project.title})</span>
                        </div>
                        {/* Overlay Metadata */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-md border-t border-white/10 flex flex-wrap gap-4">
                            {project.techStack.map((tech) => (
                                <div key={tech.name} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <TechIcon name={tech.name} className="w-4 h-4 text-primary" />
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
