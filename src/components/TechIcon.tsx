"use client";

import {
    SiReact,
    SiExpo,
    SiNextdotjs,
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
    SiFigma,
    SiNestjs,
    SiExpress,
    SiOpenjdk,
    SiThymeleaf,
    SiKeycloak,
    SiShadcnui,
} from "react-icons/si";
import { FileText, LayoutDashboard } from "lucide-react";
import { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
    "React": SiReact,
    "React Native": SiReact,
    "Expo": SiExpo,
    "Next.js": SiNextdotjs,
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
    "Figma": SiFigma,
    "Nestjs": SiNestjs,
    "Express": SiExpress,
    "Java": SiOpenjdk,
    "Thymeleaf": SiThymeleaf,
    "Keycloak": SiKeycloak,
    "shadcn": SiShadcnui,
    "Resume": FileText as IconType,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
    const Icon = iconMap[name];
    if (!Icon) return null;
    return <Icon className={className} />;
}
