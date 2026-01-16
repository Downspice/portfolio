"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
    return (
        <section className="py-32 px-4">
            <div className="container max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="glass-panel p-12 rounded-3xl border-none shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

                        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Ready to create something impact?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new projects, opportunities, or just chatting about the latest in tech.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                                Get in Touch
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                                View Resume
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
