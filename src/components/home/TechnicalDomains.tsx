"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    SiReact,
    SiExpo,
    SiNextdotjs,
    SiAngular,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiPython,
    SiDjango,
    SiSpringboot,
    SiPostgresql,
    SiPrisma,
    SiDocker,
    SiRedis,
    SiAmazonwebservices,
    SiVercel,
    SiGreensock,
} from "react-icons/si";
import { IconType } from "react-icons";

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
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Python", icon: SiPython },
            { name: "Django", icon: SiDjango },
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
            { name: "AWS", icon: SiAmazonwebservices },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

export function TechnicalDomains() {
    return (
        <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10" />

            <div className="container max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Technical </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Proficiency</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive overview of the technologies I use to build scalable solutions.
                    </p>
                </div>

                <Tabs defaultValue="mobile" className="w-full">
                    <TabsList className="w-full justify-start h-auto p-1 bg-background/50 backdrop-blur-md rounded-xl mb-8 overflow-x-auto shadow-sm">
                        {domains.map((domain) => (
                            <TabsTrigger
                                key={domain.id}
                                value={domain.id}
                                className="px-6 py-3 rounded-lg text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-all data-[state=active]:shadow-sm"
                            >
                                {domain.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="min-h-[300px]">
                        {domains.map((domain) => (
                            <TabsContent key={domain.id} value={domain.id} className="mt-0">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                >
                                    <Card className="glass-panel border-none shadow-xl bg-background/40">
                                        <CardHeader>
                                            <CardTitle className="text-2xl font-bold">{domain.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                                        </CardContent>
                                    </Card>
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
