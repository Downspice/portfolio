"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Cpu, Users, Zap } from "lucide-react";

export function Mindset() {
    return (
        <section className="pt-24 pb-8 px-4 bg-linear-to-b from-background to-secondary/20">
            <div className="w-full flex flex-col gap-3">
                {/* How I Work - Large Panel */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="container max-w-6xl mx-auto px-4 mb-6 text-center">
                            <h2 className="text-3xl font-semibold">How I Work</h2>
                        </div>
                        <div className="glass-panel w-full px-4 py-12 md:py-16 rounded-none border-x-0 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[100px] rounded-full -z-10" />
                            <div className="absolute bottom-0 left-0 p-32 bg-secondary/5 blur-[100px] rounded-full -z-10" />

                            <div className="container max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-primary font-medium">
                                        <Cpu className="w-5 h-5" />
                                        <h3>Intentional Tooling</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        I don't just pick the newest framework. I choose tools that solve the specific problem at hand, ensuring maintainability and long-term stability.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-primary font-medium">
                                        <Zap className="w-5 h-5" />
                                        <h3>Performance First</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        User experience is directly tied to performance. I optimize for core web vitals and smooth 60fps animations on mobile from day one.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-primary font-medium">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <h3>Code Quality</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Clean, documented, and tested code is non-negotiable. I write software that is easy to read, easy to debug, and easy to extend.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-primary font-medium">
                                        <Users className="w-5 h-5" />
                                        <h3>User-Centric</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Technology serves people. I constantly validate assumptions and iterate based on real feedback to deliver value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Currently - Full Width Section */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-full glass-panel border-x-0 rounded-none shadow-sm py-12 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-32 bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
                            
                            <div className="container max-w-3xl mx-auto">
                                <div className="flex justify-center items-center gap-2 mb-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Currently Building</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">Trip Booking System</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    I am currently developing a comprehensive trip booking system for SHS students utilizing <span className="font-medium text-primary">Next.js, Shadcn UI, NestJS, Prisma, PostgreSQL</span>, and <span className="font-medium text-emerald-500">Paystack</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
