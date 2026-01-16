"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function ProjectNavigation() {
    return (
        <section className="py-12 px-4 border-t border-border/40">
            <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="w-full md:w-auto">
                    <div className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <div className="p-2 rounded-full bg-secondary group-hover:bg-secondary/80 transition-colors">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <div className="text-left">
                            <span className="block text-xs font-medium uppercase tracking-wider opacity-60">Back</span>
                            <span className="font-medium">All Projects</span>
                        </div>
                    </div>
                </Link>

                {/* Placeholder for Next Project logic if adding multiple projects */}
                <Link href="#" className="w-full md:w-auto opacity-50 cursor-not-allowed pointer-events-none">
                    <div className="group flex items-center justify-end gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <div className="text-right">
                            <span className="block text-xs font-medium uppercase tracking-wider opacity-60">Next</span>
                            <span className="font-medium">Coming Soon</span>
                        </div>
                        <div className="p-2 rounded-full bg-secondary group-hover:bg-secondary/80 transition-colors">
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
