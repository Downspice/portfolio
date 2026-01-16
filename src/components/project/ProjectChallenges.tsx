"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";
import { AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectChallenges({ project }: { project: CaseStudy }) {
    return (
        <section className="py-24 px-4 bg-muted/30">
            <div className="container max-w-4xl mx-auto space-y-24">

                {/* Challenges Section */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Challenges</h2>
                        <h3 className="text-3xl font-semibold mb-6">Reality Check & Resolutions</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {project.challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-l-4 border-l-destructive/50 bg-background/50 backdrop-blur-sm shadow-sm border-t-0 border-r-0 border-b-0">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-1">
                                            <AlertTriangle className="w-5 h-5 text-destructive/70" />
                                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {challenge.description}
                                        </p>
                                        <div className="pt-4 border-t border-border/50">
                                            <p className="text-sm font-medium text-foreground mb-1">Resolution:</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {challenge.resolution}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reflection Section - Integrated here for flow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border-none shadow-sm text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-xl font-semibold mb-6">Reflection</h3>
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                        "{project.reflection}"
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
