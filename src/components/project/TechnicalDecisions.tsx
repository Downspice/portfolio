"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";
import { CheckCircle2 } from "lucide-react";

export function TechnicalDecisions({ project }: { project: CaseStudy }) {
    return (
        <section className="py-24 px-4">
            <div className="container max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Key Decisions</h2>
                    <h3 className="text-3xl font-semibold mb-6">Engineering Decisions & Trade-offs</h3>
                </motion.div>

                <div className="space-y-12">
                    {project.decisions.map((decision, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 md:gap-12"
                        >
                            <div className="md:w-1/3">
                                <h4 className="text-xl font-semibold mb-2">{decision.title}</h4>
                                <div className="h-1 w-12 bg-primary/20 rounded-full" />
                            </div>
                            <div className="md:w-2/3 space-y-4">
                                <p className="text-foreground font-medium text-lg leading-relaxed">
                                    {decision.description}
                                </p>
                                <div className="glass-panel p-5 rounded-lg bg-secondary/30 border-none">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Why we did this</span>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {decision.reasoning}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
