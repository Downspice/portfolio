"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Building production-ready apps with Expo & React Native. Focused on smooth gestures and native feel.",
    },
    {
        icon: Layout,
        title: "Modern Frontend",
        description: "Crafting responsive, accessible web interfaces using React, Next.js, and Angular.",
    },
    {
        icon: Server,
        title: "Backend Systems",
        description: "Designing scalable APIs and data models with Java, Python, and Django.",
    },
    {
        icon: Zap,
        title: "Real-time Infrastructure",
        description: "Architecting high-concurrency systems using WebSockets, Redis, and Docker.",
    },
];

export function EngineeringFocus() {
    return (
        <section className="py-24 px-4 md:px-6 relative">
            <div className="container max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Engineering Focus</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A full-stack approach driven by performance, scalability, and user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="glass-panel border-none h-full hover:-translate-y-1 transition-transform duration-300">
                                <CardContent className="p-6 flex flex-col items-start space-y-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <area.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
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
