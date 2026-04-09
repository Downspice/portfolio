"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "@/lib/education";

export function Education() {
    return (
        <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-secondary/10 border-t border-border/40">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
                    {/* Left Side: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/3 space-y-4"
                    >
                        <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs">
                            <GraduationCap className="w-5 h-5" />
                            <span>Academic History</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Education
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            My academic foundation in Information Technology and the milestone achievements that shaped my technical journey.
                        </p>
                    </motion.div>

                    {/* Right Side: Timeline */}
                    <div className="md:w-2/3 space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-linear-to-b before:from-primary/50 before:to-transparent">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-12 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                <div className="space-y-4 p-8 rounded-3xl bg-background/40 border border-border/50 hover:border-primary/20 backdrop-blur-sm transition-all duration-500 shadow-sm hover:shadow-lg">
                                    <div className="space-y-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.degree}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                                                <Calendar className="w-3 h-3" />
                                                {item.period}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                            <MapPin className="w-4 h-4 text-primary/60" />
                                            <span>{item.institution}</span>
                                        </div>
                                    </div>

                                    {/* Hover flare */}
                                    <div className="absolute -inset-px border-2 border-transparent group-hover:border-primary/10 rounded-3xl pointer-events-none transition-colors duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
