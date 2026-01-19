"use client";

import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md">
            <div className="container max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Column 1: Identity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                                <Image src="/JOSEPH.JPG" alt="Joseph Awer" fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground tracking-tight">Joseph Awer</h3>
                                <p className="text-xs text-muted-foreground">Software Developer</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground/60 pt-4">
                            &copy; {currentYear} Joseph Awer.<br />
                            All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:joseph.awer@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm">joseph.awer@gmail.com</span>
                            </a>
                            <div className="flex flex-col gap-2">
                                <a href="tel:+2330577210669" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                                    <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm">+233 057 721 0669</span>
                                </a>
                                <a href="tel:+2330595309469" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group pl-[3rem]">
                                    <span className="text-sm">+233 059 530 9469</span>
                                </a>
                            </div>
                            <a href="https://wa.me/+233577210669" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors group mt-1">
                                <div className="p-2 rounded-full bg-secondary group-hover:bg-green-500/10 transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <span className="text-sm">Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Online Presence */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Downspice" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-primary transition-all border border-transparent hover:border-primary/20">
                                <TechIcon name="GitHub" className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/joseph-awer/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-[#0A66C2] transition-all border border-transparent hover:border-[#0A66C2]/20">
                                <TechIcon name="LinkedIn" className="w-6 h-6 text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-foreground transition-all border border-transparent hover:border-foreground/20">
                                <TechIcon name="Resume" className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                                <span className="sr-only">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
