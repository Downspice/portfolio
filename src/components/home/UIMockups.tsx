"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ExternalLink, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/TechIcon";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import Image from "next/image";

const mockups = [
    {
        title: "EC-Verification App",
        subtitle: "Personal Project",
        description: "A biometric verification mockup designed to prevent identity theft and multi-voting in Ghanaian national elections.",
        stack: ["Figma"],
        image: "/ec-verification.png",
        links: [
            { label: "View Design", url: "https://www.figma.com/design/TCGzp76LJFj1DCQmioxrpN/EC-VERIFICATION-APP?node-id=159-790&node-type=section&t=vRp0GafPGnO9eumO-0" }
        ],
        colors: {
            primary: "#007AFF",
            secondary: "#4459A3",
            text: "#FFFFFF"
        }
    },
    {
        title: "Protifai",
        subtitle: "Livestock E-commerce",
        description: "A livestock marketplace connecting consumers, suppliers, and farmers with transparent trading and tracking.",
        stack: ["Figma"],
        image: "/protifai.png",
        links: [
            { label: "Mobile View", url: "https://www.figma.com/design/pmuuQG62imtlpsThEtHyqA/PROTIFAI?node-id=1-2&node-type=canvas&t=IJ9EzCauqvOr8nIf-0" },
            { label: "Web View", url: "https://www.figma.com/design/rvxF1ylIi41D3l955Oo1oz/Protifai-Web?node-id=629-3280&t=nubGjIqb6QfuZDKk-0" }
        ],
        colors: {
            primary: "#406B42",
            secondary: "#808080",
            text: "#FFFFFF"
        }
    },
    {
        title: "TBMS",
        subtitle: "Tyre & Battery Management",
        description: "An enterprise system for workshop managers to track construction equipment diagnostics and maintenance status.",
        stack: ["Figma"],
        image: "/tbms.png",
        links: [
            { label: "View Design", url: "https://www.figma.com/design/CYJ5WfyDWPsZPG8OWbt4Fx/TBMS?node-id=0-1&p=f&t=uQQmElCLcHUGHTui-0" }
        ],
        colors: {
            primary: "#E4B023",
            secondary: "#94A2AA",
            text: "#000000"
        }
    }
];

export function UIMockups() {
    const [selectedMockup, setSelectedMockup] = useState<typeof mockups[0] | null>(null);

    return (
        <section className="relative py-24 px-4 bg-muted/30 overflow-hidden">
            <BackgroundOrbs />
            
            {/* Floating decorative icons */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] text-primary"
                >
                    <TechIcon name="Figma" className="w-12 h-12" />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 right-[15%] text-primary"
                >
                    <TechIcon name="Express" className="w-16 h-16" />
                </motion.div>
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-primary font-medium mb-2 uppercase tracking-widest text-sm">Want to see what I've done?</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">My UI Mockups</h2>
                        <div className="h-1.5 w-20 bg-primary/20 rounded-full mx-auto md:mx-0" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockups.map((mockup, index) => (
                        <CardTilt key={mockup.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col h-full bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50"
                            >
                                {/* Project Image Container */}
                                <div 
                                    className="relative aspect-[4/3] overflow-hidden cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-700"
                                    onClick={() => setSelectedMockup(mockup)}
                                >
                                    <Image
                                        src={mockup.image}
                                        alt={mockup.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <Maximize2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div 
                                        className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 text-white"
                                        style={{ backgroundColor: `${mockup.colors.primary}88` }}
                                    >
                                        {mockup.subtitle}
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{mockup.title}</h4>
                                        <div className="flex items-center gap-2">
                                            {mockup.stack.map(s => (
                                                <div key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                                    <TechIcon name={s} className="w-3.5 h-3.5" />
                                                    <span>{s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                                        {mockup.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {mockup.links.map(link => (
                                            <Button 
                                                key={link.url}
                                                variant="outline" 
                                                size="sm"
                                                className="rounded-xl border-border/50 hover:bg-muted group/btn gap-2"
                                                onClick={() => window.open(link.url, '_blank')}
                                            >
                                                {link.label}
                                                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating accent background */}
                                <div 
                                    className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-700"
                                    style={{ backgroundColor: mockup.colors.primary }}
                                />
                                
                                {/* Border glow effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-3xl pointer-events-none transition-colors duration-500" />
                            </motion.div>
                        </CardTilt>
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            <AnimatePresence>
                {selectedMockup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedMockup(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-background w-full max-w-5xl rounded-3xl overflow-hidden relative shadow-2xl overflow-y-auto max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedMockup(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-2/3 relative aspect-video lg:aspect-auto">
                                    <Image
                                        src={selectedMockup.image}
                                        alt={selectedMockup.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                                    <h4 
                                        className="text-sm font-bold uppercase tracking-widest mb-2"
                                        style={{ color: selectedMockup.colors.primary }}
                                    >
                                        {selectedMockup.subtitle}
                                    </h4>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight line-height-[1.1]">{selectedMockup.title}</h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                        {selectedMockup.description}
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Stack</span>
                                            <div className="flex gap-2">
                                                {selectedMockup.stack.map(s => (
                                                    <div key={s} className="px-3 py-1 rounded-full bg-muted flex items-center gap-2 text-xs font-medium">
                                                        <TechIcon name={s} className="w-3.5 h-3.5" />
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col gap-3">
                                        {selectedMockup.links.map(link => (
                                            <Button 
                                                key={link.url}
                                                size="lg"
                                                className="w-full rounded-2xl gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                                style={{ 
                                                    backgroundColor: selectedMockup.colors.primary,
                                                    color: selectedMockup.colors.text 
                                                }}
                                                onClick={() => window.open(link.url, '_blank')}
                                            >
                                                Open in Figma
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        ))}
                                        <Button 
                                            variant="ghost" 
                                            size="lg" 
                                            className="w-full rounded-2xl text-muted-foreground"
                                            onClick={() => setSelectedMockup(null)}
                                        >
                                            Close Preview
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function CardTilt({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            className="flex flex-col h-full"
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full">
                {children}
            </div>
        </motion.div>
    );
}
