"use client";

import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";
import { Marquee } from "@/components/Marquee";
import { Mail, Phone, MessageSquare } from "lucide-react";

const FOOTER_MARQUEE = [
  "BUILD SOMETHING REAL", "GHANA → WORLD", "FULL-STACK", "MOBILE FIRST",
  "DESIGN DRIVEN", "PERFORMANCE", "OPEN TO WORK",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border mt-0">
      <Marquee items={FOOTER_MARQUEE} className="border-t-0" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="relative w-14 h-14 overflow-hidden border-2 border-primary shrink-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
              >
                <Image src="/JOSEPH.JPG" alt="Joseph Awer" fill className="object-cover grayscale" />
              </div>
              <div>
                <h3 className="font-display text-3xl tracking-wider text-foreground">JOSEPH AWER</h3>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="font-mono-label text-xs text-muted-foreground/60 leading-relaxed">
              &copy; {currentYear} Joseph Awer. All rights reserved.<br />
              Built with Next.js · Designed with culture.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="section-tag">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:joseph.awer@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono-label text-xs">joseph.awer@gmail.com</span>
              </a>
              <a
                href="tel:+2330577210669"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 border border-border group-hover:border-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono-label text-xs">+233 057 721 0669</span>
              </a>
              <a
                href="https://wa.me/+233577210669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="p-2 border border-border group-hover:border-accent transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-mono-label text-xs">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="section-tag">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Downspice"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border-2 border-border hover:border-primary hover:shadow-[3px_3px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <TechIcon name="GitHub" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border-2 border-border hover:border-primary hover:shadow-[3px_3px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <TechIcon name="Resume" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">Resume</span>
              </a>
              <Link
                href="/contact"
                className="group p-3 border-2 border-primary bg-primary/10 hover:bg-primary hover:shadow-[3px_3px_0_0_var(--primary)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="sr-only">Contact</span>
              </Link>
            </div>
            <p className="font-mono-label text-[10px] text-muted-foreground/50 uppercase tracking-widest pt-4">
              FOR THE CULTURE / BY THE CODE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
