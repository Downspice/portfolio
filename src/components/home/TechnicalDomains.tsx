"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    SiReact,
    SiExpo,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNestjs,
    SiSpringboot,
    SiPostgresql,
    SiPrisma,
    SiDocker,
    SiRedis,
    SiSocketdotio,
    SiVercel,
    SiGreensock,
    SiExpress,
} from "react-icons/si";
import { IconType } from "react-icons";
import { ChevronRight } from "lucide-react";

const domains = [
    {
        id: "mobile",
        label: "Mobile",
        title: "Mobile Development",
        tools: [
            { name: "React Native", icon: SiReact },
            { name: "Expo", icon: SiExpo },
            { name: "Reanimated", icon: SiGreensock }, // Proxy for animation lib
            { name: "NativeWind", icon: SiTailwindcss },
        ],
    },
    {
        id: "frontend",
        label: "Frontend",
        title: "Frontend Engineering",
        tools: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        title: "Backend & Data",
        tools: [
            { name: "NestJS", icon: SiNestjs },
            { name: "Express", icon: SiExpress },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        id: "infra",
        label: "Infrastructure",
        title: "Real-Time & DevOps",
        tools: [
            { name: "Docker", icon: SiDocker },
            { name: "Redis", icon: SiRedis },
            { name: "Socket.io", icon: SiSocketdotio },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

export function TechnicalDomains() {
    return (
        <section className="mt-20 pt-24 pb-0 bg-secondary/30 relative overflow-hidden flex flex-col items-center w-full">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10" />

            <div className="container max-w-5xl mx-auto px-4">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-semibold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Technical </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Proficiency</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive overview of the technologies I use to build scalable solutions.
                    </p>
                </div>
            </div>

            <div className="w-full">
                <Tabs defaultValue="mobile" className="w-full flex flex-col items-center">
                    <div className="container max-w-5xl mx-auto px-4 w-full relative">
                        {/* Scroll signal for mobile */}
                        <div className="absolute right-4 top-1 bottom-9 w-12 bg-linear-to-l from-background to-transparent z-20 md:hidden pointer-events-none" />
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            className="absolute right-6 top-[28px] -translate-y-1/2 z-30 md:hidden text-primary pointer-events-none flex flex-col items-center gap-0.5"
                        >
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-[7px] font-bold uppercase tracking-widest whitespace-nowrap">Swipe</span>
                        </motion.div>

                        <TabsList className="w-full justify-start h-auto p-1 bg-background/50 backdrop-blur-md rounded-xl mb-8 overflow-x-auto shadow-sm no-scrollbar relative">
                            <style jsx global>{`
                                .no-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                                .no-scrollbar {
                                    -ms-overflow-style: none;  /* IE and Edge */
                                    scrollbar-width: none;  /* Firefox */
                                }
                            `}</style>
                            {domains.map((domain) => (
                                <TabsTrigger
                                    key={domain.id}
                                    value={domain.id}
                                    className="px-6 py-3 rounded-lg text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-all data-[state=active]:shadow-sm outline-hidden"
                                >
                                    {domain.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <div className="w-full">
                        {domains.map((domain) => (
                            <TabsContent key={domain.id} value={domain.id} className="mt-0 w-full outline-hidden">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="w-full"
                                >
                                    <div className="w-full glass-panel border-x-0 rounded-none py-12 md:py-16 bg-background/40 overflow-hidden relative">
                                        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
                                        
                                        <div className="container max-w-5xl mx-auto px-4 relative z-10">
                                            <h3 className="text-2xl font-bold mb-8 text-foreground">{domain.title}</h3>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                                {domain.tools.map((tool, i) => (
                                                    <motion.div
                                                        key={tool.name}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 + 0.1 }}
                                                    >
                                                        <FlashlightCard tool={tool} />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

function FlashlightCard({ tool }: { tool: { name: string; icon: IconType } }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative flex items-center gap-3 px-4 py-4 rounded-xl bg-secondary/30 text-secondary-foreground border border-border/50 transition-colors overflow-hidden cursor-default"
        >
            {/* Flashlight gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            180px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl pointer-events-none transition-colors duration-500" />
            
            <tool.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors relative z-10 group-hover:scale-110 duration-300" />
            <span className="text-sm font-medium relative z-10 group-hover:text-foreground transition-colors">{tool.name}</span>
        </div>
    );
}
