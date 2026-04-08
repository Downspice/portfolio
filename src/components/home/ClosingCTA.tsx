"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
    return (
        <section className="mt-20 py-32 px-4 w-full glass-panel border-x-0 rounded-none shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background elements spanning full width */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="container max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6">Ready to create something impactful?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, opportunities, or just chatting about the latest in tech.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto relative overflow-hidden group">
                            <span className="relative z-10">Get in Touch</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Button>
                        <a href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full group overflow-hidden relative">
                                <span className="relative z-10 group-hover:text-foreground transition-colors">View Resume</span>
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
