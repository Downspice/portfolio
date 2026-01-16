"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Server, Database, Smartphone } from "lucide-react";

export function SolutionArchitecture({ project }: { project: CaseStudy }) {
    return (
        <section className="py-24 px-4 bg-secondary/20">
            <div className="container max-w-5xl mx-auto">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">The Solution</h2>
                        <h3 className="text-3xl font-semibold mb-6">System Architecture</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.architecture.description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ArchitectureCard
                        icon={Smartphone}
                        title="Frontend / Mobile"
                        content={project.architecture.frontend}
                        delay={0}
                    />
                    <ArchitectureCard
                        icon={Server}
                        title="Backend Services"
                        content={project.architecture.backend}
                        delay={0.1}
                    />
                    <ArchitectureCard
                        icon={Database}
                        title="Data Layer"
                        content={project.architecture.database}
                        delay={0.2}
                    />
                    <ArchitectureCard
                        icon={Layers}
                        title="Infrastructure"
                        content={project.architecture.infra}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}

function ArchitectureCard({ icon: Icon, title, content, delay }: { icon: any, title: string, content: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="glass-panel border-none h-full hover:bg-white/40 dark:hover:bg-black/40 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                        {content}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
