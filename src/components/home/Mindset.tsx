"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Cpu, Users, Zap } from "lucide-react";

export function Mindset() {
    return (
        <section className="py-24 px-4 bg-linear-to-b from-background to-secondary/20">
            <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* How I Work - Large Panel */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold mb-6">How I Work</h2>
                        <div className="glass-panel p-8 rounded-2xl border-none shadow-sm space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 bg-primary/5 blur-3xl rounded-full -z-10" />

                            <div className="grid sm:grid-cols-2 gap-8">
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

                {/* Currently - Sidebar Card */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full"
                    >
                        <Card className="h-full glass-panel border-none shadow-sm flex flex-col justify-between">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Currently</span>
                                </div>
                                <CardTitle className="text-xl">Exploring WebAssembly</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm diving deep into Rust and WASM to push the boundaries of browser performance for image processing tasks.
                                </p>
                                <hr className="border-border/50" />
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-foreground">Recently Shipped:</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Portfolio Refactor (Next.js 15)</li>
                                        <li>• React Native Widget Lib</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
