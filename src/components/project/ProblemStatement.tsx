"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";

export function ProblemStatement({ project }: { project: CaseStudy }) {
    return (
        <section className="py-20 px-4">
            <div className="container max-w-3xl mx-auto space-y-16">
                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">The Problem</h2>
                    <p className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-tight text-balance">
                        "{project.problem.statement}"
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.problem.description}
                    </p>
                </motion.div>

                {/* Constraints */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border/50"
                >
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Core Constraints</h3>
                        <ul className="space-y-3">
                            {project.problem.constraints.map((constraint, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-destructive/60 shrink-0" />
                                    {constraint}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-panel p-6 rounded-xl border-none bg-secondary/30">
                        <h3 className="text-lg font-semibold mb-2">Why It Mattered</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Solving this wasn't just about efficiency; it was about preventing revenue loss and enabling data-driven decisions in real-time.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
