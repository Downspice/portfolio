"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export function ProjectResults({ project }: { project: CaseStudy }) {
    return (
        <section className="py-24 px-4 bg-primary/5">
            <div className="container max-w-5xl mx-auto text-center space-y-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Outcome</h2>
                    <h3 className="text-3xl md:text-5xl font-semibold mb-8 text-foreground text-balance">
                        {project.outcome.statement}
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {project.outcome.metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="glass-panel p-8 rounded-2xl border-none shadow-lg bg-background/50 hover:bg-background/80 transition-colors">
                                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400">
                                    {/* Extract number if possible, currently simple text */}
                                    {metric.split(" ")[0]}
                                </span>
                                <p className="mt-4 text-muted-foreground font-medium text-lg">
                                    {metric.split(" ").slice(1).join(" ")}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-8"
                >
                    <Button size="lg" className="h-12 px-8 text-base">
                        View Live Project
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
