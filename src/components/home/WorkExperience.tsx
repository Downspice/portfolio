"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function WorkExperience() {
    return (
        <section className="py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A timeline of technical leadership, system architecture, and delivering impact across diverse environments.
                    </p>
                </motion.div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {experiences.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center shrink-0 z-10 md:-translate-x-1/2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Briefcase className="w-4 h-4 text-primary" />
                            </div>

                            {/* Card content */}
                            <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 p-6 md:p-8 rounded-2xl border border-white/10 glass-panel shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-primary/20">
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                            <h3 className="text-xl font-bold text-foreground">
                                                {role.title}
                                            </h3>
                                            {role.type && (
                                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                                                    {role.type}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-primary font-medium text-lg leading-tight mb-2">
                                            {role.company}
                                        </div>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {role.period}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {role.location}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {role.focus.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground/90 leading-relaxed flex items-start gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
