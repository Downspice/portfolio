"use client";

import { motion } from "framer-motion";
import { Briefcase, Boxes, ShieldCheck, Database, Layout } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { professionalProjects } from "@/lib/professionalProjects";

export function ProfessionalProjects() {
    return (
        <section className="relative py-24 px-4 bg-background overflow-hidden border-b border-border/40">
            <BackgroundOrbs />
            
            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                                <span className="h-px w-8 bg-primary/40" />
                                <Briefcase className="w-4 h-4" />
                                <span>Industry Experience</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Real-World Projects</h2>
                            <p className="text-muted-foreground text-lg max-w-xl">
                                High-impact enterprise systems developed for national authorities and diverse industries across Ghana.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {professionalProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
                            className="group relative"
                        >
                            {/* Horizontal Card Layout */}
                            <div className="relative overflow-hidden rounded-[2rem] bg-secondary/10 border border-border/40 backdrop-blur-md p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center hover:bg-secondary/15 transition-all duration-700">
                                
                                {/* Decorative Icon/Visual Side */}
                                <div className="w-full lg:w-1/3 flex-shrink-0 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-background/40 border border-white/5 flex items-center justify-center p-12">
                                     <div 
                                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                                        style={{ 
                                            background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` 
                                        }}
                                     />
                                     <ProjectIcon type={project.id} color={project.color} />
                                     
                                     {/* Tech Cluster Floating */}
                                     <div className="absolute inset-0 pointer-events-none">
                                        {project.stack.slice(0, 3).map((s, i) => (
                                            <motion.div
                                                key={s}
                                                animate={{ 
                                                    y: [0, i % 2 === 0 ? 10 : -10, 0],
                                                    opacity: [0.6, 1, 0.6]
                                                }}
                                                transition={{ 
                                                    duration: 4 + i, 
                                                    repeat: Infinity, 
                                                    ease: "easeInOut" 
                                                }}
                                                className="absolute hidden md:flex items-center gap-2 p-2 rounded-xl bg-background/80 border border-white/10 backdrop-blur-md text-[10px] font-bold"
                                                style={{
                                                    top: `${20 + i * 25}%`,
                                                    right: i % 2 === 0 ? '10%' : 'auto',
                                                    left: i % 2 !== 0 ? '10%' : 'auto',
                                                }}
                                            >
                                                <TechIcon name={s} className="w-3 h-3" />
                                                {s}
                                            </motion.div>
                                        ))}
                                     </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span 
                                                className="w-2 h-2 rounded-full" 
                                                style={{ backgroundColor: project.color }}
                                            />
                                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{project.subtitle}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-500">{project.title}</h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 flex flex-wrap gap-3">
                                        {project.stack.map(s => (
                                            <div key={s} className="px-4 py-2 rounded-xl bg-background/50 border border-border/50 flex items-center gap-2 text-[11px] font-bold text-foreground/80 group-hover:border-primary/20 transition-colors">
                                                <TechIcon name={s} className="w-4 h-4" />
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Background Glow */}
                                <div 
                                    className="absolute -bottom-24 -right-24 w-64 h-64 blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
                                    style={{ backgroundColor: project.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectIcon({ type, color }: { type: string; color: string }) {
    const iconClass = "w-20 h-20 md:w-24 md:h-24 relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3";
    
    if (type === 'fcm') return <Layout className={iconClass} style={{ color }} />;
    if (type === 'tbms') return <Boxes className={iconClass} style={{ color }} />;
    if (type === 'nhia-credentialing') return <ShieldCheck className={iconClass} style={{ color }} />;
    if (type === 'nhia-webportal') return <Database className={iconClass} style={{ color }} />;
    return <Layout className={iconClass} style={{ color }} />;
}
