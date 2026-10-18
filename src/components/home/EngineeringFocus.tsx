"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Emil Kowalski custom ease curve
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const areas = [
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Building production-ready apps with Expo & React Native. Focused on smooth gestures and native feel.",
    },
    {
        icon: Layout,
        title: "Modern Frontend",
        description: "Crafting responsive, accessible web interfaces using React, Next.js, TypeScript and Tailwind.",
    },
    {
        icon: Server,
        title: "Backend Systems",
        description: "Designing scalable APIs, microservices, and reliable data architectures with Express, Node.js, and Java.",
    },
    {
        icon: Zap,
        title: "Real-time & Infrastructure",
        description: "Architecting high-concurrency systems using WebSockets, Redis caching, and containerized Docker environments.",
    },
];

export function EngineeringFocus() {
    return (
        <section className="py-20 md:py-28 px-4 md:px-6 relative">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <span className="section-tag block mb-2">Core Competencies</span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Engineering Focus</h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        A full-stack approach driven by performance, maintainable architecture, and polished user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05, ease: EASE_OUT }}
                        >
                            <Card className="glass-panel group relative border border-border/70 hover:border-primary/40 h-full transition-[transform,border-color,background-color] duration-150 ease-out hover:-translate-y-1 active:scale-[0.98] select-none">
                                <CardContent className="p-6 flex flex-col items-start space-y-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary transition-colors duration-150 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <area.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-150">
                                            {area.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                            {area.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
