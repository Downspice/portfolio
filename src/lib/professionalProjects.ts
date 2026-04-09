import { IconType } from "react-icons";

export interface ProfessionalProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    stack: string[];
    image: string;
    color: string;
}

export const professionalProjects: ProfessionalProject[] = [
    {
        id: "tbms",
        title: "TBMS",
        subtitle: "Tyre & Battery Management System",
        description: "A comprehensive web application for workshop managers at Amandi Work plant stations to track vehicles and site equipment nationwide.",
        stack: ["React", "shadcn", "Figma"],
        image: "/tbms.png",
        color: "#E4B023"
    },
    {
        id: "nhia-credentialing",
        title: "NHIA-Credentialing",
        subtitle: "Healthcare Facility Automation",
        description: "A centralized platform for the National Health Insurance Authority to automate manual processes in the health facility credentialing cycle.",
        stack: ["Java", "Spring Boot", "Thymeleaf"],
        image: "/nhia.jpg",
        color: "#0d9488"
    },
    {
        id: "nhia-webportal",
        title: "NHIA Webportal",
        subtitle: "Provider Application Portal",
        description: "An enterprise portal enabling health facility managers to apply for credentials and manage documentation streamline.",
        stack: ["Java", "Spring Boot", "Thymeleaf"],
        image: "/nhia.jpg",
        color: "#3b82f6"
    },
    {
        id: "fcm",
        title: "FCM",
        subtitle: "Field & Maintenance Management",
        description: "A multi-departmental system for managing tickets, customers, and inventory with real-time transparency between operations and ERP systems.",
        stack: ["Next.js", "React", "Java", "Spring Boot", "Thymeleaf", "Keycloak"],
        image: "/projects/fcm.png",
        color: "#8b5cf6"
    },
    {
        id: "clickinsure",
        title: "ClickInsure",
        subtitle: "Insurance Brokerage System",
        description: "An end-to-end policy management system for brokers to track sales, manage upgrades, and maintain client relations effectively.",
        stack: ["React", "Next.js", "Python"],
        image: "/clickinsure.png",
        color: "#6366f1"
    }
];
