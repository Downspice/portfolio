"use client";

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
    SiGithub,
    SiLinkedin,
} from "react-icons/si";
import { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
    "React": SiReact,
    "React Native": SiReact,
    "Expo": SiExpo,
    "Next.js": SiNextdotjs,
    "Angular": SiAngular,
    "TypeScript": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Framer Motion": SiFramer,
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Django": SiDjango,
    "Spring Boot": SiSpringboot,
    "PostgreSQL": SiPostgresql,
    "Prisma": SiPrisma,
    "Docker": SiDocker,
    "Redis": SiRedis,
    "AWS": SiAmazonwebservices,
    "Vercel": SiVercel,
    "Reanimated": SiGreensock,
    "NativeWind": SiTailwindcss,
    "GitHub": SiGithub,
    "LinkedIn": SiLinkedin,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
    const Icon = iconMap[name];
    if (!Icon) return null;
    return <Icon className={className} />;
}
