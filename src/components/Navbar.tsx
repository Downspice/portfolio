"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mockups", href: "/mockups" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Stack", href: "/stack" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-8",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <nav className="max-w-7xl mx-auto">
                <div className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500",
                    scrolled 
                        ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg" 
                        : "bg-transparent border border-transparent"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                            J
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">Joseph Awer</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-medium transition-all relative group",
                                    pathname === link.href 
                                        ? "text-primary bg-primary/5" 
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div 
                                        layoutId="nav-active"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-24 left-4 right-4 md:hidden bg-background/90 backdrop-blur-2xl border border-border/50 rounded-3xl p-6 shadow-2xl z-[101]"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.href} 
                                        href={link.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-4 rounded-2xl transition-all",
                                            pathname === link.href 
                                                ? "bg-primary text-white" 
                                                : "bg-muted/30 text-foreground hover:bg-muted"
                                        )}
                                    >
                                        <span className="font-semibold text-lg">{link.name}</span>
                                        <ChevronRight className="w-5 h-5 opacity-50" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
