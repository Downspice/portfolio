"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-24">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="container max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full glass-panel text-sm font-medium text-muted-foreground mb-2">
                        Available for new opportunities
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance">
                        Joseph Awer<br />
                        <span className="text-3xl md:text-5xl lg:text-5xl text-muted-foreground block mt-2">
                            Software Developer
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg text-balance leading-relaxed pt-2">
                        Mobile & Full-Stack Systems Specialist.<br />
                        Building performant applications with <span className="text-foreground font-medium">Expo</span>, <span className="text-foreground font-medium">Next.js</span>, and <span className="text-foreground font-medium">Python</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all duration-300">
                            View Projects
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/80 dark:bg-black/20 dark:hover:bg-black/40">
                            Get in Touch
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 mt-4 text-muted-foreground">
                        <a href="https://github.com/Downspice" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform">
                            <TechIcon name="GitHub" className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <a href="https://www.linkedin.com/in/joseph-awer/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform">
                            <TechIcon name="LinkedIn" className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </motion.div>

                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative shrink-0"
                >
                    <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl glass-panel">
                        <Image
                            src="/JOSEPH.JPG"
                            alt="Joseph Awer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 -m-4 rounded-full border border-primary/10 border-dashed animate-spin-slow pointer-events-none" style={{ animationDuration: '20s' }} />
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1.5 bg-muted-foreground/50 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
