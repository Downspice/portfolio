"use client";

import { motion } from "framer-motion";
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
            { name: "Angular", icon: SiAngular },
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
                    <h2 className="text-3xl font-semibold mb-4">Technical Proficiency</h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive overview of the technologies I use to build scalable solutions.
                    </p>
                </div>

                <Tabs defaultValue="mobile" className="w-full">
                    <TabsList className="w-full justify-start h-auto p-1 bg-background/50 backdrop-blur-md rounded-xl mb-8 overflow-x-auto">
                        {domains.map((domain) => (
                            <TabsTrigger
                                key={domain.id}
                                value={domain.id}
                                className="px-6 py-3 rounded-lg text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-all"
                            >
                                {domain.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="min-h-[300px]">
                        {domains.map((domain) => (
                            <TabsContent key={domain.id} value={domain.id} className="mt-0">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="glass-panel border-none shadow-sm">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{domain.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {domain.tools.map((tool) => (
                                                    <div
                                                        key={tool.name}
                                                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50 text-secondary-foreground border border-border/50 hover:bg-secondary transition-colors"
                                                    >
                                                        <tool.icon className="w-5 h-5 text-primary" />
                                                        <span className="text-sm font-medium">{tool.name}</span>
                                                    </div>
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
