"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        title: "E-Commerce Analytics Dashboard",
        description: "A comprehensive analytics platform for online retailers, providing real-time insights into sales, inventory, and customer behavior.",
        tags: ["Next.js", "TypeScript", "Tremor", "PostgreSQL"],
        gradient: "from-blue-500/20 to-purple-500/20",
        reverse: false,
    },
    {
        title: "Mobile Fitness Companion",
        description: "A React Native application focused on personalized workout plans and real-time tracking using Expo and Reanimated.",
        tags: ["React Native", "Expo", "Supabase", "NativeWind"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        reverse: true,
    },
    {
        title: "Real-time Collaboration Tool",
        description: "A collaborative whiteboard application allowing distributed teams to brainstorm and sketch ideas in real-time.",
        tags: ["React", "WebSockets", "Redis", "Docker"],
        gradient: "from-orange-500/20 to-red-500/20",
        reverse: false,
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 px-4">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">Featured Projects</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            A selection of projects that demonstrate my ability to solve complex problems with modern technology.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${project.reverse ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Project Visual */}
                            <div className="w-full lg:w-3/5 aspect-video rounded-2xl overflow-hidden glass-panel border-none relative group cursor-pointer shadow-lg">
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-xs">
                                    <Button variant="outline" className="gap-2 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                                        View Case Study <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                                <Button variant="ghost" className="group pl-0 hover:bg-transparent hover:text-primary">
                                    Live Demo <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
