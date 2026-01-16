
export interface TechItem {
    name: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    heroImage: string;
    role: string;
    timeline: string;
    problem: {
        statement: string;
        description: string;
        constraints: string[];
    };
    outcome: {
        statement: string;
        metrics: string[];
    };
    techStack: TechItem[];
    architecture: {
        frontend: string;
        backend: string;
        database: string;
        infra: string;
        description: string;
    };
    decisions: {
        title: string;
        description: string;
        reasoning: string;
    }[];
    challenges: {
        title: string;
        description: string;
        resolution: string;
    }[];
    reflection: string;
}

export const projects: CaseStudy[] = [
    {
        slug: "ecommerce-analytics",
        title: "E-Commerce Analytics Dashboard",
        heroImage: "/projects/analytics-hero.jpg",
        role: "Lead Full Stack Engineer",
        timeline: "3 Months",
        problem: {
            statement: "Merchants lacked real-time visibility into sales and inventory across multiple sales channels.",
            description: "The existing solution was a fragmented set of spreadsheets and legacy admin panels that batched data nightly. This led to stockouts during flash sales and slow decision-making for marketing campaigns.",
            constraints: ["Real-time data synchronization (<500ms latency)", "Handle 10k+ concurrent events during peaks", "Mobile-responsive for on-the-go checks"],
        },
        outcome: {
            statement: "Unified 4 sales channels into a single real-time dashboard, reducing stockouts by 40%.",
            metrics: ["<200ms consolidated data latency", "Zero downtime during Black Friday", "40% reduction in stockouts"],
        },
        techStack: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "PostgreSQL" },
            { name: "Redis" },
            { name: "AWS" },
        ],
        architecture: {
            frontend: "Next.js App Router for server components & robust routing.",
            backend: "Node.js microservices processing webhooks from Shopify/Stripe.",
            database: "PostgreSQL for relational integrity, timescaledb for metrics.",
            infra: "Dockerized containers on ECS, Redis for hot caching.",
            description: "The system uses an event-driven architecture. Webhooks push data to a message queue, which is processed and stored. The frontend subscribes to real-time updates via WebSockets for the live activity feed."
        },
        decisions: [
            {
                title: "Server Components vs Client Fetching",
                description: "Heavily utilized React Server Components (RSC) for the main dashboard shell.",
                reasoning: "Drastically reduced bundle size and eliminated waterfal requests. Only the live tickers and charts use client-side interactivity."
            },
            {
                title: "Polling vs WebSockets",
                description: "Implemented a custom WebSocket layer for the 'Live Activity' ticker.",
                reasoning: "Merchants needed to 'feel' the pulse of the store. Polling was inefficient and didn't provide that visceral real-time feedback."
            },
            {
                title: "Optimistic UI for Quick Actions",
                description: "Applied optimistic updates for inventory adjustments.",
                reasoning: "Removed the 300ms network roundtrip lag perception, making the admin tool feel native and snappy."
            }
        ],
        challenges: [
            {
                title: "Webhook Storms",
                description: "During flash sales, thousands of webhooks arrived simultaneously, overwhelming the DB.",
                resolution: "Implemented a Redis-based queue (BullMQ) to buffer incoming webhooks and process them at a controlled rate, ensuring data consistency without dropping events."
            },
            {
                title: "Complex Permissions",
                description: "Store owners needed granular permission control for staff accounts.",
                resolution: "Designed a Role-Based Access Control (RBAC) middleware tied to the auth session, caching permissions in Redis for fast lookups."
            }
        ],
        reflection: "This project taught me the importance of back-pressure handling in real-time systems. Simply accepting every request immediately is a recipe for disaster at scale.",
    }
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
    return projects.find((p) => p.slug === slug);
}
