export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    type?: string;
    focus: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: "ceptra-nexgen",
        title: "Software Engineer",
        company: "Ceptra Nexgen Technologies",
        period: "July 2025 – December 2025",
        location: "Remote · Accra, Ghana",
        type: "Contract",
        focus: [
            "Analyzed requirements and designed scalable solutions for production applications.",
            "Enhanced UI/UX, optimized performance, and improved accessibility standards.",
            "Polished existing applications to align with client branding and quality expectations.",
            "Facilitated cross-team communication and maintained comprehensive documentation."
        ]
    },
    {
        id: "jamila-home",
        title: "Software Engineer",
        company: "Jamila Home",
        period: "April 2025 – July 2025",
        location: "Remote · Westland, Ghana",
        type: "Contract",
        focus: [
            "Developed diverse full-stack mobile applications for catalog and customer collection management.",
            "Built a centralized full-stack web system for real-time sales monitoring.",
            "Led website remodeling projects (WordPress) and new development for Nunu Constructions.",
            "Conducted stakeholder training and authored system design documentation (SDS) and user manuals."
        ]
    },
    {
        id: "supertech",
        title: "Software Engineer",
        company: "Supertech Limited",
        period: "November 2023 – March 2025",
        location: "Dzorwulu, Accra, Ghana",
        focus: [
            "Modernized legacy systems by migrating Thymeleaf applications to React, Next.js, and Angular.",
            "Designed and delivered an internal VOIP task management system to streamline operations.",
            "Led UX initiatives, conducting A/B testing and advocating for user-centered design principles.",
            "Authored formal documentation including SRS, DDS, SDS, and Acceptance Test Plans (ATP).",
            "Mentored UI/UX teams on modern design tools and best practices."
        ]
    },
    {
        id: "bagro-crop",
        title: "Lead UX Designer",
        company: "BAgro Crop",
        period: "August 2024 – January 2025",
        location: "Remote · Ghana",
        focus: [
            "Collaborated with international partners (PHG Group, GIZ) and product managers on requirements.",
            "Led user research, persona creation, journey mapping, and scenario design.",
            "Created high-fidelity wireframes, mockups, and interactive prototypes for iterative testing.",
            "Refined designs based on user feedback to ensure intuitive product experiences."
        ]
    },
    {
        id: "transactshield",
        title: "Frontend Developer",
        company: "TransactShield Africa",
        period: "July 2023 – November 2023",
        location: "Remote · Ghana",
        focus: [
            "Optimized frontend architecture for improved performance and maintainability.",
            "Implemented robust form validation and ensured data integrity across the application.",
            "Enhanced responsiveness to ensure seamless experiences across all device types.",
            "Refined API integrations to streamline frontend-backend data flow."
        ]
    },
    {
        id: "amalitech",
        title: "Software Developer Intern",
        company: "AmaliTech",
        period: "November 2022 – June 2023",
        location: "Remote · Ghana",
        focus: [
            "Built a strong foundation in frontend development (HTML, CSS, Git).",
            "Participated in code reviews and collaborated with senior developers.",
            "Adhered to web development best practices focusing on performance and accessibility."
        ]
    }
];
